import React, { Component } from "react";

export default class Cinemas extends Component {
  render() {
    return (
      <section className="cinema">
        <div className="col-xs-12" id="homeCinemaComplex" />
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12">
              <ul className="nav nav-tabs" id="cinemaTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="cgv-tab"
                    data-toggle="tab"
                    href="#cgv"
                    role="tab"
                    aria-controls="cgv"
                    aria-selected="true"
                  >
                    <img
                      className="rounded-circle"
                      src="./img/cgvlogo.png"
                      alt="cgvlogo"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="bhd-tab"
                    data-toggle="tab"
                    href="#bhd"
                    role="tab"
                    aria-controls="bhd"
                    aria-selected="false"
                  >
                    <img
                      className="rounded-circle"
                      src="./img/bhd.png"
                      alt="bhdlogo"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="galaxy-tab"
                    data-toggle="tab"
                    href="#galaxy"
                    role="tab"
                    aria-controls="galaxy"
                    aria-selected="false"
                  >
                    <img
                      className="rounded-circle"
                      src="./img/galaxycine.png"
                      alt="galaxycinelogo"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="galaxy-tab"
                    data-toggle="tab"
                    href="#galaxy"
                    role="tab"
                    aria-controls="galaxy"
                    aria-selected="false"
                  >
                    <img
                      className="rounded-circle"
                      src="./img/galaxycine.png"
                      alt="galaxycinelogo"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="galaxy-tab"
                    data-toggle="tab"
                    href="#galaxy"
                    role="tab"
                    aria-controls="galaxy"
                    aria-selected="false"
                  >
                    <img
                      className="rounded-circle"
                      src="./img/galaxycine.png"
                      alt="galaxycinelogo"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="galaxy-tab"
                    data-toggle="tab"
                    href="#galaxy"
                    role="tab"
                    aria-controls="galaxy"
                    aria-selected="false"
                  >
                    <img
                      className="rounded-circle"
                      src="./img/galaxycine.png"
                      alt="galaxycinelogo"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12">
              <div className="tab-content" id="myCinemaTabContent">
                <div
                  className="tab-pane fade show active"
                  id="cgv"
                  role="tabpanel"
                  aria-labelledby="cgv-tab"
                >
                  <div className="row">
                    <div className="col-sm-5 overflow-400 listTheaters">
                      <ul className="nav nav-tabs" id="ListCine" role="tablist">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="cgvNguyenXi-tab"
                            data-toggle="tab"
                            href="#cgvNguyenXi"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                          >
                            <div className="cgv-item pt-3 d-flex flex-row ">
                              <img
                                className="cinema-logo pr-2"
                                src="./img/cgv-aeon-binh-tan.jpg"
                                alt="cgv-aeon-binh-tan"
                              />
                              <div className="cinema-info">
                                <p>
                                  <span>CGV</span> - Saigonres Nguyễn Xí
                                </p>
                                <span className="cinema-address">
                                  Tầng 4-5, Saigonres plaza Lorem ipsum dolor
                                  sit amet, consectetur adipisicing elit.
                                  Perspiciatis unde blanditiis in reprehenderit
                                  dolorum aut amet officia nisi sapiente ullam.
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-7 overflow-400">
                      <div className="tab-content" id="myListCineContent">
                        <div
                          className="tab-pane fade show active"
                          id="cgvNguyenXi"
                          role="tabpanel"
                          aria-labelledby="cgvNguyenXi--tab"
                        >
                          <div className="wrapMovie">
                            <div
                              className="movie-info  d-flex flex-row pt-3"
                              data-toggle="collapse"
                              data-target="#demo"
                            >
                              <img
                                className="pr-2"
                                src="./img/tro-choi-ky-ao.jpg"
                                alt="tro-choi-ky-ao.jpg"
                              />
                              <div className="wrapInfo">
                                <p>
                                  <span className="ageType">C13</span>
                                  <span className="movieTitle">
                                    Trò Chơi Kỳ Ảo: Thăng Cấp - Jumanji: The
                                    Next Level
                                  </span>
                                </p>
                                <p className="movie-total-time">
                                  123 phút - TIX 8.3 - IMDb 0
                                </p>
                              </div>
                            </div>
                            <div
                              id="demo"
                              className="listTime pt-2 collapse show"
                            >
                              <p className="s-version">2D Digital</p>
                              <button
                                type="button"
                                className="btn btn-outline-secondary mr-2"
                              >
                                14:45
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary mr-2"
                              >
                                18:30
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary mr-2"
                              >
                                20:30
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary mr-2"
                              >
                                24:45
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary mr-2"
                              >
                                14:45
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary mr-2"
                              >
                                18:30
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary mr-2"
                              >
                                20:30
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary mr-2"
                              >
                                24:45
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary mr-2"
                              >
                                14:45
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary mr-2"
                              >
                                18:30
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary mr-2"
                              >
                                20:30
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary mr-2"
                              >
                                24:45
                              </button>
                            </div>
                            <div
                              className="movie-info  d-flex flex-row pt-3"
                              data-toggle="collapse"
                              data-target="#demo1"
                            >
                              <img
                                className="pr-2"
                                src="./img/tro-choi-ky-ao.jpg"
                                alt="tro-choi-ky-ao.jpg"
                              />
                              <div className="wrapInfo">
                                <p>
                                  <span className="ageType">C13</span>
                                  <span className="movieTitle">
                                    Trò Chơi Kỳ Ảo: Thăng Cấp - Jumanji: The
                                    Next Level
                                  </span>
                                </p>
                                <p className="movie-total-time">
                                  123 phút - TIX 8.3 - IMDb 0
                                </p>
                              </div>
                            </div>
                            <div
                              id="demo1"
                              className="listTime pt-2 collapse show"
                            >
                              <p className="s-version">2D Digital</p>
                              <button
                                type="button"
                                className="btn btn-outline-secondary mr-2"
                              >
                                14:45
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary mr-2"
                              >
                                18:30
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary mr-2"
                              >
                                20:30
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary mr-2"
                              >
                                24:45
                              </button>
                            </div>
                            {/* test */}
                            <div
                              className="movie-info  d-flex flex-row pt-3"
                              data-toggle="collapse"
                              data-target="#demo1"
                            >
                              <img
                                className="pr-2"
                                src="./img/tro-choi-ky-ao.jpg"
                                alt="tro-choi-ky-ao.jpg"
                              />
                              <div className="wrapInfo">
                                <p>
                                  <span className="ageType">C13</span>
                                  <span className="movieTitle">
                                    Trò Chơi Kỳ Ảo: Thăng Cấp - Jumanji: The
                                    Next Level
                                  </span>
                                </p>
                                <p className="movie-total-time">
                                  123 phút - TIX 8.3 - IMDb 0
                                </p>
                              </div>
                            </div>
                            <div
                              id="demo1"
                              className="listTime pt-2 collapse show"
                            >
                              <p className="s-version">2D Digital</p>
                              <button
                                type="button"
                                className="btn btn-outline-secondary mr-2"
                              >
                                14:45
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary mr-2"
                              >
                                18:30
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary mr-2"
                              >
                                20:30
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary mr-2"
                              >
                                24:45
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade show "
                  id="bhd"
                  role="tabpanel"
                  aria-labelledby="bhd-tab"
                >
                  bhd
                </div>
                <div
                  className="tab-pane fade show "
                  id="galaxy"
                  role="tabpanel"
                  aria-labelledby="galaxy-tab"
                >
                  galaxy
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12" id="homeCinemaComplex" />
      </section>
    );
  }
}
