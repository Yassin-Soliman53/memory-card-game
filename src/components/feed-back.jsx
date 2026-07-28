import { motion } from "motion/react"
import { useState } from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const Feed_back = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [rate, setRate] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handlesave = async (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !rate) {
            alert("Please fill in all fields.");
            return;
        }
        
        setIsSubmitting(true);
        try {
            await addDoc(collection(firestore, "feedback"), {
                firstName,
                lastName,
                rate,
                timestamp: new Date()
            });
            alert("Feedback submitted successfully!");
            setFirstName("");
            setLastName("");
            setRate("");
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("An error occurred while saving.");
        }
        setIsSubmitting(false);
    }

    return (
        <motion.dev 
           initial={{ opacity: 0, y: 400 }}
             animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
        >
        <>
        <center>
         
        <h2 className="h2-fed">Rate us ⭐</h2>
        </center>
        <form className="form" onSubmit={handlesave}>
        <div className="form-div">
         <label htmlFor="first_name" className="label-fed">YOUR FIRST NAME : </label> <br/> 
         <input type="text" className="input-fed" id="first_name" placeholder="first name / eg.Yassin" value={firstName} onChange={(e) => setFirstName(e.target.value)} /> <br/>
         <label htmlFor="last_name" className="label-fed">LAST NAME : </label><br/>
         <input type="text" className="input-fed" id="last_name" placeholder="last name / eg Soliman" value={lastName} onChange={(e) => setLastName(e.target.value)} /><br/>
         <label htmlFor="feedback" className="label-fed">YOUR RATE :</label><br/>
         <textarea className="input-fed" id="feedback" value={rate} onChange={(e) => setRate(e.target.value)}></textarea> <br/>
         <center>
        <button type="submit" className="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
        </button>
         </center>
         </div>
        </form>
        
        </>
    </motion.dev>
    )
}

export default Feed_back;