import { useState, useEffect } from "react";
import Axios from 'axios';


const Admin = () => {


    const [guests, setGuests] = useState([]);
    const [message, setMessage] = useState("");
    

    useEffect(() => {
        Axios.get('/admin')
        .then((res) => {

            if(res.status === 200 && res.data.guests.length === 0){
                setMessage(res.data.message);
            }
            if(res.status === 201 && res.data.guests.length > 0){
                setGuests(res.data.guests);
            }


            console.log(res.data);
        });

    }, []);

    return ( 
        <>

            <div className="admin-container">

                <div className="container-title">Guests list</div>


                {guests.length === 0 ? <div className="no-guests">{message}</div> : 
                    
                    <div className="guests-container">
                        <div className="titles">
                            <div className="title-name">Name</div>
                            <div className="title-number">Number of accompanying guests</div>
                        </div>

                        {guests.length === 0 ? <div></div> : 
                                
                            guests.map((item) => (
                                <div className="container-body" key={item.guest_id}>
                                    <div className="guest-name">{item.name}</div>
                                    <div className="guest-name">{item.numOfGuests}</div>
                                </div>
                            ))
                        }


                       


                        {/* <div className="section name-section">

                            <div className="section-title">Name</div>
                            <div className="section-body">
                                {guests.length === 0 ? <div></div> : 
                                
                                    guests.map((item, index) => (
                                        <div className="guest-name" key={index}>{item.name}</div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="section number-section">
                            <div className="section-title">Number of accompanying guests</div>
                            <div className="section-body">
                                {guests.length === 0 ? <div></div> : 
                                    
                                    guests.map((item, index) => (
                                        <div className="guest-name" key={index}>{item.numOfGuests}</div>
                                    ))
                                }
                            </div>
                        </div> */}
                    </div>
                }

                
            </div>
        
        </>
     );
}
 
export default Admin;