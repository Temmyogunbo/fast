import React from "react";
import { ConnectedSignupForm } from "../../components/Form";
import { Image } from "../../components/image";
import womanIcon from "../../assets/woman.svg";
import styles from "./home.module.css";

export const HomePage = () => {
  return (
    <div
      className="container"
      style={{ margin: "46px 0 46px" }}
    >
      <div className="row">
        <div className="col-md-6">
          <h1 className={` text-center text-md-left ${styles["one-click"]}`}>
            One-click
            <br /> Signup, Login and pay
          </h1>
          <h3
            className={`text-center text-md-left mt-3 ${
              styles["everywhere-fast"]
            }`}
          >
            Everywhere with a Fast button
          </h3>

          <ConnectedSignupForm />
        </div>
        <div className="col-md-6 align-items-center">
          <Image
            imageSource={womanIcon}
            alt="Fast one touch"
            style={{ maxWidth: "100%", maxHeight: "100%", marginTop: '3rem' }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
