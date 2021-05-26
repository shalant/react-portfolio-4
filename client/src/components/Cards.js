import React, { Component } from 'react';
import Card from './CardUI';
import img1 from '../assets/images/SchedulerAppScreenshot.png';
import img2 from '../assets/images/informedTrades.png';
import img3 from '../assets/images/DW.jpg';

class Cards extends Component {
    render() {
        return(
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card imgsrc={img1} title="SchedulerApp" description='cool' />
                    </div>
                    <div className='col-md-4'>
                        <Card imgsrc={img2} title="InformedTrades" description='beans' />
                    </div>
                    <div className='col-md-4'>
                        <Card imgsrc={img3} title="DynamicWines" description='bro' />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;