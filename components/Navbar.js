import { useEffect } from "react"
import { Link } from 'react-scroll';


const Navbar=()=>{

    useEffect(()=>{

    })

    return(
        <div className="Navbar">
            <div className="navbarWrapper">

                <div className="logo">
                    <p>Austin Ogola</p>
                </div>

                <div className="navItems">
                    <ul>
                        <li className="nav-item">
                            <a className="navLink" href="#about" >About</a>
                        </li>

                        <li className="nav-item">
                            <a className="navLink" href="#expertise">What I Do</a>
                        </li>

                        <li className="nav-item">
                            <a className="navLink" href="#works">Works</a>
                        </li>

                        <li className="nav-item">
                            <a className="navLink" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

            <style jsx>
                {`
                    .Navbar{
                        padding-left:40px;
                        padding-right:40px;
                      

                    }
                    .navbarWrapper{
                        display:grid;
                        grid-template-columns:30% 70%;
                    }
                    .logo{
                        display:flex;
                        align-items:center;
                        color:#64FFDA;
                        font-family:'Roboto',sans-serif;
                        font-size:18px;
                        letter-spacing:2px;
                        cursor:pointer;
                    }

                    ul{
                        display:flex;
                        justify-content:flex-end;
                    }

                    .nav-item{
                        margin:20px;
                        list-style-type:none;
                    }

                    .navLink{
                        cursor:pointer;
                        color:#CCD6F6;
                        font-size:14px;
                        font-family: 'Roboto', sans-serif;
                    }
                `}
            </style>
        </div>
    )
}







export default Navbar