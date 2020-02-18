import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <>
        <form>
          <div className="form-group">
            <i className="fa fa-user" />
            <input
              type="text"
              className="form-control"
              placeholder="Tên đăng nhập"
              required="required"
            />
          </div>
          <div className="form-group">
            <i className="fa fa-lock" />
            <input
              type="password"
              className="form-control"
              placeholder="Mật khẩu"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary btn-block btn-lg"
              defaultValue="Đăng nhập"
            />
          </div>
        </form>
      </>
    );
  }
}
