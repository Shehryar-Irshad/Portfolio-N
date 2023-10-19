import Image from "next/image"

const About = () =>{
  return(
    <div className="Abt-main">
        <div className="Abt">
        <h2>About Me</h2>
        <h3>Why You Hire Me!</h3>
        As a front-end developer with a strong grasp of programming fundamentals, customer support background, and a knack for rapid
        learning and adaptability, I am actively seeking a work setting that encourages both personal growth and the application of my skills. My
        goal is to thrive in an environment where I can continue to expand my knowledge while making meaningful contributions
        </div>
        <div className="Abt-img">
            <Image src="/imag.png" width={300} height={300} style={{borderRadius:"50%"}}/>
        </div>
    </div>
  )
}
export default About