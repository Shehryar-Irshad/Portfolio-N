const Education = () =>{
   return(
    <div className="Edu-main">
        <h4 className="Edu-tit" style={{}}>Education</h4>
        <h2 style={{marginLeft:"530px", color:"white"}}>My Education</h2>
        <div className="vertical-line"></div>
        <div className="cir">
            <h4 className="cir-num">1</h4>
        </div>
        <div className="vertical-line2"></div>
        <div className="cir">
        <h4 className="cir-num">2</h4>
        <p className="Grad">
            <h3>Bachelors of Compter Science (BCS)</h3>
            <span>2019-2023</span>

        </p>
        <p className="Inter">
            <h3>FSc Pre-Engineering</h3>
            <span>2017-2019</span>

        </p>
        </div>
        <div className="Edu-shp"></div>
        <div className="Edu-shp2"></div>
        <div className="Edu-cir"></div>
        <div className="Edu-cir2"></div>
    </div>
   )
}
export default Education