import { motion } from "motion/react"
const Home = () => { 
    return (
        <div>
            <center> 
                <motion.div 
                initial = {{opacity : 0 , y : 400}}
                animate = {{opacity : 1 , y : 0 }}
                transition={{duration : 3 }}>
                
                <h2>WELCOME TO MY MEMORY CARD GAME </h2>
                <fieldset>
                    <legend>About the game </legend>
                    <p className="overview-p">this  is a game which is has 16 cards each two card has the same fruit your mission is to get the all correct in less moves you can get  </p>      
                                  
                </fieldset>
                </motion.div>
            </center>

        </div>
    )
}
export default Home;

