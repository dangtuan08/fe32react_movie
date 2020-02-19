import React, { Component } from "react";
import { Formik, Form, Field } from "formik";

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
              <Formik
                initialValues={{
                  taiKhoan: "",
                  matKhau: ""
                }}
                onSubmit={value => {
                  console.log(value);
                }}
                render={({ handleChange }) => {
                  <Form>
                    <div className="form-group">
                      <i className="fa fa-user" />
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="Tài khoản"
                        required="required"
                        name="taiKhoan"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <i className="fa fa-lock" />
                      <Field
                        type="password"
                        className="form-control"
                        placeholder="Mật khẩu"
                        required="required"
                        name="matKhau"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        className="btn btn-primary btn-block btn-lg"
                        defaultValue="Login"
                      />
                    </div>
                  </Form>;
                }}
              />
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



import React, { Component } from "react";
import { Form, Formik, Field } from "formik";

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
              <Formik
                initialValues={{
                  taiKhoan: "",
                  matKhau: ""
                }}
                onSubmit={value => {
                  console.log(value);
                }}
                render={formikProps => (
                  <Form>
                    <div className="form-group">
                      <i className="fa fa-user" />
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="Tài khoản"
                        required="required"
                        name="taiKhoan"
                        onChange={formikProps.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <i className="fa fa-lock" />
                      <Field
                        type="password"
                        className="form-control"
                        placeholder="Mật khẩu"
                        required="required"
                        name="matKhau"
                        onChange={formikProps.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        className="btn btn-primary btn-block btn-lg"
                        defaultValue="Login"
                      />
                    </div>
                  </Form>
                )}
              />
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


import React, { Component } from "react";
import { Form, Formik, Field } from "formik";

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
              <Formik
                initialValues={{
                  taiKhoan: "",
                  matKhau: ""
                }}
                onSubmit={value => {
                  console.log(value);
                }}
                render={({ handleChange }) => (
                  <Form>
                    <div className="form-group">
                      <i className="fa fa-user" />
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="Tài khoản"
                        required="required"
                        name="taiKhoan"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <i className="fa fa-lock" />
                      <Field
                        type="password"
                        className="form-control"
                        placeholder="Mật khẩu"
                        required="required"
                        name="matKhau"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        className="btn btn-primary btn-block btn-lg"
                        defaultValue="Login"
                      />
                    </div>
                  </Form>
                )}
              />
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
