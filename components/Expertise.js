

const Expertise=()=>{
    return(
        <div className="Expertise">
            <div className="wrapper">
                <div className="title">
                    <div className="strike"></div>
                    <h2 className="actual">What I do</h2>
                    <div className="strike"></div>
                </div>

                <div className="items">
                    <h3>This is mainly what I build</h3>
                    <div className="itemsWrapper">
                        <div className='service'>
                            <div className="image"></div>
                            <p className='serviceTitle'>Emulated Human Actions</p>
                        </div>

                        <div className='service'>
                            <div className="image"></div>
                            <p className='serviceTitle'>Automated Workflows</p>
                        </div>

                        <div className='service'>
                            <div className="image"></div>
                            <p className='serviceTitle'>APIs</p>
                        </div>
                    </div>
                </div>

            </div>

            <style jsx>
                {`
                    .Expertise{
                        display:flex;
                        justify-content:center;
                        height:400px;

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
                        border:1px solid red;
                        padding:10px;
                    }
                    .items>h3{
                        color:#CCD6F6;
                        font-family:'Roboto',sans-serif;
                        text-align:center;
                        letter-spacing:2px;
                    }
                    .itemsWrapper{
                        display:flex;
                        
                    }
                    .service{
                        width:30%;
                        margin: 0 20px;
                    }
                    .image{
                        background-color:#63EED2;
                        height:100px;
                    }
                    .serviceTitle{
                        text-align:center;
                        color:#CCD6F6;
                    }
                `}
            </style>
        </div>
    )
}


export default Expertise