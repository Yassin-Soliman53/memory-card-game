import { motion } from "motion/react";
import { useState } from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const Feed_back = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [rate, setRate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handlesave = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !rate) {
      setStatusMessage("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("");

    try {
      await addDoc(collection(firestore, "feedback"), {
        firstName,
        lastName,
        rate,
        createdAt: new Date(),
      });
      setStatusMessage("Thank you! Your feedback has been sent.");
      setFirstName("");
      setLastName("");
      setRate("");
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatusMessage("Failed to send feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 400 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <center>
        <h2 className="h2-fed">Rate us ⭐</h2>
      </center>
      <form className="form" onSubmit={handlesave}>
        <div className="form-div">
          <label htmlFor="first_name" className="label-fed">
            YOUR FIRST NAME :
          </label>
          <br />
          <input
            type="text"
            className="input-fed"
            id="first_name"
            placeholder="first name / eg. Yassin"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <label htmlFor="last_name" className="label-fed">
            LAST NAME :
          </label>
          <br />
          <input
            type="text"
            className="input-fed"
            id="last_name"
            placeholder="last name / eg. Soliman"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <label htmlFor="feedback" className="label-fed">
            YOUR RATE :
          </label>
          <br />
          <textarea
            className="input-fed"
            id="feedback"
            placeholder="Your rate / comments"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          ></textarea>
          <br />
          {statusMessage && (
            <p style={{ color: "#818cf8", fontSize: "14px", marginTop: "10px" }}>
              {statusMessage}
            </p>
          )}
          <center>
            <button type="submit" className="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </center>
        </div>
      </form>
    </motion.div>
  );
};

export default Feed_back;