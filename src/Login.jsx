import { useState } from 'react'
import { saveAuthToLocalStorage, clearAuthFromLocalStorage, getUserData } from './utils/localStorageUtils'

const Login = ({ isAuth, setIsAuth }) => {
    console.log('Login component rendered');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const currentUser = getUserData();

    const handleLogin = (e) => {
        e.preventDefault();

        if (!username.trim()) {
            setError('Please enter a username');
            return;
        }

        // Simulate login logic
        const user = {
            id: Math.random(),
            username: username,
            loginTime: new Date().toISOString()
        };

        saveAuthToLocalStorage(user);
        setIsAuth(true);
        setUsername('');
        setError('');
    };

    const handleLogout = () => {
        clearAuthFromLocalStorage();
        setIsAuth(false);
        setUsername('');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>{isAuth ? 'Welcome' : 'Login'}</h1>

            {isAuth ? (
                <div>
                    <p>Logged in as: <strong>{currentUser?.username}</strong></p>
                    <button onClick={handleLogout} style={{ padding: '10px 20px', cursor: 'pointer' }}>
                        Logout
                    </button>
                </div>
            ) : (
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ padding: '8px', marginRight: '10px' }}
                    />
                    <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>
                        Login
                    </button>
                    {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
                </form>
            )}
        </div>
    )
}

export default Login