

const Contact=()=>{
    return(
        <div className="Contact">
            <div className="wrapper">
                <div className="title">
                    <div className="strike"></div>
                    <h2 className="actual">What I do</h2>
                    <div className="strike"></div>
                </div>

            </div>


            <style jsx>
                {`
                    .Contact{
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
                    }
                    .strike{
                        border:1px solid black;
                        height:2px;
                        width:50px;
                    }
                `}
            </style>
        </div>
    )
}


export default Contact