import { useEffect,useState } from "react"
import { Link } from 'react-scroll';


const Navbar=()=>{

    useEffect(()=>{
        let prevScroll=window.scrollY
        const navbar=document.querySelector('.Navbar')
        window.addEventListener('scroll',(e)=>{
            let currScroll=window.scrollY
            // console.log(e);
            if(prevScroll>currScroll){
                navbar.style.top='0'
            }else{
                navbar.style.top='-100px'
            }
            prevScroll=currScroll

        })
    })


    return(
        <div className='Navbar'>
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
                        transition:.2s;
                        /*          offset-x | offset-y | blur-radius | spread-radius | color */
                        box-shadow: 1px 1px 2px 3px rgba(0, 0, 0, 0.23);
                        height:80px;
                        position:sticky;
                        top:0;
                        z-index: 0;
                        width:100%;
                        margin-bottom:50px;
                      

                    }
                    .navbarWrapper{
                        display:grid;
                        grid-template-columns:30% 70%;
                    }
                    .logo{
                        display:flex;
                        align-items:center;
                        /* color:#64FFDA; */
                        color:#FFA500;
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


                    @media only screen and (max-width:1050px){
                        
                    }
                `}
            </style>
        </div>
    )
}







export default Navbar