import React from "react";
import palmTree from "../../assets/images/palm-tree.png"
import Countdown from "../../component/countdown";

const Home = () => {
    return(
        <div className="divH">
            <div className="beach">
            <div className="palms">
                <img src={palmTree} alt="3d palm tree" className="palmTree"/>
            </div>
            <div className="home">
            <h1 className="hawaii">Hawaii Vacation 2022!</h1>
            <Countdown/>
            </div>
            
            </div>
        </div>
    );
};

export default Home;