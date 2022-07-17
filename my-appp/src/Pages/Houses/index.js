import React from "react";
import Oahu from "../../assets/images/Oahu-house.jpg"
import Kauai from "../../assets/images/Kauai-house.jpg"

const Houses = () => {
    return(
        <div className="houses">
            <h1 className="houseHead">Home sweet home!</h1>
            <div className="houseOne house">
                <h3 className="hHeader">Oahu</h3>
                <a className="vLink" href="https://www.vrbo.com/678699?unitId=1226637&childrenCount=0&noDates=true&utm_source=direct&utm_medium=social&utm_campaign=earned:vrbo:sharecopylink:USA&utm_content=678699&oc=jXo7ideYBPLn4WvF-wQWZ" target="_blank" rel="noreferrer noopener"><img className="Oahu" src={Oahu} alt="house"/></a>
                <p>521 Kawailoa Rd, Kailua, HI 96734</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.8933067802122!2d-157.72683308408617!3d21.394105285801576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c0014fb41596c8d%3A0x32a1fc85a7e464d5!2s521%20Kawailoa%20Rd%2C%20Kailua%2C%20HI%2096734!5e0!3m2!1sen!2sus!4v1657849395104!5m2!1sen!2sus" className="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Oahu"></iframe>
            </div>
            <div className="houseTwo house">
                <h3 className="hHeader">Kauai</h3>
                <a className="vLink" href="https://www.vrbo.com/389761?unitId=389761&childrenCount=0&noDates=true&utm_source=direct&utm_medium=social&utm_campaign=earned:vrbo:sharecopylink:USA&utm_content=389761&oc=et6wQo7AU-bTxfRZvWgt4" target="_blank" rel="noreferrer noopener"><img className="Oahu" src={Kauai} alt="house"/></a>
                <p>4171 Kekuanaoa Ln Princeville, HI 96722 </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7826.3297131006375!2d-159.48642442266367!3d22.219745056699608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c06faaf84f22bbf%3A0xc36527b2468dde31!2s4171%20Kekuanaoa%20Ln%2C%20Princeville%2C%20HI%2096722!5e0!3m2!1sen!2sus!4v1657849960256!5m2!1sen!2sus" className="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Kauai"></iframe>
            </div>
        </div>
    );  
};

export default Houses;