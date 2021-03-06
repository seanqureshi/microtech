import React, { Component } from 'react';
import AnimatedNumber from 'react-animated-number';
import TrackVisibility from 'react-on-screen';
import { Helmet } from "react-helmet";

import Header from '../Header/Header';
import MobileHeader from '../Header/MobileHeader';
import History from '../About/History';
import MobileHistory from './MobileHistory';
import Footer from '../Footer/Footer';

import MWILogo from '../../assets/Logos/MWI_Animal_Health_White.png';
import MTLogo from '../../assets/Logos/Micro_Technologies_White.png';
import ABLogo from '../../assets/Logos/AmerisourceBergen_White.png';
import PhoneTiny from '../../assets/Icons/Phone.png';
import EmailBlue from '../../assets/Icons/close-envelope.png';
import EmailTiny from '../../assets/Icons/Grey_Envelope.png';
import Cowpen from '../../assets/Pics/Cowpen.svg';
import Map from '../../assets/Pics/Map.jpg';
import AboutMobile from '../../assets/Mobile/AboutMobile.png';


export default class About extends Component {
  constructor() {
    super();

    this.state = {
      smallValue: 0,
      mediumValue: 0,
      bigValue: 0,
      updates: 0,
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.update(), 2000);
    this.interval = setInterval(() => this.mountUnmount(), 12000);
  }

  update() {
    const { updates } = this.state;

    this.setState({
      smallValue: 20,
      mediumValue: 24,
      bigValue: 80,
      updates: updates + 1
    });
  }

  mountUnmount() {
    const { updates } = this.state;

    this.setState({
      updates: updates + 1
    });
  }

