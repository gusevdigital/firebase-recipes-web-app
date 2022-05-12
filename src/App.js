import './App.css';
import 'react-toastify/dist/ReactToastify.css';
// eslint-disable-next-line no-unused-vars
import { db } from './firebase.config';
import { ToastContainer } from 'react-toastify';
import LoginFrom from './components/LoginFrom';

function App() {
    return (
        <div className="App">
            <div className="title-row">
                <h1 className="title">Firebase Recipes</h1>
                <LoginFrom />
            </div>
            <ToastContainer />
        </div>
    );
}

export default App;
