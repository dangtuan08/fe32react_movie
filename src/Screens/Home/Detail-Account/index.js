import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { userService } from "./../../../Services/index";
import { ClipLoader, GridLoader } from "react-spinners";
import "./style.scss";
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icon';

export default function DetailAccount() {
  const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
    margin-top: 200px;
    margin-bottom: 500px;
    z-index: 9900;
  `;
  const [state, setState] = useState({
    columns: [
      { title: "Mã vé", field: "maVe" },
      { title: "Danh sách ghế", field: "danhSachGhe" },
      { title: "Ngày đặt", field: "ngayDat" },
      { title: "Tên phim", field: "tenPhim" },
      { title: "Giá vé", field: "giaVe", type: "numeric" },
      { title: "Thời lượng", field: "thoiLuongPhim", type: "numeric" }
    ],
    data: [
      // { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      // {
      //   name: "Zerya Betül",
      //   surname: "Baran",
      //   birthYear: 2017,
      //   birthCity: 34
      // }
    ]
  });
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    // console.log("mounted");
    // console.log();
    window.scrollTo(0, 0);
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user.taiKhoan);

    userService
      .infoUserAxios({
        taiKhoan: user.taiKhoan
      })
      .then(result => {
        console.log(result.data.thongTinDatVe);
        let { thongTinDatVe } = result.data;
        let dataTable = [];
        thongTinDatVe.map((item, index) => {
          let dsGhe = "";
          item.danhSachGhe.map((ghe, index) => {
            dsGhe = dsGhe + "Ghe:" + ghe.tenGhe + " ";
          });
          let data = {
            danhSachGhe: dsGhe,
            maVe: item.maVe,
            ngayDat: item.ngayDat,
            tenPhim: item.tenPhim,
            giaVe: item.giaVe,
            thoiLuongPhim: item.thoiLuongPhim
          };
          // console.log(data);
          dataTable.push(data);
        });
        console.log(dataTable);

        // let chiTiet = {
        //   danhSachGhe: "",
        //   maVe: ,
        //   ngayDat: "",
        //   tenPhim: "",
        //   giaVe: ,
        //   thoiLuongPhim:
        // };
        setLoading((loading = false));
        setState(prevState => {
          const data = dataTable;
          return { ...prevState, data };
          // console.log(data);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <div className="sweet-loading">
        <GridLoader
          css={override}
          size={30}
          //size={"150px"} this also works
          color={"#123abc"}
          loading={loading}
        />
      </div>
    );
  } else
    return (
      <div className="table-list-tix">
        <MaterialTable
          title="Danh sách vé đã đặt"
          columns={state.columns}
          data={state.data}
          options={{
            rowStyle: {
              backgroundColor: "#EEE"
            },
            headerStyle: {
              backgroundColor: "#01579b",
              color: "#FFF"
            }
          }}
        />
      </div>
    );
}
