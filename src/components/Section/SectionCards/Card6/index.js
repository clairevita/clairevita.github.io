import React from 'react';
import '../Card.css';
import image from '../../images/6.png';
const Card6 = ({ onClick }) => (

    <div onClick={onClick} className="col-lg-3 px-0" id="portfolioimg5">
        <div className="card bg-dark text-white rounded-0">
            <img src={image} className="card-img"
                alt="A screenshot from the Uguale app. The user input for the equation 28 + 16.">
            </img>
            <div className="card-img-overlay">
            <h3 className="center">Uguale, 2021</h3>
            </div>
        </div>
    </div>
)


export default Card6;