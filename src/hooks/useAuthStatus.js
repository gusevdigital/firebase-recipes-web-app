import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const useAuthStatus = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [checkingStatus, setCheckingStatus] = useState(true);

    useEffect(() => {
        const auth = getAuth();
        const unsub = onAuthStateChanged(auth, user => {
            if (user) setIsLoggedIn(true);
            else setIsLoggedIn(false);
            setCheckingStatus(false);
        });
        return unsub;
    });

    return { isLoggedIn, checkingStatus };
};

export default useAuthStatus;
