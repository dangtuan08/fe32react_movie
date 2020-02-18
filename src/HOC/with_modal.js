import React, { Component } from "react";

export default function WithModal(Component) {
  return function() {
    return (
      <div id="modalLogin" className="modal fade modalLogin">
        <div className="modal-dialog modal-dialog-centered modal-login">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Member Login</h4>
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
                <Component></Component>
            </div>
            <div className="modal-footer">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
