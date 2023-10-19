const Projects = () =>{
  return(
    <div className="Proj-main">
         <h2 style={{color:"white", marginLeft:"540px", paddingTop:"10px"}}>My Projects!</h2>
         <div className="card key1" style={{width:"18rem", height:"18rem"}}>
             <div className="card-body">
                <h5 className="card-title">E-commerce Site</h5>
                <p className="card-text text1">An e-commerce web application that is developed using React JS, a popular JavaScript library
                    for building user interfaces. The application utilizes the Fake Store API as a source of product
                    data, which is commonly used for testing and demonstration purposes. One of the key
                    functionalities of this e-commerce site is the "Add to Cart" feature, which allows users to
                    select products and place them in their virtual shopping cart</p>
             </div>
         </div>
         <div className="card key2" style={{width:"18rem", height:"18rem"}}>
             <div className="card-body">
                <h5 className="card-title">Food Delievery App</h5>
                <p className="card-text text1"> Using React JS is a user-friendly, responsive web application that allows customers to
                effortlessly order their favorite meals from local restaurants and have them delivered to their
                doorstep.<br/>
                Tools: React JS, RapidAPI, CSS, Bootstrap, Redux State Management</p>
             </div>
         </div>
         <div className="card key3" style={{width:"18rem", height:"18rem"}}>
             <div className="card-body">
                <h5 className="card-title">Final Year Project</h5>
                <p className="card-text text1"> The job portal is designed to accommodate two types of users: job seekers and recruiters. The
                frontend of the portal is built using React JS, a popular JavaScript library for creating user
                interfaces, while the backend is developed using Django, a Python web framework. This
                architecture allows for a dynamic and user-friendly web application that serves the needs of both
                job seekers and recruiters.<br/>
                Tools: React JS, SQL Lite, Python, Bootstrap, CSS, Django.</p>
             </div>
         </div>
         <div className="shape1-proj">
            <h2 className="num-shape">1</h2>
         </div>
         <div className="shape2-proj">
           <h2 className="num-shape">2</h2>
         </div>
         <div className="shape3-proj">
           <h2 className="num-shape">3</h2>
         </div>
    </div>
  )
}
export default Projects