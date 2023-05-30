import { useState, useLayoutEffect } from 'react'
import cover from '../tthome2.jpeg';
import './styles.css';

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
          <p><a className="centeredDescription" href="">Read more</a></p>

          <div className="aboutContainer">
            {/* <h2 className="aboutTitle">About</h2> */}
            <h3 className="aboutTitle">Ever been curious about time? Ever wondered if time travel were possible?</h3>
            <p className="aboutDescription">This website provides an overview of the philosophy of time, including analyses on the four main theories of time as well as a preview of time travel.</p>
          </div>

        </body>
      </div>
    </>
  )
}

export default App
