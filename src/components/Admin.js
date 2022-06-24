import { useState, useEffect } from "react";
import Axios from 'axios';


const Admin = () => {


    const [guests, setGuests] = useState([]);
    const [message, setMessage] = useState("");
    const [showAll, setShowAll] = useState(true);
    const [showWedding, setShowWedding] = useState(false);
    const [showCeleb, setShowCeleb] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [isPending, setIsPending] = useState(true);
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);



    const handleAll = () => {
        setShowAll(true);
        setShowWedding(false);
        setShowCeleb(false);
    
    }

    const handleWedding = () => {
        setShowWedding(true);
        setShowAll(false);
        setShowCeleb(false);
        
    }

    const handleCeleb = () => {
        setShowCeleb(true);
        setShowWedding(false);
        setShowAll(false);
       
    }

    

    

    useEffect(() => {
        Axios.get('https://main-day.herokuapp.com/admin')
        .then((res) => {

            console.log(res);

            if(res.status === 200 && res.data.guests.length === 0){
                setMessage(res.data.message);
                setIsEmpty(true);
                setIsPending(false);

            }
            if(res.status === 201 && res.data.guests.length > 0){
                setGuests(res.data.guests);
                setIsPending(false);



            }


        }).catch( error => {
            console.log(error.response.data.error.message);
            setErrorMessage(error.response.data.error.message);
        })

    }, []);


    const handleDelete = (id) =>{
        Axios.delete(`https://main-day.herokuapp.com/delete/${id}`)
        .then((res) => {
            console.log(res);
            if(res.status === 200){
                setSuccessMessage(res.data.message);

                setTimeout(() => {
                    setSuccessMessage("");

                }, 3000)

                const updatedGuests = guests.filter(item => item.guest_id !== id);
                setGuests(updatedGuests);
                
            }
        })
    }


    const getGuests = () => {
        if(showAll){
            return guests;
        }
        if(showWedding){
            return guests.filter(guest => guest.event === "Wedding");
        }
        if(showCeleb){
            return guests.filter(guest => guest.event === "Wedding Celebration");
        }
        
    }

    return ( 
        <>
            { isPending && <div>Loading ...</div> }
            { errorMessage && <div className="network-error" >{errorMessage}</div>}

            <>

                { isEmpty ? <div className="no-guests">{message}</div> :

                    <div className="admin-container">

                        <div className="admin-filter-btns">

                            <div 
                                className="filter-btns trads-btn"
                                onClick={handleAll}
                            
                            >
                                All guests
                            </div>

                            <div 
                                className="filter-btns trads-btn"
                                onClick={handleWedding}
                            
                            >
                                wedding
                            </div>

                            <div 
                                className="filter-btns white-btns"
                                onClick={handleCeleb}
                            >
                                wedding celebration
                            </div>



                        </div>
                        

                        
                        <div className="container-title">{showAll ? "All guests list" : showWedding ? "Wedding guests list" : "wedding celebration guests list"}</div>
                        

                        {successMessage && <span className='success-message'>{successMessage}</span>}


                        {guests.length === 0 ? <div></div> : 
                            
                            <div className="guests-container">
                                <div className="titles">
                                    <div className="title-name">Name</div>
                                    <div className="title-number">Number of accompanying guests</div>
                                </div>

                                {guests.length === 0 ? <div></div> : 
                                        
                                    getGuests().map((item) => (
                                        <div className="container-body" key={item.guest_id}>
                                            <div className="guest-name">{item.name}</div>
                                            <div className="guest-name">{item.numOfGuests}</div>
                                            <div className="delete-btn" onClick={() => handleDelete(item.guest_id)}>Delete</div>
                                        </div>
                                    ))
                                }

                                <div className="total-guests"> {`The total number of guests is ${getGuests().length}`}</div>
                            </div>
                        }


                    </div>
                }

            </>


            
        
        </>
     );
}
 
export default Admin;