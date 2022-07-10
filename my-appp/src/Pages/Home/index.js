import React from "react";
import palmTree from "../../assets/images/palm-tree.png"
import Countdown from "../../component/countdown";

const Home = () => {
    return(
        <div>
            <h1>Hawaii Vacation 2022!</h1>
            <div>
                <img src={palmTree} alt="3d palm tree" className="palmTree"/>
                <Countdown/>
            </div>
        </div>
    );
};

export default Home;