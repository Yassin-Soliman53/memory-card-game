import { motion } from "motion/react"
const Feed_back =() => { 
    return (
        <motion.dev 
           initial = {{opacity : 0 , y : 400}}
             animate = {{opacity : 1 , y : 0 }}
            transition={{duration : 2 }}
        >
        <>
        <center>
         
        <h2>Rate us ⭐</h2>
        </center>
        <form>
         <label htmlFor="first_name" className="label-fed">YOUR FIRST NAME</label> <br/> 
         <input type="text" className="input-fed" id="first_name" placeholder="first name / eg.Yassin"/> <br/>
         <label htmlFor="last_name" className="label-fed"></label><br/>
         <input type="text" className="input-fed" id="last_name" placeholder="last name / eg Soliman"/><br/>
         <label htmlFor="feedback" className="label-fed">YOUR RATE :</label><br/>
         <input type="text" className="input-fed" id="feedback" placeholder="YOUR RATE / eg the design is grat but tempelte of color not the best"/><br/>
         <button>sumbit</button>
        </form>
        
        </>
    </motion.dev>
    )

}
export default Feed_back;