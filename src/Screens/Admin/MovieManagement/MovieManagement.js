import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { userService, movieService } from "../../../Services/index";
import MovieService from "../../../Services/Movie";

// import { AccessAlarm, ThreeDRotation } from '@material-ui/icon';

export default function MovieManagement() {
  const [state, setState] = useState({
    columns: [
      { title: "Mã Phim", field: "maPhim" },
      { title: "Tên phim", field: "tenPhim" },
      { title: "Bí danh", field: "biDanh" },
      {
        title: "Trailer",
        field: "trailer",
        cellStyle: {
          width: 50,
          maxWidth: 50,
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis"
        }
      },
      {
        title: "Hình ảnh",
        field: "hinhAnh",
        type: "file",
        editComponent: props => {
          return (
            // <input type="text" value={props.value} onChange={props.onChange} />
            // <input type="file" onChange={handleOnChange} />
            <input
              type="file"
              onChange={props.onChange}
              value={handleOnChange}
            />
          );
        },
        render: rowData => <img src={rowData.hinhAnh} style={{ width: 50 }} />
      },
      { title: "Mô tả", field: "moTa" },
      { title: "Mã nhóm", field: "maNhom" },
      { title: "Ngày khởi chiếu", field: "ngayKhoiChieu", type: "date" },
      { title: "Đánh giá", field: "danhGia", type: "numeric" }
    ],
    data: []
  });
  function getData() {
    movieService
      .getListMovieAxios({})
      .then(result => {
        console.log(result.data);

        setState(prevState => {
          const data = result.data;
          return { ...prevState, data };
          // console.log(data);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleOnChange(event) {
    console.log(event.target.files[0]);
    return event.target.files[0];
  }
  useEffect(() => {
    // console.log("mounted");
    // console.log();
    let user = JSON.parse(localStorage.getItem("UserAdmin"));
    console.log(user.taiKhoan);

    getData();
  }, []);

  return (
    // <div>trang quan ly phim</div>
    <MaterialTable
      title="Danh sách Phim"
      columns={state.columns}
      data={state.data}
      options={{
        actionsColumnIndex: -1,
        addRowPosition: "first",
        rowStyle: {
          backgroundColor: "#EEE"
        },
        headerStyle: {
          backgroundColor: "#01579b",
          color: "#FFF"
        }
      }}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              console.log(newData.hinhAnh);
              let userAD = JSON.parse(localStorage.getItem("UserAdmin"));
              let movie = {
                maPhim: "1234",
                tenPhim: newData.tenPhim,
                biDanh: newData.biDanh,
                trailer: newData.trailer,
                hinhAnh: newData.hinhAnh,
                moTa: newData.moTa,
                maNhom: newData.maNhom,
                ngayKhoiChieu: newData.ngayKhoiChieu,
                danhGia: newData.danhGia
              };
              movieService
                .AddNewMovieAxios(movie, userAD.accessToken)
                .then(result => {
                  alert("Them thanh cong");
                  getData();
                })
                .catch(err => {
                  console.log(err.response.data);
                });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              console.log(oldData);
              let userAD = JSON.parse(localStorage.getItem("UserAdmin"));
              movieService
                .DeleteMovieAxios(oldData.maPhim, userAD.accessToken)
                .then(res => {
                  getData();
                  console.log(res.data);
                  alert(res.data);
                })
                .catch(er => {
                  console.log(er);
                });
              // setState(prevState => {
              //   const data = [...prevState.data];
              //   data.splice(data.indexOf(oldData), 1);
              //   return { ...prevState, data };
              // });
            }, 600);
          })
      }}
    />
  );
}
