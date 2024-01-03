import React from 'react';
import './AboutPage.css';
import check from '/Users/patrickeitel/Mod3/twink/src/check.png'

function AboutPage() {
  return (
    <section id="section-about" className="about-section">
      <h1>_</h1>
      <h1 className="site">Grandfathered Checklist</h1>
      <p className="author"style={{scale: '150%'}}>By Pitter</p>
      <div className="all-sections">
        <div data-aos="fade-right" className="mini-section">
        <img className="check-img" src={check} style={{height: '85%', width: '100%'}} />
          <div className="text-mini-section">
            <h1>Verified Gear</h1>
            <p>All items are verified by top players in the 19 bracket.</p>
          </div>
        </div>
        <div data-aos="fade-up" className="mini-section">
        <img className="check-img" src={check} style={{height: '85%', width: '100%'}} />
          <div className="text-mini-section">
            <h1>Responsive</h1>
            <p>Responsive design allows you to use this site on your computer or phone!</p>
          </div>
        </div>
        <div data-aos="fade-up" className="mini-section">
        <img className="check-img" src={check} style={{height: '85%', width: '100%'}} />
          <div className="text-mini-section">
            <h1>Updated Often</h1>
            <p>If an item is missing, reach out! <br></br>discord: pitter3</p>
          </div>
        </div>
      </div>
      {/* <button
  style={{ scale: '200%', margin: '60px' }}
  data-aos="zoom-in-down"
  className="donate"
  onClick={() => {
    window.open('https://www.paypal.com/paypalme/19Zone?country.x=US&locale.x=en_US', '_blank');
  }}
>
  Donate
</button> */}
    </section>
  );
}

export default AboutPage;