import Project from "./Project"
import Projos from "./Projos"

const Works=()=>{
    return(
        <div className="Works">
            <div className="wrapper">
              <div className="title">
                  <div className="strike"></div>
                  <h2 className="actual">Some Things I've Built</h2>
                  <div className="strike"></div>
              </div>

              <div className="things">
                <Projos />
                <Projos flip/>
                <Projos/>
                <Projos flip/>
              </div>
            </div>


            <style jsx>
                {`
                    .Works{
                        display:flex;
                        justify-content:center;
                        height:1500px;

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

                    .things{
                       
                    } 
                `}
            </style>
        </div>
    )
}


export default Works
