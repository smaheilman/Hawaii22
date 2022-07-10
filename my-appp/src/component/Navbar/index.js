import React, {useState} from "react";
import Homepage from "../../Pages/Home/index";
import Houses from "../../Pages/Houses/index";
import Schedule from "../../Pages/Schedule/index";
import Photos from "../../Pages/Photos/index";
import Activities from "../../Pages/Activities/index";
import Nav from "../Navbar/navTabs"

const Navbar = () => {
    const [currentPage, handlePageChange] = useState('Home');
  
    // The renderPage method uses a switch statement to render the appropriate current page
    const renderPage = () => {
      switch (currentPage) {
        case 'Houses' :
            return <Houses/>;
        case 'Schedules' :
            return <Schedule/>;
        case 'Photos' :
            return <Photos/>;
        case 'Activities' : 
            return <Activities/>
        default:
          return <Homepage />;
      }
    };
  
    return (
      <div>
        {/* Pass the state value and the setter as props to NavTabs */}
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Call the renderPage function passing in the currentPage */}
        <div>{renderPage(currentPage)}</div>
      </div>
    );
}

export default Navbar;