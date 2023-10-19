const Experience = () =>{
   return(
    <div className="Exp-main">

        <h3 className="main-title">Experience</h3>
        <h2 className="subtitle">Work Experience!</h2>

{/* First Card */}
         <div className="First-card">
            <div className="card exp-card1" style={{width:"18rem", height:"10rem", border:"3px solid"}}>
                <div className="card-body">
                    <p className="card-text text1"> Managed customer inquiries, deposits, winnings, and client profiles.
                    Ensured account security, issue resolution, and personalized gaming
                    experiences. Collaborated with cross-functional teams for efficiency</p>
                </div>
            </div>
            <div className="exp-shp1">
                <h4 className="num-shp1">1</h4>
            </div>
            <p className="Exp-info">
            <i style={{color:"#dfaf74"}}>Support Engineer</i><br/>
            <b style={{color:"#332421", fontSize:"20px"}}>SHJ International (1.2 years)</b><br/>
            <span style={{color:"grey"}}>U.S - based gaming company</span>
            </p>
            </div>

         <div className="Sec-card">
            <div className="card exp-card2" style={{width:"18rem", height:"10rem", border:"3px solid"}}>
                <div className="card-body">
                    <p className="card-text text1"> Acquired hands-on expertise with
                    Google Search Keywords, keyword
                    ranking, SEMrush, Ahrefs, and Moz
                    during my internship. Developed
                    proficiency in creating backlinks
                    through techniques like article posting
                    and slide uploads.</p>
                </div>
            </div>
            <div className="exp-shp2">
                <h4 className="num-shp1">2</h4>
            </div>
            <p className="Exp-info2">
            <i style={{color:"#dfaf74"}}>SEO Internee</i><br/>
            <b style={{color:"#332421", fontSize:"20px"}}>Orchard Solutions (4 months)</b><br/>
            <span style={{color:"grey"}}>Software House</span>
            </p>
         </div>
    </div>
   )
}
export default Experience