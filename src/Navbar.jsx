import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <NavLink to="/"><button>Home</button></NavLink>
            <NavLink to="/products"><button>Products</button></NavLink>
            <NavLink to="/login"><button>Login</button></NavLink>
        </div>
    )
}

export default Navbar