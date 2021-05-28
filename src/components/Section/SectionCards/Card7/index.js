import React from 'react';
import '../Card.css';
import image from '../../images/7.png';
const Card7 = ({ onClick }) => (

    <div onClick={onClick} className="col-lg-3 px-0" id="portfolioimg5">
        <div className="card bg-dark text-white rounded-0">
            <img src={image} className="card-img"
                alt="A screenshot from vrSterilization. The VR user is looking at a sterile processing department including an autoclave, computer, and doorway to a gas sterilization room.">
            </img>
            <div className="card-img-overlay">
                <h3 className="center">VRsterilization, TBA</h3>
            </div>
        </div>
    </div>
)


export default Card7;