
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { tradsVariants1024, tradsVariants130, tradsVariants280, tradsVariants375, tradsVariants440, tradsVariants520, tradsVariants768, tradsVariants840, tradsVariants956 } from '../files/tradsVariants';
import { whiteVariants1024, whiteVariants130, whiteVariants280, whiteVariants375, whiteVariants440, whiteVariants520, whiteVariants768, whiteVariants840, whiteVariants956 } from '../files/whiteVariants';
import { partyVariants1024, partyVariants130, partyVariants280, partyVariants375, partyVariants440, partyVariants520, partyVariants768, partyVariants840, partyVariants956 } from '../files/partyVariants';
import useMediaQuery from '../hooks/useMediaQuery';

// import { is1024, is130, is280, is375, is440, is520, is768, is840, is956 } from '../hooks/media';




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




// const whiteVariants= {
//   hidden: {
//       scale: 0,
//       originX: "50%",
//       opacity: 0
//   },

//   visible: {
//     scale: 1.0,
//     x: 0,
//     opacity: 1,
//     transition: { delay: 6, duration: 3, ease: "easeInOut" }

//   }
// }

// const partyVariants= {
//   hidden: {
//       scale: 0,
//       originX: "-80%",
//       opacity: 0
//   },

//   visible: {
//     scale: 1.0,
//     x: -20,
//     opacity: 1,
//     transition: { delay: 3, duration: 3, ease: "easeInOut" }

//   }
// }




function Home() {

  

  const is1024 = useMediaQuery('(min-width: 1024px)');
  const is956 = useMediaQuery('(min-width: 956px)');
  const is840 = useMediaQuery('(min-width: 840px)');
  const is768 = useMediaQuery('(min-width: 768px)');
  const is520 = useMediaQuery('(min-width: 520px)');
  const is440 = useMediaQuery('(min-width: 440px)');
  const is375 = useMediaQuery('(min-width: 375px)');
  const is280 = useMediaQuery('(min-width: 280px)');
  

  const allTradsVariants = is1024 ? tradsVariants1024 :
                            is956 ? tradsVariants956 :
                            is840 ? tradsVariants840 :
                            is768 ? tradsVariants768 :
                            is520 ? tradsVariants520 :
                            is440 ? tradsVariants440 :
                            is375 ? tradsVariants375 :
                            is280 ? tradsVariants280 :
                            tradsVariants130


  

const allWhitesVariants = is1024 ? whiteVariants1024 :
                        is956 ? whiteVariants956 :
                        is840 ? whiteVariants840 :
                        is768 ? whiteVariants768 :
                        is520 ? whiteVariants520 :
                        is440 ? whiteVariants440 :
                        is375 ? whiteVariants375 :
                        is280 ? whiteVariants280 :
                        whiteVariants130


const allPartyVariants = is1024 ? partyVariants1024 :
                        is956 ? partyVariants956 :
                        is840 ? partyVariants840 :
                        is768 ? partyVariants768 :
                        is520 ? partyVariants520 :
                        is440 ? partyVariants440 :
                        is375 ? partyVariants375 :
                        is280 ? partyVariants280 :
                        partyVariants130






    


  const [open, setOpen] = useState(false);


  const handleOpen = () => {
    setOpen(true);
  }


  
  





  return (
    <div className="home-container">


      {/* {
        is1024 ? "1024px" : is956 ? "956" :
      
        "world"
        
      } */}
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
                  variants={allTradsVariants}
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
                  variants={allWhitesVariants}
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

                  variants={allPartyVariants}
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
