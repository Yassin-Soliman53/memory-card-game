import { motion } from "motion/react"
import firebase from "firebase/compat/app";
import { addDoc , collection, getFirestore } from "firebase/firestore";
import { useRef } from "react";

const messageRef = useRef (); 
const ref = collection(firebase , "messages");
const handlesave = async(e) => { 
    e.prevenrdefault();
    console.log(messageRef.current.value);
    let data = { 
        message : messageRef.current.value, 

    }
    try {
        addDoc(ref,data); 
    }catch(e){
        console.log(e);
    }
}
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
        <button class="submit" onClick={handlesave}>Submit</button>
         </center>
         </div>
        </form>
        
        </>
    </motion.dev>
    )

}
export default Feed_back;
export const firestore = getFirestore(app);