import "./Whole.css";

const Skills = () =>{
   return(
    <div className="Skl">

        <h3 className="headAbt">My Skills</h3><br/>
        <h4>Html | 70%</h4>
        <progress value="70" max="100"/><br/>
        <h4>Css | 50%</h4>
        <progress value="50" max="100"/><br/>
        <h4>Javascript | 60%</h4>
        <progress value="60" max="100"/><br/>
        <h4>Bootstrap | 40%</h4>
        <progress value="40" max="100"/><br/>
        <h4>React JS | 50%</h4>
        <progress value="50" max="100"/><br/>

       <div className="shapes">
       </div>
       <div className="shapes3">
       </div>
       <div className="shapes5">
       </div>
       <div className="shapes6">
       </div>
    </div>
   )
}
export default Skills