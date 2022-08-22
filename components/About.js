

const About=()=>{
    return(
        <div className="About">
            <div className="aboutWrapper">
                <p className="one">Hello, my name is</p>
                <h2 className="two">Austin Ogola.</h2>
                <h3 className="three">I design and develop specialized tools and applications.</h3>

                <div className="explanation">
                    <p>
                        I am a software developer specializing in designing and building
                        automation tools and corresponding infrastructure including APIs, 
                        API integrations , databases and more.
                    </p>
                </div>

                <button className="check"><a href="#works">Check Out my Work</a></button>

            </div>

            <style jsx>
                {`
                    .About{
                        display:flex;
                        justify-content:center;
                        height:520px;
                        margin-bottom:100px;

                    }
                    .aboutWrapper{
                        width:75%;
                        font-family:'Roboto',sans-serif;
                    }
                    .one{
                        /* color:#64ffda; */
                        color:#F0A50F;
                        font-size:16px;
                        position:relative;
                        left:5px;
                        letter-spacing:3px;
                    }
                    .two{
                        font-size:50px;
                        color:#CCD6F6;
                        letter-spacing:5px;
                        position:relative;
                        bottom:20px;
                    }
                    .three{
                        color:#8892B0;
                        font-size:30px;
                        letter-spacing:5px;
                        position:relative;
                        bottom:30px;
                    }
                    .explanation{
                        width:50%;
                        color:#8892B0;
                        font-family:'Roboto',sans-serif;
                        position:relative;
                        bottom:30px;
                        line-height:24px;
                    }
                    p{
                        font-family:'Roboto',sans-serif;
                    }
                    .check{
                        height:60px;
                        width:200px;
                        padding:10px;
                        border:1px solid #FFA500;;
                        border-radius:5px;
                        /* color:#64ffda; */
                        color:#FFA500;
                        background:#0A192F;
                        transition:.3s;
                    }
                    .check:hover{
                        cursor:pointer;
                    }
                    .check>a{
                        font-family:'Roboto',sans-serif;
                    }

                `}
            </style>
        </div>
    )
}


export default About