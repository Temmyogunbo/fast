import React from "react";
import { Image } from "../image";
import fastLogo from "../../assets/fastlogo.png";
import styles from "./site-footer.module.css";
import { Link } from "react-router-dom";

export const SiteFooter = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-8 mb-4 mb-md-0">
        <Image imageSource={fastLogo} className="mt-3 mb-2" />
        <p>© 2019 Fast AF, Inc</p>
        <p>San Francisco, California</p>
      </div>
      <div className="col-md col-6">
        <h4>Company</h4>
        <ul className={`${styles["footer-links"]}`}>
          <li>
            <Link to="mailto:careers@fast.co">
              Careers <span className="badge badge-success">We Are Hiring</span>
            </Link>
          </li>
          <li>
            <Link to="https://fast.co/terms">Terms Of Service</Link>
          </li>
          <li>
            <Link to="https://fast.co/privacy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
      <div className="col-md col-6">
        <h4>Connect</h4>
      </div>
      <div className="col-md-4 col-12 col-sm-12 col-xs-12">
        <p>
          Subscribe to our weekly newletters to find about our special offer
        </p>
        <form className="form-inline">
          <input
            type="email"
            className="form-control mb-2 mr-sm-2"
            id="inlineFormInputName2"
            placeholder="Email address"
          />

          <button type="submit" className="btn btn-primary mb-2">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
);
