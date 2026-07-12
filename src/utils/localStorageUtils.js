// localStorage utility functions for managing auth data

export const saveAuthToLocalStorage = (user) => {
    localStorage.setItem('authUser', JSON.stringify(user));
    localStorage.setItem('isAuthenticated', 'true');
};

export const getAuthFromLocalStorage = () => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const authUser = localStorage.getItem('authUser');
    
    return {
        isAuthenticated,
        user: authUser ? JSON.parse(authUser) : null
    };
};

export const clearAuthFromLocalStorage = () => {
    localStorage.removeItem('authUser');
    localStorage.removeItem('isAuthenticated');
};

export const saveUserData = (userData) => {
    localStorage.setItem('userData', JSON.stringify(userData));
};

export const getUserData = () => {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
};
