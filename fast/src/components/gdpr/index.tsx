import React from "react";
import { Image } from "../image";
import gdprIcon from "../../assets/gdpr-icon.svg";
import sslIcon from "../../assets/ssl-icon.svg";
import secureIcon from "../../assets/secure-pay-icon.svg";
import oneTimePassIcon from "../../assets/one-time-pass-icon.svg";

export const GdprSection = () => (
  <div style={{ marginTop: "2rem" }}>
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            <div className="col-md col-3">
              <Image imageSource={gdprIcon} alt="gdpr" />
            </div>

            <div className="col-md col-3">
              <Image imageSource={sslIcon} alt="SSL encypted" />
            </div>
            <div className="col-md col-3">
              <Image imageSource={secureIcon} alt="secure payments" />
            </div>
            <div className="col-md col-3">
              <Image imageSource={oneTimePassIcon} alt="one time password" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
