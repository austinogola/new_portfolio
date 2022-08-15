

const About=()=>{
    return(
        <div className="About">
            <div className="aboutWrapper">
                <p className="one">Hello, my name is</p>
                <h2 className="two">Austin Ogola.</h2>
                <h3 className="three">I develop scripts for process automation</h3>

                <div className="explanation">
                    <p>
                        I am a software developer specializing in
                        Lorem ipsum dolor ores repellendus. Minus amet reiciendis sequi maiores dignissimos quo vitae beatae blanditiis itaque odio! Fugit minus corrupti soluta natus.
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

                    }
                    .aboutWrapper{
                        width:75%;
                        font-family:'Roboto',sans-serif;
                    }
                    .one{
                        color:#64ffda;
                        font-size:14px;
                    }
                    .two{
                        font-size:50px;
                        color:#CCD6F6;
                        letter-spacing:3px;
                        position:relative;
                        bottom:20px;
                    }
                    .three{
                        color:#8892B0;
                        font-size:30px;
                        letter-spacing:3px;
                        position:relative;
                        bottom:30px;
                    }
                    .explanation{
                        width:50%;
                        color:#8892B0;
                        font-family:'Roboto',sans-serif;
                        position:relative;
                        bottom:30px;
                    }
                    p{
                        font-family:'Roboto',sans-serif;
                    }
                    .check{
                        height:50px;
                        padding:10px;
                        border:1px solid #64ffda;
                        border-radius:3px;
                        color:#64ffda;
                        background:#0A192F;
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