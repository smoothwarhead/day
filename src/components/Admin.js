import { useState, useEffect } from "react";
import Axios from 'axios';


const Admin = () => {


    const [guests, setGuests] = useState([]);
    const [message, setMessage] = useState("");
    const [showAll, setShowAll] = useState(true);
    const [showTrads, setShowTrads] = useState(false);
    const [showWhite, setShowWhite] = useState(false);
    const [showParty, setShowParty] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    const handleAll = () => {
        setShowAll(true);
        setShowTrads(false);
        setShowWhite(false);
        setShowParty(false);
    }

    const handleTrads = () => {
        setShowTrads(true);
        setShowAll(false);
        setShowWhite(false);
        setShowParty(false);
    }

    const handleWhite = () => {
        setShowWhite(true);
        setShowTrads(false);
        setShowAll(false);
        setShowParty(false);
    }

    const handleParty = () => {
        setShowParty(true);
        setShowWhite(false);
        setShowTrads(false);
        setShowAll(false);
    }


    

    useEffect(() => {
        Axios.get('/admin')
        .then((res) => {

            console.log(res);

            if(res.status === 200 && res.data.guests.length === 0){
                setMessage(res.data.message);
            }
            if(res.status === 201 && res.data.guests.length > 0){
                setGuests(res.data.guests);
            }


            console.log(res.data);
        }).catch( error => {
            console.log(error.response.data.error.message);
            setErrorMessage(error.response.data.error.message);
        })

    }, []);


    const getGuests = () => {
        if(showAll){
            return guests;
        }
        if(showTrads){
            return guests.filter(guest => guest.event === "Trads");
        }
        if(showWhite){
            return guests.filter(guest => guest.event === "White");
        }
        if(showParty){
            return guests.filter(guest => guest.event === "Party");
        }
    }

    return ( 
        <>

            {
                

                errorMessage !== "" ? <div className="network-error" >{errorMessage}</div> :

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
                            onClick={handleTrads}
                        
                        >
                            Trads guests
                        </div>
                        <div 
                            className="filter-btns white-btns"
                            onClick={handleWhite}
                        >
                            white guests
                        </div>


                        <div 
                            className="filter-btns party-btns"
                            onClick={handleParty}
                        
                        >
                            Party guests
                        </div>

                    </div>

                    <div className="container-title">{showAll ? "All guests list" : showTrads ? "Trads guests list" : showWhite ? "white guests list" : "Party guests list"}</div>


                    {guests.length === 0 ? <div className="no-guests">{message}</div> : 
                        
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
                                    </div>
                                ))
                            }

                            <div className="total-guests"> {`The total number of guests is ${getGuests().length}`}</div>
                        </div>
                    }


                </div>
            }

            
        
        </>
     );
}
 
export default Admin;