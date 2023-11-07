const Contact = () =>{
   return(
    <div className="Cnt-main">
        <h4 style={{position:"relative", textAlign:"center", paddingTop:"50px"}}>Contact</h4>
        <h1 style={{position:"relative", textAlign:"center"}}>Get in Touch</h1>
        <div className="Cnt-shp">
            <div className="shp-cont">
               <h3>Contact Me</h3>
               <p className="py-3">+92 3246608391</p>
               <p>shehryarirshad28@gmail.com</p>
               <p className="py-3">Walton Road Lahore Cantt</p>
            </div>

        </div>
        <div className="Cnt-form" style={{position:"relative", left:"700px", background:"transparent", top:"-550px", width:"500px" }}>
           <input id="inp" type="name" name="Name" placeholder="Name" className="my-2"/><br/>
           <input id="inp" type="email" name="Email" placeholder="Email" className="my-2"/><br/>
           <input id="inp" type="number" name="Phone" placeholder="Phone"className="my-2"/><br/>
           <textarea id="inptext" type="txt" name="Message" placeholder="Message" className="my-2"/>
           <button>Send</button>
        </div>
        
    </div>
   )
}
export default Contact