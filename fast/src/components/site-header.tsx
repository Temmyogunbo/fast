import React from "react";
import { Image } from "./image";
import fastLogo from "../assets/fastlogo.png";
import { Link } from "react-router-dom";
import hamburger from "../assets/hamburger.svg";
import styles from "./site-header.module.css";
import closeIcon from "../assets/close-icon.svg";

export class SiteHeader extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-md  navbar-light"
        style={{ backgroundColor: "#88D20F" }}
      >
        <div className="container">
          <Link className="navbar-brand" to="#">
            <Image imageSource={fastLogo} />
          </Link>

          <div
            className={`collapse ${styles["list-mobile"]}`}
            id="navbarToggleExternalContent"
          >
            <form className="form-inline my-2 my-lg-0 d-flex justify-content-between">
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Get Started
              </button>
              <Image
                className="navbar-toggler"
                data-toggle="collapse"
                aria-expanded="true"
                data-target="#navbarToggleExternalContent"
                imageSource={closeIcon}
              />
            </form>
            <ul className="list-group">
              <li className={`list-group-item ${styles["list-group-item"]}`}>
                <Link to="/">Home</Link>
              </li>

              <li className={`list-group-item ${styles["list-group-item"]}`}>
                <Link
                  className="dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Products
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="#">
                    Github
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Twitter
                  </Link>
                </div>{" "}
              </li>
              <li className={`list-group-item ${styles["list-group-item"]}`}>
                <Link to="/">About</Link>
              </li>
              <li className={`list-group-item ${styles["list-group-item"]}`}>
                <Link to="/">Developers</Link>
              </li>
              <li className={`list-group-item ${styles["list-group-item"]}`}>
                <Link to="/">Help Centers</Link>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav mr-auto align-items-center d-flex justify-content-around"
              style={{ width: "100%" }}
            >
              <li className="nav-item active">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Products
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="#">
                    Github
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Twitter
                  </Link>
                </div>
              </li>
              <li className="nav-item ">
                <Link to="/">About</Link>
              </li>
              <li className="nav-item ">
                <Link to="/">Developers</Link>
              </li>
              <li className="nav-item ">
                <Link to="/">Help Centers</Link>
              </li>
            </ul>
          </div>
          <form className="form-inline my-2 my-lg-0">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Get Started
            </button>
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Image imageSource={hamburger} />
          </button>
        </div>
      </nav>
    );
  }
}

// interface IListItemsProps extends React.HTMLProps<any> {
//   items: any[];
// }
// export const ListItems: React.SFC<IListItemsProps> = ({items, ...rest}) => {
//   return items.map((item: string) => (<li {...rest}>{item}</li>))
// }
