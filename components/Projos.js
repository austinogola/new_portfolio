

const Projos=(props)=>{
    return(
        <div className="Projos">
            {props.flip?
                <div className="projosWrapper">
                        
                    <div className="image">

                    </div>
                    <div className="details">Details</div>
                    
                </div>:

                <div className="projosWrapper">
                     <div className="flippedDetails">

                    </div>
                    <div className="flippedImage">Details</div>
                   
                    
                    
                </div>
             }
            


            <style jsx>{`
                .Projos{
                    margin-bottom:100px;
                }

                .projosWrapper{
                    display:flex;
                    align-items:center;

                    
                }

                .image{
                    height:300px;
                    background-color:#2E3A52;
                    width:80%;
                }
                .details{
                    height:180px;
                    width:60%;
                    position:relative;
                    right:50px;
                    background-color:#112240;
                }
                .flippedImage{
                    height:300px;
                    width:80%;
                    background-color:#2E3A52;
                }
                .flippedDetails{
                    height:180px;
                    width:60%;
                    position:relative;
                    left:50px;
                    background-color:#112240;
                }

                
            `}</style>
        </div>
    )
}

export default Projos