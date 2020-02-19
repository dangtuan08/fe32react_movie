import React, { Component } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { connect } from "react-redux";
import * as action from "../../../../Store/Actions/User";
import { signupUserSchema } from "../../../../Services/User";
import { userService } from "../../../../Services";
import Swal from "sweetalert2";

export default class ModalSignUp extends Component {
  _handleSubmit = value => {
    console.log(value);

    userService
      .signUpAxios(value)
      .then(result => {
        console.log(result.data);
        Swal.fire({
          icon: "success",
          title: "Đăng nhập thành công",
          text: ""
        });
      })
      .catch(err => {
        Swal.fire({
          icon: "error",
          title: err.response.data,
          text: ""
        });
      });
  };
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
              <Formik
                initialValues={{
                  taiKhoan: "",
                  matKhau: "",
                  email: "",
                  soDt: "",
                  maNhom: "GP01",
                  maLoaiNguoiDung: "KhachHang",
                  hoTen: ""
                }}
                validationSchema={signupUserSchema}
                onSubmit={value => {
                  this._handleSubmit(value);
                }}
                render={formikProps => (
                  <Form>
                    <div className="form-group">
                      <i className="fa fa-user" />
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="Tên đăng nhập"
                        // required="required"
                        name="taiKhoan"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="taiKhoan">
                        {msg => <div className="alert alert-danger">{msg}</div>}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <i className="fa fa-lock" />
                      <Field
                        type="password"
                        className="form-control"
                        placeholder="Mật khẩu"
                        // required="required"
                        name="matKhau"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="matKhau">
                        {msg => <div className="alert alert-danger">{msg}</div>}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <i className="fa fa-info" />
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="Họ tên"
                        // required="required"
                        name="hoTen"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="hoTen">
                        {msg => <div className="alert alert-danger">{msg}</div>}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <i className="fa fa-phone"></i>
                      <Field
                        type="tel"
                        className="form-control"
                        placeholder="Số điện thoại"
                        // required="required"
                        name="soDt"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="soDt">
                        {msg => <div className="alert alert-danger">{msg}</div>}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <i className="fa fa-envelope" />
                      <Field
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        // required="required"
                        name="email"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="email">
                        {msg => <div className="alert alert-danger">{msg}</div>}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        className="btn btn-primary btn-block btn-lg"
                        defaultValue="Đăng ký"
                      />
                    </div>
                  </Form>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
