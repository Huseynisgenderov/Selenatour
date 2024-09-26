import "./navbar.scss";
import { useState } from "react";
import { MdTravelExplore } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { CgLayoutGridSmall } from "react-icons/cg";

const Navbar = () => {
const [active, setActive] = useState('navBar')
const showNav=()=>{
  setActive('navBar activeNavbar')
}

const removeNav=()=>{
  setActive('navBar')
}

const [transparant, setTransparant] = useState('header')
const addBg = ()=> {
  if(window.scrollY >= 10){
    setTransparant('header activeHeader')
  }
  else{
    setTransparant('header')
  }
}
window.addEventListener('scroll', addBg)

  return (
    <section className="navBarSection">
      <div className={transparant}>

        <div className="logoDiv">
          <a href="/home" className="logo">
            <h1 className="flex">
              <MdTravelExplore className="icon" />
              SelenaTour 
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navList flex">
            <li className="navItem">
              <a href="/home" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="/home" className="navLink">
                About Us
              </a>
            </li>

            <li className="navItem">
              <a href="/home" className="navLink">
                Tours
              </a>
            </li>

            <li className="navItem">
              <a href="/home" className="navLink">
                Blog
              </a>
            </li>

            <li className="navItem">
              <a href="/home" className="navLink">
                Contact
              </a>
            </li>

            <div className="headerBtns flex">
              <button className="btn loginBtn">
                <a href="/home">Login</a>
              </button>
              <button className="btn">
                <a href="/home">Sign Up</a>
              </button>
            </div>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <IoMdCloseCircle className="icon" />
          </div>

        </div>

          <div onClick={showNav} className="toggleNavbar">
            <CgLayoutGridSmall className="icon" />
          </div>

      </div>
    </section>
  );
};

export default Navbar;
