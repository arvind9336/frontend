import { NavLink, useNavigate } from 'react-router-dom';
import logo from './img/logo.png';
function Nav(){
    const auth=localStorage.getItem('user');
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/register');
    }
    return(
        <div>
            <img className='logo' src={logo} alt='logo'/>
            {
                auth ?
                <ul className='nav-ul'>
                    <li><NavLink to="/">Products</NavLink></li>
                    <li><NavLink to="/add">Add Product</NavLink></li>
                    <li><NavLink to="/update">Update Product</NavLink></li>
                    <li><NavLink to="/profile">Profle</NavLink></li>
                    <li><NavLink to="/register" onClick={logout}>Logout ({JSON.parse(auth).name})</NavLink></li>
                </ul>
                :
                <ul className='nav-ul nav-right'>
                    <li><NavLink to="/register">Sign Up</NavLink></li>
                    <li><NavLink to="/login" >Login</NavLink></li>
                </ul>
            }
        </div>
    )
}
export default Nav;