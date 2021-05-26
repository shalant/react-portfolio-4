import React from 'react';
import './card-style.css';

const Card = props => {
    return(
        <div className='card text-center shadow'>
            <div className='overflow'>
                <img src={props.imgsrc} alt='image 1' className='card-img-top'></img>
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>{props.title}</h4>
                <p className='text-secondary'>{props.description}</p>
                <a href='#' className='btn btn-outline-success'>View deployment</a>
                <a href='#' className='btn btn-outline-success'>Code on Github</a>
            </div>
        </div>   
    );
}

export default Card;