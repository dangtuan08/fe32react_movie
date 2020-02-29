import React, { Component } from "react";

export default class footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <h6>Get in touch</h6>
              <ul>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Give us feedback</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h6>About Movie star</h6>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Find us</a>
                </li>
                <li>
                  <a href="#">Schedule</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h6>Legal stuff</h6>
              <ul>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Cookie policy</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h6>Connect with us</h6>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true" /> Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true" /> Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus" aria-hidden="true" />{" "}
                    Google +
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__copyright">
            <p>
              2017 © Cybercine /{"{"}" "{"}"}
              <a href="https://www.klevermedia.co.uk">Web design by Tuan</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
