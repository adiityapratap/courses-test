import React, { PureComponent } from "react";
import { GoogleLogin } from "react-google-login";
import { setObjectToLocal } from "../utils";
import { clientId } from "../constants";

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

    setObjectToLocal("session", session);
    setTimeout(() => {
      this.setState({
        loading: false
      });
      this.props.history.push("/");
    }, 1000);
  };

  onFailure = error => {
    console.log(error, "error");
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
                <h2 className="loginLogo">Learning Center
                </h2>
                <GoogleLogin
                  style={{ alignSelf: "center" }}
                  clientId={clientId}
                  onSuccess={this.onSuccess}
                  onFailure={this.onFailure}
                  buttonText={
                    loading ? (
                      "Logging in..."
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
