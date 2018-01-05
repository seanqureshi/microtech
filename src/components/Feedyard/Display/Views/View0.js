import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

import Slide1 from '../../../../assets/Photos/MicroWeigh/Slide1.png';
import Slide2 from '../../../../assets/Photos/MicroWeigh/Slide2.png';
import Slide3 from '../../../../assets/Photos/MicroWeigh/Slide3.png';
import Slide4 from '../../../../assets/Photos/MicroWeigh/Slide4.png';
import Slide5 from '../../../../assets/Photos/MicroWeigh/Slide5.png';
import Slide6 from '../../../../assets/Photos/MicroWeigh/Slide6.png';


export default class View0 extends Component {
    render() {
        return (
            <div className="moreinfo-display">
                <h4 className="moreinfo-display-header">MICRO WEIGH® SYSTEM MICRO INGREDIENT DELIVERY SYSTEM</h4>
                <li className="moreinfo-list">
                Accurately measure and deliver micro feed ingredients, ensuring consistency in every batch of feed</li>
                <li className="moreinfo-list">
                Flexibility to customize rations to the nutritionist’s specifications</li>
                <li className="moreinfo-list">
                Access accurate reports to ensure accountability and efficient inventory management.</li>
                <li className="moreinfo-list">
                Minimize shrink through a closed micro feed ingredient delivery system</li>

                <Carousel autoplay={true}>
                    <img className="tv-batcher" src={Slide1} alt="slide show" width="673px" />
                    <img className="tv-batcher" src={Slide2} alt="slide show" width="673px" />
                    <img className="tv-batcher" src={Slide3} alt="slide show" width="673px" />
                    <img className="tv-batcher" src={Slide4} alt="slide show" width="673px" />
                    <img className="tv-batcher" src={Slide5} alt="slide show" width="673px" />
                    <img className="tv-batcher" src={Slide6} alt="slide show" width="673px" />
                </Carousel>
            </div>
        )
    }
}