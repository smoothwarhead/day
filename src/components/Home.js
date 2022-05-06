
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';




// const openVariants= {
//   hidden: {
//       scale: 0,
//       opacity: 1
//   },

//   visible: {
    
//     opacity: 0,
//     transition: { delay: 9, duration: 1, ease: "easeInOut" }

//   }
// }


const tradsVariants= {
  hidden: {
      scale: 0,
      x: 500,
      opacity: 0
  },

  visible: {
    scale: 1.0,
    x: 10,
    opacity: 1,
    transition: { duration: 3, ease: "easeInOut" }

  }
}


const whiteVariants= {
  hidden: {
      scale: 0,
      // x: 500,
      opacity: 0
  },

  visible: {
    scale: 1.0,
    // x: 10,
    opacity: 1,
    transition: { delay: 6, duration: 3, ease: "easeInOut" }

  }
}

const partyVariants= {
  hidden: {
      scale: 0,
      x: -500,
      opacity: 0
  },

  visible: {
    scale: 1.0,
    x: 0,
    opacity: 1,
    transition: { delay: 3, duration: 3, ease: "easeInOut" }

  }
}

function Home() {

  const [open, setOpen] = useState(false);


  const handleOpen = () => {
    setOpen(true);
  }

  return (
    <div className="home-container">


      {open ? <div></div> : 

        <motion.div className="intro"
          initial={{ x: '-100vw', opacity:0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}

        >
          <img src='/images/intro-img.png' alt='intro'/>

        </motion.div>
      }

      

      {open ? <div></div> : 

        <motion.div className='close'
        
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{delay: 4, duration: 1.5 }}
        
        >

          <img src='/images/env-close.png' alt='close'/>

          <div className="open-btn"
            onClick={handleOpen}
          >

          </div>

        </motion.div>
      }

      


      {!open ? <div></div> : 

        <div className='open'
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 9, duration: 1.5 }}
        >

          <img src='/images/env-open.png' alt='open'/>


        </div>

        // <motion.div className='open'
        //   initial={{ opacity: 1 }}
        //   animate={{ opacity: 0 }}
        //   transition={{ delay: 9, duration: 1.5 }}
        // >

        //   <EnvOpen cName="open-img"/>

        // </motion.div>

      }


      {!open ? <div></div> : 

        <div className="card-container">

            {!open ? <div></div> : 

                <motion.div className="trads"
                variants={tradsVariants}
                initial="hidden"
                animate="visible"
                >

                <div className="card-image">
                    <img src='/images/trads.png' alt='trads'/>

                </div>

                <Link to={'/save-a-date/1'}><div className="join-us-btn white-join-us-btn">Join us</div></Link>  

                </motion.div>

            }

            {!open ? <div></div> : 

                <motion.div className="white"
                variants={whiteVariants}
                initial="hidden"
                animate="visible"
                >

                <div className="card-image">
                    <img src='/images/white.png' alt='white'/>

                </div>
                

                <Link to={'/save-a-date/2'}><div className="join-us-btn white-join-us-btn">Join us</div></Link>  

                </motion.div>

            }

            {!open ? <div></div> : 

                <motion.div className="party"

                variants={partyVariants}
                initial="hidden"
                animate="visible"
                >

                <div className="card-image">
                    <img src='/images/party.png' alt='party'/>

                </div>

                <Link to={'/save-a-date/3'}><div className="join-us-btn party-join-us-btn">Join us</div></Link> 
                
                <div className='empty'></div>


                </motion.div>

            }

        </div>

      }

    

  
      
    </div>
  );
}

export default Home;
