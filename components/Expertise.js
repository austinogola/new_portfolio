

const Expertise=()=>{
    
    return(
        <div className="Expertise">
            <div className="wrapper">
                <div className="title">
                    <div className="strike"></div>
                    <h2 className="actual">What I Do</h2>
                    <div className="strike"></div>
                </div>

                <div className="specialty">
                    <div className="servs">
                        <div className="service" style={{borderTop:'2px solid #FFA500'}}>
                            <div className="serviceTitle">
                                <p style={{}}>PROCESS AUTOMATION</p>
                            </div>
                            <div className="actualServices service1">
                                <div>
                                    <p>PC , &nbsp; Web &nbsp; & &nbsp; Mobile &nbsp; Automation</p>
                                </div>

                                <div>
                                    <p>Workflow &nbsp; Design &nbsp; and &nbsp; Automation</p>
                                </div>

                                <div>
                                    <p>Zapier &nbsp; Integrations</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="service" style={{borderTop:'2px solid #08FDD8'}}>
                            <div className="serviceTitle">
                                <p style={{color:'#08FDD8'}}>BOT DEVELOPMENT</p>
                            </div>

                            <div className="actualServices service2">
                                <div>
                                    <p>PC &nbsp; & &nbsp; Web &nbsp; Automation</p>
                                </div>

                                <div>
                                    <p>Mobile &nbsp; Automation</p>
                                </div>

                                <div>
                                    <p>Social &nbsp; Media &nbsp; Bots</p>
                                </div>

                              
                            </div>
                            
                        </div>

                        <div className="service" style={{borderTop:'2px solid #FD2155'}}>

                            <div className="serviceTitle">
                                <p style={{color:'#FD2155'}}>SERVER-SIDE SCRIPTING</p>
                            </div>

                            <div className="actualServices service3">
                                <div>
                                    <p>API &nbsp; development </p>
                                </div>

                                <div>
                                    <p>Integrations</p>
                                </div>

                                <div>
                                    <p>Authentication &nbsp; & &nbsp; authorization</p>
                                </div>

                                <div>
                                    <p>Database Development</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>

            <style jsx>
                {`
                    .Expertise{
                        display:flex;
                        justify-content:center;
                        height:600px;

                    }
                    .wrapper{
                        width:75%;
                    }
                    .title{
                        display:flex;
                    }
                    .actual{
                        position:relative;
                        bottom:36px;
                        margin-left:4px;
                        margin-right:4px;
                        font-family:'Roboto',sans-serif;
                        font-size:24px;
                        letter-spacing:2px;
                        color:#CCD6F6;
                    }
                    .strike{
                        border:1px solid #233554;
                        height:2px;
                        width:50px;
                    }
                    .items{
                        padding:10px;
                    }
                    .specialty{

                    }
                    .servs{
                        display:grid;
                        grid-template-columns:1fr 1fr 1fr;
                        grid-gap:20px;
                    }
                    .service{
                        background-color:#0A192F;
                        height:300px;
                        /*          offset-x | offset-y | blur-radius | spread-radius | color */
                        box-shadow: 1px 1px 2px 3px rgba(0, 0, 0, 0.23);
                        padding:20px;
                        font-family:'Roboto',sans-serif;
                    }
                    .serviceTitle{
                        color:#FFA500;
                        position:relative;
                        bottom:10px;
                        font-size:14px;
                    }
                    .actualServices{
                        padding-left:20px
                    }
                    .actualServices>div{
                        display:flex;
                        align-items:center;
                        margin-bottom:15px;
                        height:30px;
                        color:#CCD6F6;
                        padding-left:10px;
                        font-size:12px;
                        font-family:'Roboto',sans-serif;
                    }
                    .service1>div{
                        border-left:2px solid #FFA500;
                    }
                    .service2>div{
                        border-left:2px solid #08FDD8;
                    }
                    .service3>div{
                        border-left:2px solid #FD2155;
                    }



                    @media only screen and (max-width:1050px){
                        .wrapper{
                            width:90%;
                        }
                    }
                `}
            </style>
        </div>
    )
}


export default Expertise
