import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import Axios from 'axios';



const JoinForm = () => {

    const { id } = useParams();

    const initialValues = {
        name: "",
        numOfGuests: ""
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [noContentMessage, setnoContentMessage] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [noContent, setNoContent] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");





    const handleChange = (e) => {

        e.preventDefault();
        const { name, value } = e.target;
        setFormValues({...formValues, [name] : value});

    }

    const handleSubmit = () => {

        
        if(formValues.name === "" || formValues.numOfGuests === ""){

            setErrors(validate(formValues));

            // setIsSubmit(false);

            // setNoContent(true);
            // setnoContentMessage("Please make sure you type in your name and the number of accompanying guests.");

            // setTimeout(() => {
            //     setMessage(false);
            //     setNoContent(false);

            // }, 2000);


        } else{
            postData();
        }

        // setIsSubmit(true);

        

        

    }

    const postData = useCallback(() => {

        Axios.post(`https://main-day.herokuapp.com/save-a-date/${id}`, formValues)
        .then((res) => {
            console.log(res);
            
            if(res.status === 200){
                setShowMessage(true);
                setMessage(res.data.message);
            }

            if(res.status === 204){
                setNoContent(true);
                setnoContentMessage("A seat has been reserved for this name already.");     

            }

            if(res.status === 406){
                setNoContent(true);
                setnoContentMessage("Please make sure you type in your name and the number of accompanying guests.");
       

            }
            
        })
        .finally(() => {
            setTimeout(() => {
            
                setFormValues({...formValues, name: "", numOfGuests: "" });
                setShowMessage(false);
                setNoContent(false);
    
    
            }, 3000);
        }).catch((error) => {

            console.log(error.response.data.error.message);
            setErrorMessage(error.response.data.error.message);
        })


   
     

        
    }, [formValues, id]);



    // useEffect(() => {

    //     // console.log(errors)
    //     if(Object.keys(errors).length === 0 && isSubmit){
        
    //         postData();
            
    //     }
    // }, [errors, isSubmit, postData]);


    const validate = (values) => {
        const errs = {};
        if(!values.name) {
            errs.name = "Please your name is required!"
        }
        if(!values.numOfGuests) {
            errs.numOfGuests = "Please the number of accompanying guests is required!"
        }


        return errs;
    }




    return ( 
        <>
            {
                errorMessage !== "" ? <div className="network-error" >{errorMessage}</div> :
                <div className="join-container">
                <div className="left-side">
                    <div className="img-container">
                        <img src='/images/left.png' alt='left'/>

                    </div>
                    {/* <div className="opacity-layer1"></div> */}
                </div>

                <div className="right-side">
                    <div className="img-container">
                        <img src='/images/right.png' alt='right'/>
                    </div>
                    {/* <div className="opacity-layer2"></div> */}
                </div>

                <div className="form-side">
                    <div className="form-container">
                        <div className="info">
                            Please take a moment to provide your name and number of accompanying guest.
                        </div>


                        <div className="form">

                            <>
                                {showMessage ? <span className='success-message'>{message}</span> : noContent ? <span className='no-content-message'>{noContentMessage}</span> : <div></div>}
                            
                            </>
                            
                            <form>
                                <div className="attr-block">
                                    <div className="attr-title">Name</div>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        className="attr-name" 
                                        value={formValues.name}
                                        onChange={handleChange}
                                    
                                    />
                                    <span className='error-message'>{errors.name}</span>
                                </div>
                                <div className="attr-block">
                                    <div className="attr-title">Number of accompanying guests</div>
                                    <input 
                                        type="text" 
                                        name="numOfGuests" 
                                        className="attr-number" 
                                        value={formValues.numOfGuests}
                                        onChange={handleChange}
                                        
                                    />
                                    <span className='error-message'>{errors.numOfGuests}</span>

                                </div>

                                <div className="btn" onClick={handleSubmit}>Save a seat</div>
                                <div className="empty-block"></div>

                            </form>


                        </div>

                    </div>
                </div>




                
                </div>
            }
        </>
     );
}
 
export default JoinForm;