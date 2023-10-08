import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
    }


    const navbar = <>
        <li> <NavLink to="/"> Home </NavLink></li>
        {
            user?.email && <>
                <li> <NavLink to="/courses"> Courses </NavLink></li>
                <li> <NavLink to="/events"> Events </NavLink></li>
            </>
        }
        <li> <NavLink to="/login"> Login </NavLink></li>
        <li> <NavLink to="/Register"> Register </NavLink></li>
        <li> <NavLink to="/contact"> Contact </NavLink></li>
    </>


    return (
        <div className="navbar max-w-6xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navbar}
                    </ul>
                </div>
                <div className="flex items-center gap-3">
                    <img className="h-[80px]" src="https://i.ibb.co/4mypSm6/mortarboard.png" alt="" />
                    <h5 className="font-bold text-xl"> Educatee </h5>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navbar}
                </ul>
            </div>

            <div className="navbar-end">

                {
                    user?.email ? <div className="dropdown dropdown-end flex items-center">
                        <button onClick={handleLogOut} className="btn btn-sm  btn-ghost">Logout</button>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} alt={user.displayName} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                            </li>
                            <li>
                                <button onClick={handleLogOut} className="btn btn-sm  btn-ghost">Logout</button>

                            </li>
                        </ul>
                    </div>
                        :
                        <Link to='/login'>
                            <button className="btn btn-sm  btn-ghost">Login</button>
                        </Link>
                }
            </div>
        </div >
    );
};

export default Navbar;