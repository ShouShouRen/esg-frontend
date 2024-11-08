// import logo from "@/image/logo.png";

// const Header = () => {
//   return (
//     <header className="fixed w-full py-2 bg-rose-400 bg-white/50 shadow-lg backdrop-blur-md z-50">
//       <nav className="container flex flex-col justify-center md:flex-row md:items-center justify-between p-4">
//         <a className="block" href="index">
//           <img
//             src={logo}
//             alt=""
//             className="w-16 h-16 object-contain"
//             height="62"
//           />
//         </a>
//         <ul className="flex flex-col md:flex-row md:items-center">
//           <li className="px-1 py-3 md:py-0">
//             <a className="nav-link" aria-current="page" href="rcarbon">
//               碳匯交易
//             </a>
//           </li>
//           <li className="px-1 py-3 md:py-0">
//             <a className="nav-link" aria-current="page" href="registJob">
//               申請工作
//             </a>
//           </li>
//           <li className="px-1 py-3 md:py-0">
//             <a className="nav-link" aria-current="page" href="state">
//               查看狀態
//             </a>
//           </li>
//           <li className="px-1 py-3 md:py-0">
//             <a className="nav-link" aria-current="page" href="admin">
//               管理員審核
//             </a>
//           </li>
//           <li className="px-1 py-3 md:py-0">
//             <a
//               className="nav-link"
//               aria-current="page"
//               href=""
//               data-bs-toggle="modal"
//               data-bs-target="#login"
//             >
//               登入/註冊
//             </a>
//           </li>
//           <li className="px-1 py-3 md:py-0">
//             <a className="nav-link" aria-current="page" href="logout">
//               登出
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };
// export default Header;

// import { useState } from "react";
// import logo from "@/image/logo.png";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="fixed w-full py-2 bg-white shadow-lg z-50">
//       <nav className="flex justify-between items-center px-4 md:px-8">
//         {/* Logo */}
//         <a className="block" href="index">
//           <img
//             src={logo}
//             alt="Logo"
//             className="w-16 h-16 object-contain"
//             height="62"
//           />
//         </a>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 items-center">
//           <li>
//             <a className="nav-link" href="rcarbon">
//               碳匯交易
//             </a>
//           </li>
//           <li>
//             <a className="nav-link" href="registJob">
//               申請工作
//             </a>
//           </li>
//           <li>
//             <a className="nav-link" href="state">
//               查看狀態
//             </a>
//           </li>
//           <li>
//             <a className="nav-link" href="admin">
//               管理員審核
//             </a>
//           </li>
//           <li>
//             <Link to="/auth" className="nav-link">
//               登入/註冊
//             </Link>
//           </li>
//         </ul>

//         {/* Mobile Hamburger Icon and Login/Register */}
//         <div className="flex items-center md:hidden">
//           <Link to="/auth" className="nav-link">
//             登入/註冊
//           </Link>
//           <button
//             className="text-gray-700 focus:outline-none"
//             onClick={toggleMenu}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={
//                   menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
//                 }
//               ></path>
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu with transition */}
//         <ul
//           className={`${
//             menuOpen ? "max-h-max opacity-100" : "max-h-0 opacity-0"
//           } overflow-hidden transition-all duration-300 ease-in-out absolute top-16 left-0 w-full bg-white shadow-md md:hidden`}
//         >
//           <li className="border-b my-7 ">
//             <a className="nav-link" href="rcarbon">
//               碳匯交易
//             </a>
//           </li>
//           <li className="border-b my-7 ">
//             <a className="nav-link" href="registJob">
//               申請工作
//             </a>
//           </li>
//           <li className="border-b my-7 ">
//             <a className="nav-link" href="state">
//               查看狀態
//             </a>
//           </li>
//           <li className="border-b my-7 ">
//             <a className="nav-link" href="admin">
//               管理員審核
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// import { useState } from "react";
// import logo from "@/image/logo.png";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="fixed w-full py-2 bg-white shadow-lg z-50">
//       <nav className="flex justify-between items-center px-4 md:px-8">
//         {/* Logo */}
//         <a className="block" href="index">
//           <img
//             src={logo}
//             alt="Logo"
//             className="w-16 h-16 object-contain"
//             height="62"
//           />
//         </a>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 items-center">
//           <li>
//             <a className="nav-link" href="rcarbon">
//               碳匯交易
//             </a>
//           </li>
//           <li>
//             <a className="nav-link" href="registJob">
//               申請工作
//             </a>
//           </li>
//           <li>
//             <a className="nav-link" href="state">
//               查看狀態
//             </a>
//           </li>
//           <li>
//             <a className="nav-link" href="admin">
//               管理員審核
//             </a>
//           </li>
//           <li>
//             <Link to="/auth" className="nav-link">
//               登入/註冊
//             </Link>
//           </li>
//         </ul>

