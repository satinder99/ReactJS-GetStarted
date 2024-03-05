import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


function Header() {
  let authStatus = useSelector((state) => state.auth.status);
  
    const navItems = [
        {
            name:"Home",
            slug:"/",
            active: authStatus,
        },
        {
            name:"Login",
            slug:"/login",
            active: !authStatus
        },
        {
            name:"SignUp",
            slug:"/signup",
            active: !authStatus
        },
        {
            name:"All Post",
            slug:"all-post",
            active: authStatus
        },
        {
          name:"Add Post",
          slug:"add-post",
          active: authStatus,
        },
        {
          name:"Logout",
          slug:"logout",
          active: authStatus,
        }
    ]
  return (
    

<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="" className="h-8" alt="BlogApp Logo" />
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {navItems.map((nav)=>(
          <li key={nav.name}>
            {nav.active ? 
              <Link to={nav.slug} className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">{nav.name}</Link>
              : null
              }
          </li>
        ))}
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Header