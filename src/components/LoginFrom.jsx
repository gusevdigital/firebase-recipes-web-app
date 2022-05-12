import { useState } from 'react';
import useAuthStatus from '../hooks/useAuthStatus';
import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';
import { toast } from 'react-toastify';

function LoginFrom() {
    const auth = getAuth();
    const { isLoggedIn, checkingStatus } = useAuthStatus();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setEmail('');
            setPassword('');
        } catch (error) {
            toast.error(error.code);
        }
    };

    const handleResetPassword = async () => {
        if (!email) {
            toast.error('Missing email!');
            return;
        }
        try {
            const result = await sendPasswordResetEmail(auth, email);
            const user = result.user;
            console.log(user);
            toast.success('Email sent.');
        } catch (error) {
            toast.error('Could not send reset email.');
        }
    };

    const handleLoginWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
        } catch (error) {
            toast.error(error.code);
        }
    };

    if (checkingStatus) return 'Loading...';

    return (
        <div className="login-form-container">
            {isLoggedIn ? (
                <div className="row">
                    <h3>Welcome, {auth.currentUser.email}</h3>
                    <button
                        type="button"
                        className="primary-button"
                        onClick={() => signOut(auth)}
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="login-form">
                    <label className="input-label login-label">
                        Email:
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="input-text"
                        />
                    </label>

                    <label className="input-label login-label">
                        Password:
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="input-text"
                        />
                    </label>
                    <div className="button-box">
                        <button type="submit" className="primary-button">
                            Login
                        </button>
                        <button
                            type="button"
                            onClick={handleResetPassword}
                            className="primary-button"
                        >
                            Reset Password
                        </button>
                        <button
                            type="button"
                            className="primary-button"
                            onClick={handleLoginWithGoogle}
                        >
                            Login With Google
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default LoginFrom;
