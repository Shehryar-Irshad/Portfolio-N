import "./Whole.css";
import Image from "next/image";

const Nav = () =>{
    return(
       <div className="">
          <div className="navig-port">
            <nav className="navbar navbar-expand-lg fixed-top" style={{background:"rgb(219,219,219)"}}>

                <p className="brand">SHEHRYAR IRSHAD</p>    
                <p className="item px-3">Skills</p>
                <p className="item px-3">Experience</p>
                <p className="item px-3">Contact</p>
                <p className="item px-3">+92 324 6608 391</p>

            </nav>
           </div>
           <div className="ComNav">
                <div className="cont1">

                    <h3 className="int">Hello, I am Shehryar Irshad</h3>

                    <h1 className="int2"> Front-End Developer <br/>React JS </h1>

                    <h3>Punjab, Pakistan</h3>

                </div>

                <div className="Img1" >
                        <Image src="/imag.png" width={500} height={600}/>
                </div>          
            </div>
       </div>
    )
}
export default Nav;