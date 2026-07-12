import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import Products from './Products'
import { useState, useEffect } from 'react'
import ProtectedRoute from './ProtectedRoute'
import { getAuthFromLocalStorage } from './utils/localStorageUtils'

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  // Initialize auth state from localStorage on mount
  useEffect(() => {
    const { isAuthenticated } = getAuthFromLocalStorage();
    setIsAuth(isAuthenticated);
    setLoading(false);
  }, []);


  const router = createHashRouter([
    {
      path: '/',
      element: <div>
        <Navbar />
        <ProtectedRoute isAuth={isAuth}>
          <Home />
        </ProtectedRoute>
      </div>
    },

    {
      path: '/login',
      element: <div>
        <Navbar />
        <Login isAuth={isAuth} setIsAuth={setIsAuth} />
      </div>
    },
    {
      path: '/products',
      element: <div>
        <Navbar />
        <ProtectedRoute isAuth={isAuth}>
          <Products />
        </ProtectedRoute>
      </div>
    }

  ])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <RouterProvider router={router} />
  )
}

export default App