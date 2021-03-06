
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { whiteVariants1024, whiteVariants130, whiteVariants280, whiteVariants375, whiteVariants440, whiteVariants520, whiteVariants768, whiteVariants840, whiteVariants956 } from '../files/whiteVariants';
import useMediaQuery from '../hooks/useMediaQuery';
import { AudioContext } from '../context/AudioContext';












function Party() {


  const { setPlay } = useContext(AudioContext);

  

  const is1024 = useMediaQuery('(min-width: 1024px)');
  const is956 = useMediaQuery('(min-width: 956px)');
  const is840 = useMediaQuery('(min-width: 840px)');
  const is768 = useMediaQuery('(min-width: 768px)');
  const is520 = useMediaQuery('(min-width: 520px)');
  const is440 = useMediaQuery('(min-width: 440px)');
  const is375 = useMediaQuery('(min-width: 375px)');
  const is280 = useMediaQuery('(min-width: 280px)');
  


  

const allWhitesVariants = is1024 ? whiteVariants1024 :
                        is956 ? whiteVariants956 :
                        is840 ? whiteVariants840 :
                        is768 ? whiteVariants768 :
                        is520 ? whiteVariants520 :
                        is440 ? whiteVariants440 :
                        is375 ? whiteVariants375 :
                        is280 ? whiteVariants280 :
                        whiteVariants130






    


  const [open, setOpen] = useState(false);


  const handleOpen = () => {
    setOpen(true);
    setPlay(true);
  }


  
  





  return (
    <div className="party-container">


      {open ? <div></div> : 

        <motion.div className="intro"
          initial={{ x: '-100vw', opacity:0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}

        >
          <img src='/images/intro.png' alt='intro'/>

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

        <motion.div className='open'
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1.5 }}
        >

          <img src='/images/env-open.png' alt='open'/>


        </motion.div>



      }


      {!open ? <div></div> : 

        <div className="party-card-container">

            {!open ? <div></div> : 

                <motion.div className="party"
                  variants={allWhitesVariants}
                  initial="hidden"
                  animate="visible"
                >

                  <div className="card-image">
                      <img src='/images/party.png' alt='party'/>

                  </div>

                  <Link to={'/save-a-date/2'}><div className="join-us-btn white-join-us-btn">Join us</div></Link>  

                </motion.div>

            }

         

           

        </div>

      }

    

  
      
    </div>
  );
}

export default Party;
