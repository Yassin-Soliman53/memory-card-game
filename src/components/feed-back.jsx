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
         
        <h2 className="h2-fed">Rate us ⭐</h2>
        </center>
        <form className="form">
        <div className="form-div">
         <label htmlFor="first_name" className="label-fed">YOUR FIRST NAME : </label> <br/> 
         <input type="text" className="input-fed" id="first_name" placeholder="first name / eg.Yassin"/> <br/>
         <label htmlFor="last_name" className="label-fed">LAST NAME : </label><br/>
         <input type="text" className="input-fed" id="last_name" placeholder="last name / eg Soliman"/><br/>
         <label htmlFor="feedback" className="label-fed">YOUR RATE :</label><br/>
         <textarea className="input-fed"></textarea> <br/>
         <center>
        <button class="submit">Submit</button>
         </center>
         </div>
        </form>
        
        </>
    </motion.dev>
    )

}
export default Feed_back;