import React, { Component } from "react";

export default class ModalLogin extends Component {
  render() {
    return (
      <div id="modalLogin" className="modal fade modalLogin">
        <div className="modal-dialog modal-dialog-centered modal-login">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Đăng nhập</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <i className="fa fa-user" />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <i className="fa fa-lock" />
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-primary btn-block btn-lg"
                    defaultValue="Login"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <a href="#">Quên mật khẩu?</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
