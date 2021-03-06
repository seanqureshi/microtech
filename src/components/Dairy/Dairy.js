import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Carousel from 'nuka-carousel';
import ReactPlayer from 'react-player';
import Dialog from 'material-ui/Dialog';

import Header from '../Header/Header';
import MobileHeader from '../Header/MobileHeader';
import Footer from '../Footer/Footer';
import DairyInfo from '../Dairy/DairyInfo';

import DairyCover from '../../assets/Pics/Dairy_cover.png';
import Testimony1 from '../../assets/Pics/DairyCustomerJBenson.png';
import LowerCover from '../../assets/Pics/Lower_cover.png';
import Quotes from '../../assets/Icons/quote.png';
import DairyMobile from '../../assets/Mobile/DairyMobile.png';
import LowerMobile from '../../assets/Pics/LowerMobile.png';


export default class Dairy extends Component {
  constructor() {
    super();
    this.state = {
      testimonies: [],
      isOpen: false,
      open: false,
    }
    this.openModal = this.openModal.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true })
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };



  // componentDidMount() {
  //   let dataURL = "http://dev./wp-json/wp/v2/movies?_embed";
  //   fetch(dataURL)
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({
  //         movies: res
  //       })
  //     })
  // }




  render() {

    const styles = {
      dialogRoot: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

      },
      dialogContent: {
        position: "relative",
        transform: "",
        width: '100%'
      },
      dialogBody: {
        padding: 0
      }
    };

    return (
      <section className="dairy-container" >
        <Helmet>
          <title>Dairy</title>
          <meta name="description" content="Simply put, we help dairies through the use of our technologies and processes, produce a safe, wholesome product more efficiently and more profitably." />
        </Helmet>

        <Header />
        <MobileHeader />

        <img className="dairy-cover-mobile" src={DairyMobile} alt="Dairy Cover" />

        <main className="dairy-main">
          <section className="feedyard-top">
            <div className="transparent-stocker white-text">
              <h3 className="feedyard-cover-title-one">What does Precision Dairy</h3>
              <h3 className="feedyard-cover-title-three">Management Look Like?</h3>
              <h6 className="feedyard-subtitle" id="fade-in-one">DECISIONS DRIVEN BY REAL-TIME DATA</h6>
              <h6 className="feedyard-subtitle" id="fade-in-two">HIGHER QUALITY & MORE PROFITABLE MILK</h6>
              <h6 className="feedyard-subtitle" id="fade-in-three">INCREASED EFFICIENCIES REDUCED COSTS</h6>
              <h6 className="feedyard-subtitle" id="fade-in-four">FLEXIBLE AND ACCURATE FEED PROGRAMS</h6>
              <h6 className="feedyard-subtitle" id="fade-in-five">OPTIMAL HERD HEALTH</h6>
            </div>
            <img className="stocker-cover" src={DairyCover} alt="Dairy Cover" />
          </section>

          <div className="off">
            <section className="blue-banner-flex advanced2">
              <h6 className="blue-left-text">ADVANCED COMPREHENSIVE & INTEREGRATED</h6>
              <div className="line-break-banner"></div>
              <h6 className="blue-right-text">DAIRY MANAGEMENT SOLUTIONS</h6>
            </section>
          </div>

          <section className="dms-text">
            <h3 className="dms-para">Simply put, we help dairies through the use of our technologies and</h3>
            <h3 className="dms-para">processes, produce a safe, wholesome product more efficiently and more profitably.</h3>
          </section>

          <div className="on">
            <section className="blue-banner-flex advanced2">
              <h6 className="blue-left-text">ADVANCED COMPREHENSIVE & INTEREGRATED</h6>
              <div className="line-break-banner"></div>
              <h6 className="blue-right-text">DAIRY MANAGEMENT SOLUTIONS</h6>
            </section>
          </div>

          <DairyInfo />

          <section className="blue-banner-flex-m">
            <div className="blue-left-box">
              <h6 className="blue-left-text-two">INTERESTED IN A</h6>
              <h6 className="blue-left-bold">CUSTOMIZED SOLUTION</h6>
              <h6 className="blue-left-text-two">FOR YOUR BUSINESS?</h6>
            </div>
            <div className="line-break-banner"></div>
            <Link to="/contact">
              <div className="blue-right-contact">CONTACT US</div>
            </Link>
          </section>

          <section className="hear-customers-container">
            <img className="customer-testimony" src={Testimony1} alt="Customer Headshot" />
            <div className="customer-lightblue2">
              <h6 className="customer-header">HEAR FROM OUR CUSTOMERS</h6>

              <Dialog
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
                contentStyle={styles.dialogContent}
                bodyStyle={styles.dialogBody}
                style={styles.dialogRoot}
                repositionOnUpdate={false}
              >

                <ReactPlayer
                  className='react-player'
                  onLoad={() => { window.dispatchEvent(new Event('resize')); }}
                  isOpen={this.state.isOpen}
                  playing
                  // controls
                  url='https://youtu.be/LT04hYXqg1c'
                  youtubeConfig={{ playerVars: { start: 15 } }}
                />

              </Dialog>

              <h6 className="customer-watchvideo" onClick={this.handleOpen}>WATCH VIDEO NOW</h6>

            </div>
          </section>

          <Carousel decorators={false} autoplay={true} wrapAround={true} speed={500} className="carousel-frame">

              <section className="bluebanner-box quotebox marginup">
                <div className="bluebanner-left">
                  <img className="quotes" src={Quotes} alt="quotes icon" width="60px" />
                </div>
                <div className="slanted-line"></div>
                <div className="bluebanner-right">
                  <p className="operations-quote">“With technology, there’s accountability. We can easily log in from anywhere and ensure the cows are being fed the accurate and correct rations prescribed by our nutritionist. Because of the technology we are no longer overfeeding; which means more efficiency in production and translates into healthier cows.”</p>
                  <div className="operations-box">
                    <h5 className="operations-name">- Jake Benson</h5>
                    <p className="operations-title">PARTNER, D&J DAIRY</p>
                    <p className="operations-title">HEREFORD, TEXAS</p>
                  </div>
                </div>
              </section>

              <section className="bluebanner-box quotebox marginup">
                <div className="bluebanner-left">
                  <img className="quotes" src={Quotes} alt="quotes icon" width="60px" />
                </div>
                <div className="slanted-line"></div>
                <div className="bluebanner-right">
                  <p className="operations-quote">“The ultimate indication of a good relationship with someone is trust. I find a lot of that trust in Micro. When they say they’re going to do something, they get it done. When they don’t have the answer to a question I have, they go out of their way to figure it out.”</p>
                  <div className="operations-box">
                    <h5 className="operations-name">- Isaac Ghorbani</h5>
                    <p className="operations-title">OPERATIONS MANAGER</p>
                    <p className="operations-title">FRISIA DAIRY, HARTLEY, TEXAS</p>
                  </div>
                </div>
              </section>

            </Carousel>

          <section className="feedyard-top">
            <div className="transparent-stocker2">
              <h3 className="transparent-left-text2">Comprehensive Solutions</h3>
              <h6 className="transparent-left-subtext2">THAT WORK FOR YOU</h6>
              <p className="comp-para">We are a leading U.S. distributor of feed additives and pharmaceuticals, our customers consistently rely on us to supply comprehensive products at a competitive price.</p>
              <p className="comp-para">Through the use of our technology and processes our customers have confidence of their ability to optimize the use of those products for the overall health and wellbeing of their animals. All while gaining increased operational efficiencies to support their long-term success.</p>
            </div>
            <img className="stocker-cover hidecover" src={LowerCover} alt="Stocker Cover" />
            <img className="stocker-cover-lower" src={LowerMobile} alt="Stocker Cover" />
          </section>


          <section className="white-banner-flex-bottom">
            <div className="transparent-banner-box">
              <h3 className="transparent-left-text">Dedicated Technical</h3>
              <h6 className="transparent-left-subtext">SERVICE & SUPPORT</h6>
            </div>
            <div className="transparent-line-break-banner"></div>
            <p className="transparent-right-text2">We understand that your business runs constantly and issues can arrive anytime. That’s why we are dedicated to providing exceptional customer service through a highly committed and expert technical force, providing same-day service, 365 days of the year.</p>
          </section>

          <section className="watch-video-stocker-footer">
            <div className="stocker-contact-line"></div>
            <div className="customized-box">
              <h6 className="stocker-footer-text">INTERESTED IN A</h6>
              <h6 className="stocker-footer-text">CUSTOMIZED SOLUTION FOR YOUR BUSINESS?</h6>
            </div>
            <Link to="/contact">
              <div className="stocker-video-box">CONTACT US </div></Link>
          </section>

        </main>

        <Footer />
      </section >
    )
  }
}
