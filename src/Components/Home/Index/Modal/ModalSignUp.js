import React, { Component } from "react";

export default class ModalSignUp extends Component {
  render() {
    return (
      <div id="modalSignUp" className="modal fade modalLogin">
        <div className="modal-dialog modal-dialog-centered modal-login">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Đăng ký</h4>
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
                  <i className="fa fa-info" />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Họ tên"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <i className="fa fa-mobile-alt" />
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Số điện thoại"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <i className="fa fa-envelope" />
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-primary btn-block btn-lg"
                    defaultValue="Đăng ký"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