  render() {

    const { smallValue, mediumValue, bigValue } = this.state;

    return (
      <section className="about-container">

        <Helmet>
          <title>About</title>
          <meta name="description" content="By combining deep experience in agriculture, science and technology, we aim to create superior value and contribute to the ongoing success of our customer every day." />
        </Helmet>

        <Header />
        <MobileHeader />

        <img className="about-cover-mobile" src={AboutMobile} alt="About Cover" />

        <main className="about-main">
          <div className="about-cover">

            <section className="bluecover-about-container">
              <div className="bluebanner-left">
                <h4 className="left">OUR COMPANY</h4>
                {/* <div className="flexabout-this"> */}
                <h1 className="bluebanner-header left leadtop">HISTORY</h1>
                {/* <div className="bluebanner-est">
                    <h4 className="margin-est">EST.</h4>
                  </div> */}
                {/* </div> */}
              </div>
              <div className="bluebanner-right">
                <p className="bluebanner-text bannerabout">
                  Decades of unwavering commitment to repeated innovation</p>
              </div>
            </section>
          </div>

          <section className="mobilehide">
            <section className="bluebanner-column about columnbanner">
              <div className="bluebanner-left">
                <h4 className="left">OUR COMPANY</h4>
                <div className="flexabout-this">
                  <h1 className="bluebanner-header left lead">HISTORY</h1>
                  <div className="bluebanner-est">
                    <h4 className="margin-est">EST.</h4>
                  </div>
                </div>
              </div>
              <div className="leadership-bottom">
                <p className="leadership-text left lead">
                  Decades of unwavering commitment to repeated innovation</p>
              </div>
            </section>
          </section>

          <div className="history-box">
            <History />
          </div>

          <div className="history-box-mobile">
            <MobileHistory />
          </div>


          <section className="bluebanner-column about columnbanner">
            <div className="bluebanner-left">
              <h1 className="bluebanner-header left lead">LEADERSHIP</h1>
            </div>
            <div className="leadership-bottom">
              <p className="leadership-text left lead">
                By combining deep experience in agriculture, science and technology, we aim to create superior value and contribute to the ongoing success of our customer every day.</p>
            </div>
          </section>


          <section className="team-container">
            <div className="team-box aboutteam">
              <h2 className="leadership-team-h2">Leadership Team</h2>
              <div className="president-about">
                <h5 className="pres-name">TIM PEART,</h5>
                <h5 className="pres-title">PRESIDENT</h5>
              </div>
              <p className="team-text">“We are united in our responsibility of creating healthier futures. At Micro Technologies™, we commit our time and efforts on a daily basis in order to uncover needs of our customers, innovate the tools and technologies they need to run a more profitable, efficient operation and do all of this with the shared responsibility of feeding a growing population.”</p>
              <div className="email-information">
                <img className="email-tiny" src={PhoneTiny} alt="phone icon" />
                <a className="pres-alinks" href="tel:800-858-4330"><p className="email-tiny-text pres">800.858.4330</p></a>
              </div>
              <div className="email-information">
                <img className="email-tiny" src={EmailBlue} alt="phone icon" />
                <a className="pres-alinks" href="mailto:TPEART@MICROTECHNOLOGIES.COM"><p className="email-tiny-text">TPEART@MICROTECHNOLOGIES.COM</p></a>
              </div>
            </div>

            <div className="team-line"></div>

            <div className="execs-container">

              <div className="execs-box">
                <div className="executives">
                  <h5 className="execs-name">MARCUS DORSEY,</h5>
                  <h5 className="execs-title">Field Operations Manager
              </h5>
                </div>
                <div className="company-information company">
                  <img className="email-tiny" src={EmailTiny} alt="phone icon" />
                  <a className="leadership-alinks" href="mailto:MDORSEY@MICROTECHNOLOGIES.COM"><p className="email-tiny-text-exec">MDORSEY@MICROTECHNOLOGIES.COM</p></a>
                </div>
              </div>

              <div className="execs-box">
                <div className="executives">
                  <h5 className="execs-name">DUANE LOMAX,</h5>
                  <h5 className="execs-title">Feed Additive & Regulatory Operations Manager
              </h5>
                </div>
                <div className="company-information company">
                  <img className="email-tiny" src={EmailTiny} alt="phone icon" />
                  <a className="leadership-alinks" href="mailto:DLOMAX@MICROTECHNOLOGIES.COM"><p className="email-tiny-text-exec">DLOMAX@MICROTECHNOLOGIES.COM</p></a>
                </div>
              </div>

              <div className="execs-box">
                <div className="executives">
                  <h5 className="execs-name">JOE YOUNG,</h5>
                  <h5 className="execs-title">Strategic Account/Non-Confined Sales Manager</h5>
                </div>
                <div className="company-information company">
                  <img className="email-tiny" src={EmailTiny} alt="phone icon" />
                  <a className="leadership-alinks" href="mailto:JYOUNG@MICROTECHNOLOGIES.COM"><p className="email-tiny-text-exec">JYOUNG@MICROTECHNOLOGIES.COM</p></a>
                </div>
              </div>

              <div className="execs-box">
                <div className="executives">
                  <h5 className="execs-name">MAX KOSTER,</h5>
                  <h5 className="execs-title">Beef Program Development Sales Manager</h5>
                </div>
                <div className="company-information company">
                  <img className="email-tiny" src={EmailTiny} alt="phone icon" />
                  <a className="leadership-alinks" href="mailto:MKOSTER@MICROTECHNOLOGIES.COM"><p className="email-tiny-text-exec">MKOSTER@MICROTECHNOLOGIES.COM</p></a>
                </div>
              </div>

              <div className="execs-box">
                <div className="executives">
                  <h5 className="execs-name">JERRY CORMAN,</h5>
                  <h5 className="execs-title">Dairy Program Development Sales Manager</h5>
                </div>
                <div className="company-information company">
                  <img className="email-tiny" src={EmailTiny} alt="phone icon" />
                  <a className="leadership-alinks" href="mailto:JCORMAN@MICROTECHNOLOGIES.COM"><p className="email-tiny-text-exec">JCORMAN@MICROTECHNOLOGIES.COM</p></a>
                </div>
              </div>

              <div className="execs-box">
                <div className="executives">
                  <h5 className="execs-name">DICK BISHOP,</h5>
                  <h5 className="execs-title">CONTROLLER</h5>
                </div>
                <div className="company-information company">
                  <img className="email-tiny" src={EmailTiny} alt="phone icon" />
                  <a className="leadership-alinks" href="mailto:DBISHOP@MICROTECHNOLOGIES.COM"><p className="email-tiny-text-exec">DBISHOP@MICROTECHNOLOGIES.COM</p></a>
                </div>
              </div>

            </div>

          </section>

          <section className="bluebanner-column about columnbanner">
            <div className="bluebanner-left ">
              <h1 className="bluebanner-header left lead">PARTNERSHIP</h1>
            </div>
            <div className="leadership-bottom">
              <div className="partnership-logos">
                <img className="part-icon" src={MWILogo} alt="MWI Animal Health" />
                <img className="part-icon" src={MTLogo} alt="MWI Animal Health" />
                <img className="part-icon ABlogo" src={ABLogo} alt="MWI Animal Health" />
              </div>
            </div>
          </section>

          <section className="responsibility-container" id="responsibility">

            <div className="res-align">
              <div className="responsibility-box">
                <h2 className="responsibility-header">Our Responsibility</h2>
                <p className="res-text-left">From the livestock management innovations of Micro Technologies to the distribution services of MWI Animal Health, as the AmerisourceBergen Family of animal health we are united in our responsibility to create healthier futures.</p>
                <br></br>
                <p className="res-text-left">As the world’s population grows we are challenged to produce more, higher-quality protein than ever before with the use of less natural resources. We believe a path to securing a safe, affordable and wholesome food supply will come primarily as a result of innovation.</p>
                <br></br>
                <p className="res-text-left">That is why at Micro we feel it is our responsibility to provide technologies in an effort to assure food quality, safety and security for our families, friends, neighbors and the world. </p>
              </div>

              <div className="facts-box">
                <p className="facts-header">Together, we are proud to say our technologies impact</p>
                <h3>2 out of 3</h3>
                <h4>beef products</h4>
                <br></br>
                <br></br>
                <h3>1 out of 2</h3>
                <h4>dairy products</h4>
              </div>

            </div>
          </section>

          <div className="cowpen-box">
            <img className="cowpen-image" src={Cowpen} alt="Cow Pen" />
          </div>


          <section className="map-container">
            <div className="map-box">
              <h2 className="reach">Our Reach</h2>
              <img className="map" src={Map} alt="Our Reach Map" />
            </div>
          </section>


          <section className="gray-footer">
            <div className="gray-location">
              <h4>Micro Headquarters:</h4>
              <h6>Amarillo, TX</h6>
            </div>
            <div className="gray-location">
              <h4>Worldwide:</h4>
              <h6>

                <TrackVisibility>
                  {({ isVisible }) => isVisible &&
                    <AnimatedNumber
                      style={{
                        transition: '0.8s ease-out',
                        transitionProperty:
                          'background-color, color'
                      }}
                      frameStyle={perc => (
                        perc === 100 ? {} : { backgroundColor: '#ffffff' }
                      )}
                      stepPrecision={0}
                      value={smallValue}
                      duration={1200}
                      formatValue={n => `${n}+ Countries`} />
                  }
                </TrackVisibility>

              </h6>
            </div>
            <div className="gray-location">
              <h4>Distribution Network:</h4>
              <h6>

                <TrackVisibility>
                  {({ isVisible }) => isVisible &&
                    <AnimatedNumber
                      style={{
                        transition: '0.8s ease-out',
                        transitionProperty:
                          'background-color, color'
                      }}
                      frameStyle={perc => (
                        perc === 100 ? {} : { backgroundColor: '#ffffff' }
                      )}
                      stepPrecision={0}
                      value={mediumValue}
                      duration={1200}
                      formatValue={n => `${n} Locations`} />
                  }
                </TrackVisibility>

              </h6>
            </div>
            <div className="gray-location">
              <h4>Patents:</h4>
              <h6 className="patents">

                <TrackVisibility>
                  {({ isVisible }) => isVisible &&
                    <AnimatedNumber
                      style={{
                        transition: '0.8s ease-out',
                        transitionProperty:
                          'background-color, color'
                      }}
                      frameStyle={perc => (
                        perc === 100 ? {} : { backgroundColor: '#ffffff' }
                      )}
                      stepPrecision={0}
                      value={bigValue}
                      duration={1200}
                      formatValue={n => `${n}+ US And Foreign Patents`} />
                  }
                </TrackVisibility>

              </h6>
            </div>
          </section>
        </main>

        <Footer />
      </section>
    )
  }
}
