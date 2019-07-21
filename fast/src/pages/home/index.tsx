import React from "react";
import { ConnectedSignupForm } from "../../components/Form";
import { Image } from "../../components/image";
import womanIcon from "../../assets/woman.svg";
import styles from './home.module.css';

export const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-4 mb-3 col-xg-4 col-xl-6">
          <h1 className={`${styles["one-click"]}`}>
            One - click
            <br /> Signup Login & pay
          </h1>
          <h3 className={`${styles["everywhere-fast"]}`}>Everywhere with a Fast button</h3>

          <ConnectedSignupForm />
        </div>
        <div className="col align-items-center">
          <Image imageSource={womanIcon} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
