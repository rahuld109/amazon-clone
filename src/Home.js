import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life Paperback"
            price={499}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51AffTW1D6L._SX324_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Wonderchef 1000-Watt Stand Mixer (Red)"
            price={19999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61CpbUwxvUL._SL1000_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="New Apple Watch SE (GPS, 44mm) - Gold Aluminium Case with Pink Sand Sport Band"
            price={32900}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81Mc%2BotzDfL._SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="
            Alexa See what Alexa can do
            All-new Echo Dot (4th Gen) | With improved bass and Alexa (Blue)"
            price={4499}
            rating={5}
            image="https://m.media-amazon.com/images/I/61MbLLagiVL._AC_UY218_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={45000}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            price={120000}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
