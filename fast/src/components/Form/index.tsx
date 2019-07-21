import React from "react";
import { Image } from "../image";
import fastLogo from "../../assets/fastlogo.png";
import messageIcon from "../../assets/message-icon.svg";
import { connect } from "react-redux";
import { signupWithoutPassReq } from "../../redux/auth/actions";
import styles from  './form.module.css';
interface SignupFormProps {
  signupWithoutPassReq: (payload: { email: string }) => void;
}

interface SignupFormState {
  email: String;
  [name: string]: any;
}
export class SignupForm extends React.Component<
  SignupFormProps,
  SignupFormState
> {
  state = {
    email: ""
  };

  handleSubmit = (event: any) => {
    event.preventDefault();

    this.props.signupWithoutPassReq(this.state);
  };

  handleChange = (event: any) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <div className="form-group"> */}
        {/* <div className="input-group-prepend">
            <i className="far fa-envelope" />
          </div>
          <input
            type="email"
            name="email"
            className="form-control"
            id="formGroupEmail"
            placeholder="Enter your email"
            onChange={this.handleChange}
          />
        </div> */}
        <div className="col-auto">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div
                className="input-group-text"
                style={{ backgroundColor: "transparent", border: '0 0 0 1px' }}
              >
                <Image imageSource={messageIcon} />
              </div>
            </div>
            <input
              type="email"
              name="email"
              className={`form-control ${styles["email-input"]}`}
              id="inlineFormInputGroup"
              onChange={this.handleChange}
              placeholder="Enter your email"
              
            />
          </div>
        </div>
        <div className="row" style={{ backgroundColor: "#88D20F" }}>
          <button
            className="col-8 btn btn-outline-success my-2 my-sm-0"
            type="submit"
            style={{ border: 0 }}
          >
            Sign up without password
            <Image className="col-5" imageSource={fastLogo} />
          </button>
        </div>
      </form>
    );
  }
}

export const ConnectedSignupForm = connect(
  null,
  { signupWithoutPassReq }
)(SignupForm);