//         {/* Mobile Hamburger Icon and Login/Register */}
//         <div className="flex items-center md:hidden">
//           <Link to="/auth" className="nav-link">
//             登入/註冊
//           </Link>
//           <button
//             className="text-gray-700 focus:outline-none"
//             onClick={toggleMenu}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={
//                   menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
//                 }
//               ></path>
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu with transition */}
//         <ul
//           className={`${
//             menuOpen ? "max-h-max opacity-100" : "max-h-0 opacity-0"
//           } overflow-hidden transition-all duration-300 ease-in-out absolute top-16 left-0 w-full bg-white shadow-md md:hidden`}
//         >
//           <li className="border-b my-7 ">
//             <a className="nav-link" href="rcarbon">
//               碳匯交易
//             </a>
//           </li>
//           <li className="border-b my-7 ">
//             <a className="nav-link" href="registJob">
//               申請工作
//             </a>
//           </li>
//           <li className="border-b my-7 ">
//             <a className="nav-link" href="state">
//               查看狀態
//             </a>
//           </li>
//           <li className="border-b my-7 ">
//             <a className="nav-link" href="admin">
//               管理員審核
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import { useState, useEffect } from "react";
import logo from "@/image/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/"); // 登出後導向首頁
  };

  return (
    <header className="fixed w-full py-2 bg-white shadow-lg z-50">
      <nav className="flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <Link className="block" to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-16 h-16 object-contain"
            height="62"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/carbon-trading" className="nav-link">
                  碳匯交易
                </Link>
              </li>
              <li>
                <Link to="/upload-carbon" className="nav-link">
                  上架碳匯
                </Link>
              </li>
              <li>
                <a className="nav-link" href="state">
                  查看狀態
                </a>
              </li>
              <li>
                <a className="nav-link" href="admin">
                  管理員審核
                </a>
              </li>
              <li>
                <button onClick={handleLogout} className="nav-link">
                  登出
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/auth" className="nav-link">
                登入/註冊
              </Link>
            </li>
          )}
        </ul>

        {/* Mobile Hamburger Icon and Login/Register */}
        <div className="flex items-center md:hidden">
          {/* {isLoggedIn ? (
            <button onClick={handleLogout} className="nav-link">
              登出
            </button>
          ) : (
            <Link to="/auth" className="nav-link">
              登入/註冊
            </Link>
          )} */}
          <button
            className="text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu with transition */}
        <ul
          className={`${
            menuOpen ? "max-h-max opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden transition-all duration-300 ease-in-out absolute top-16 left-0 w-full bg-white shadow-md md:hidden`}
        >
          {isLoggedIn ? (
            <>
              <li className="border-b my-7">
                <Link to="/carbon-trading" className="nav-link">
                  碳匯交易
                </Link>
              </li>
              <li className="border-b my-7">
                <Link to="/upload-carbon" className="nav-link">
                  上架碳匯
                </Link>
              </li>
              <li className="border-b my-7">
                <a className="nav-link" href="state">
                  查看狀態～
                </a>
              </li>
              <li className="border-b my-7">
                <a className="nav-link" href="admin">
                  管理員審核
                </a>
              </li>
              <li className="border-b my-7">
                <button onClick={handleLogout} className="nav-link">
                  登出
                </button>
              </li>
            </>
          ) : (
            <li className="border-b my-7">
              <Link to="/auth" className="nav-link">
                登入/註冊
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
