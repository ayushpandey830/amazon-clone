import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
      <div>
        <div className="home">
          <div className="home_container">
            <img
              className="home_image"
              src="https://m.media-amazon.com/images/I/81qDhAQH-vL._SX3000_.jpg"
              alt="banner"
            />

            <div className="home_row">
              <Product
                id="122323"
                title="Oral-B Sensitive Replacement Electric Toothbrush Heads, 5 Count, Packaging may Vary"
                price={22.49}
                image="https://m.media-amazon.com/images/I/81Xpcn98s4L._SL1500_.jpg"
                rating={4}
              />
              <Product
                id="122337"
                title="The lean startup"
                price={99.99}
                image="https://images-eu.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                rating={5}
              />
            </div>

            <div className="home_row">
              <Product
                id="588558"
                title="Sony SEL2470GM E-Mount Camera Lens: FE 24-70 mm F2.8 G Master Full Frame Standard Zoom Lens"
                price={(1, 998.0)}
                image="https://m.media-amazon.com/images/I/71-MYlgl1zL._AC_SL1500_.jpg"
                rating={4}
              />
              <Product
                id="765423"
                title="Samsung Galaxy Tab S7 FE 2021 Android Tablet 12.4” Screen"
                price={529.99}
                image="https://m.media-amazon.com/images/I/91pjZAMbEUS._AC_SL1500_.jpg"
                rating={4}
              />
              <Product
                id="875675"
                title="Samsung Galaxy Watch 4 Classic 42mm Smartwatch with ECG Monitor Tracker"
                price={349.79}
                image="https://m.media-amazon.com/images/I/71yNmp4OnXS._AC_SL1500_.jpg"
                rating={3}
              />
            </div>

            <div className="home_row">
              <Product
                id="176589"
                title="TCL 40-inch 1080p Smart LED Roku TV - 40S325, 2019 Model , Black"
                price={399.99}
                image="https://m.media-amazon.com/images/I/71MVe3Ym8yL._AC_SL1500_.jpg"
                rating={4}
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home
