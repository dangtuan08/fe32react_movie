import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../../Store/Actions/User";
import "./index.css";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: ""
    };
  }

  handleOnchange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSumit = e => {
    e.preventDefault();
    this.props.login(this.state, this.props.history);
  };

  componentDidMount(){
    if(localStorage.getItem("UserAdmin")){
      this.props.history.push("/quan-ly-user")
    }
  }
  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.handleSumit}>
          <div className="avatar">
            <img src="./img/avatar.png" alt="Avatar" />
          </div>
          <h2 className="text-center">Member Login</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="taiKhoan"
              onChange={this.handleOnchange}
              placeholder="Username"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="matKhau"
              placeholder="Password"
              required="required"
              onChange={this.handleOnchange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Sign in
            </button>
          </div>
          <div className="clearfix">
            <label className="pull-left checkbox-inline">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="pull-right">
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center small">
          Don't have an account? <a href="#">Sign up here!</a>
        </p>
      </div>

      // <div className="container">
      //   <div className="col-sm-6 mx-auto">
      //     <form onSubmit={this.handleSumit}>
      //       <div className="form-group">
      //         <label htmlFor="">Username</label>
      //         <input
      //           type="text"
      //           className="form-control"
      //           name="taiKhoan"
      //           onChange={this.handleOnchange}
      //         />
      //       </div>
      //       <div className="form-group">
      //         <label htmlFor="">Password</label>
      //         <input
      //           type="text"
      //           className="form-control"
      //           name="matKhau"
      //           onChange={this.handleOnchange}
      //         />
      //       </div>
      //       <button type="submit" className="btn btn-success">
      //         Login
      //       </button>
      //     </form>
      //   </div>
      // </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (user, history) => {
      dispatch(action.actLoginAdmin(user, history));
    }
  };
};

export default connect(null, mapDispatchToProps)(Admin);
