
import { Link } from 'react-router-dom';












function Home() {
  
  





  return (
    <div className="home-container">

      <Link to="/wedding"><div className="event-btns wedding-btn">Wedding</div></Link>
      <Link to="/wedding-celebration"><div className="event-btns party-btn">Wedding Celebration</div></Link>
      
    </div>
  );
}

export default Home;
