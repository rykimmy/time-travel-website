import { useState, useLayoutEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import { Link, Outlet } from 'react-router-dom';
import { Link as SlideLink } from 'react-scroll';
import cover from '../homecover.jpeg';
import './styles.css';
import 'react-slideshow-image/dist/styles.css';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function App() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <>
      <div>
        <body>
          <img className="coverPhoto" src={cover} />
          <div className="centeredTitle">An introduction to time and time travel.</div>
          <SlideLink activeClass="active" smooth={true} spy="navbar" to="aboutContainer">
            <p><a className="centeredDescription" href='#aboutContainer'>Read more</a></p>
          </SlideLink>

          <div id="aboutContainer">
            {/* <h2 className="aboutTitle">About</h2> */}
            <h3 className="aboutTitle">Ever been curious about time? Ever wondered<br></br>if time travel were possible?</h3>
            {/* <h3 className="aboutTitle">Ever wondered if time travel were possible?</h3> */}
            <p className="aboutDescription">This website provides an overview of the philosophy of time, which includes analyses on the four main theories of time as well as a preview of time travel. Before proceeding, however, there requires some background information pertinent to truly understand the philosophy of time.</p>
            <Link to="/background">
              <p className="backgroundInfoLink">Read more</p>
            </Link>
          </div>

          <div className="infoContainer">
            <h2 className="infoTitle">Theories of Time</h2>

            <p className="infoContent">Below are the four main theories of time that scholars have long discussed and continue to debate. These four theories are mutually exclusive, meaning only one of them can be true. If any one of these theories is true, then the other three are all false.</p>

            <Slide>
              <div className="each-slide-effect slideItem">
                <h3 className="infoSub">Presentism</h3>
                <p className="infoDescription">Presentism holds that only present things exist. People, events, and things of the past and future do not exist, though facts about them do. Additionally, one of the central features of presentism is the existence of an absolute now or the absolute present.</p>
                <Link to="/presentism">
                  <p className="linkButton">Read more</p>
                </Link>
              </div>

              <div className="each-slide-effect slideItem">
                <h3 className="infoSub">The Block Theory</h3>
                <p className="infoDescription">The block theory envisions reality as a block of spacetime––extended both in space and time. Within this block is the entire history of the universe, meaning all people, events, and things from the past, present, and future are all existent within the block. As such, this view holds that all things exist and contrary to presentism, that there exists no absolute present.</p>
                <Link to="/block">
                  <p className="linkButton">Read more</p>
                </Link>
              </div>

              <div className="each-slide-effect slideItem">
                <h3 className="infoSub">The Moving Spotlight</h3>
                <p className="infoDescription">The moving spotlight also envisions reality as a block of spacetime. Contrary to the block theory, however, the moving spotlight believes in the existence of the absolute present, which acts as a marker of time within the block. The absolute present accounts for experiencing the passage of time. All past, present, and future things exist, and the absolute present demarcates between these zones.</p>
                <Link to="/moving-spotlight">
                  <p className="linkButton">Read more</p>
                </Link>
              </div>

              <div className="each-slide-effect slideItem">
                <h3 className="infoSub">The Growing Block</h3>
                <p className="infoDescription">The growing block theory also envisions reality as a block of spacetime. However, where the block theory sees the block encapsulating everything––past, present, and future––the growing block instead only includes the past and present. Thus, only past and present things exist. As time passes, the block grows as more things happen. This view includes an absolute present, which similar to the moving spotlight, accounts for the passage of time.</p>
                <Link to="/growing-block">
                  <p className="linkButton">Read more</p>
                </Link>
              </div>
            </Slide>
          </div>

          <div className="ttContainer">
            <h2 className="ttTitle">Time Travel</h2>
            <p className="ttDescription">Time travel is a phenomenon long speculated by physicists, philosophers, science-fiction authors, and movie directors. While widely seen as fictional and impossible, the ability to time travel actually aligns with our best known physical laws and theories. Despite our lack of a time traveling machine––making it technologically impossible––its logical possibility remains up for discussion.</p>
            <Link to="/time-travel">
              <p className="ttLink">Read more</p>
            </Link>
          </div>

        </body>
      </div>
    </>
  )
}

export default App
