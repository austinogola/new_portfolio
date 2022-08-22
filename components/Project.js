

const Project=()=>{
    return(
        <div className="Project">
          <div className='wrapper'>
            <div className="image">
              <p>Image</p>
              
            </div>

            <div className="detailsWrapper">
                <div className="details">

                </div>
            </div>

          </div>

          <style jsx>{`

            
            .image{
            
              border:1px solid #FFA500;
              height:240px;
              
            }
            .detailsWrapper{
              display:flex;
              justify-content:center;

            }
            .details{
              position:relative;
              bottom:60px;
              height:140px;
              background-color:#112240;
              width:90%;
            }

          `}</style>
        </div>
    )
}

export default Project
