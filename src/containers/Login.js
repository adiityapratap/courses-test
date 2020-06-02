import React, { PureComponent } from "react";
import { GoogleLogin } from "react-google-login";
//import { toast } from "react-toastify";
//import { setObjectToLocal } from "../utils";
import { clientId, imageData } from "../constants";
//import Loader from "react-loader-spinner";
//import "./Login.css";

export default class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  onSuccess = response => {
    const { profileObj } = response;
    this.setState({
      loading: true
    });
    const {
      email,
      familyName,
      givenName,
      googleId,
      imageUrl = ""
    } = profileObj;
    const session = {
      email,
      lastName: familyName,
      firstName: givenName,
      provider: "google",
      providerId: googleId,
      imageUrl
    };

    //setObjectToLocal("session", session);
    /* toast.success(`Login Successful. Welcome ${givenName}`, {
      position: toast.POSITION.TOP_RIGHT
    }); */
    setTimeout(() => {
      this.setState({
        loading: false
      });
      //this.props.history.push("/userprofile");
    }, 1000);
  };

  onFailure = error => {
    /* toast.error(error, {
      position: toast.POSITION.TOP_RIGHT
    }); */
  };

  onLogin = () => {
    this.socialButton.signIn();
  };

  render() {
    const { loading } = this.state;

    return (
      <div>
        <div className="content">
          <div className="width-50-1">
            <div className="bg-auth">
              <p style={{ display: "none" }}>Hello</p>
            </div>
          </div>
          <div className="width-50-2">
            <div className="login">
              <div style={{ textAlign: "center" }}>
                <h2 className="loginLogo">
                  <i className="fa fa-instagram" /> | Learning Center
                </h2>
                <GoogleLogin
                  style={{ alignSelf: "center" }}
                  clientId={clientId}
                  onSuccess={this.onSuccess}
                  onFailure={this.onFailure}
                  icon={loading ? false : true}
                  buttonText={
                    loading ? (
                      /* <Loader
                        type="ThreeDots"
                        color="#CCC"
                        height={40}
                        width={40}
                      /> */
                      "Loading..."
                    ) : (
                      "Login With Google"
                    )
                  }
                  disabled={loading}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
