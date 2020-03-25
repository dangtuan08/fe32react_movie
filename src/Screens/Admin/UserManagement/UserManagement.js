import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { userService, movieService } from "../../../Services/index";

export default function UserManagement() {
  const [state, setState] = useState({
    columns: [
      { title: "Tài khoản", field: "taiKhoan" },
      { title: "Họ tên", field: "hoTen" },
      { title: "Email", field: "email" },
      { title: "Điện thoại", field: "soDt" },
      { title: "Mật khẩu", field: "matKhau" },
      {
        title: "Loại người dùng",
        field: "maLoaiNguoiDung",
        lookup: { KhachHang: "Khách hàng", QuanTri: "Quản trị" }
      }
    ],
    data: []
  });

  function getData() {
    userService
      .getListUserAxios({})
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
      title="Danh sách người dùng"
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
            let user = {
              taiKhoan: newData.taiKhoan,
              hoTen: newData.hoTen,
              email: newData.email,
              soDt: newData.soDt,
              matKhau: newData.matKhau,
              maLoaiNguoiDung: newData.maLoaiNguoiDung
            };
            let userAD = JSON.parse(localStorage.getItem("UserAdmin"));
            setTimeout(() => {
              resolve();
              userService
                .AddNewUserAxios(user, userAD.accessToken)
                .then(result => {
                  getData();
                })
                .catch(({...error}) => {
                  console.log( {...error} )

                });
              // setState(prevState => {
              //   const data = [...prevState.data];
              //   data.push(newData);
              //   return { ...prevState, data };
              // });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            let userAD = JSON.parse(localStorage.getItem("UserAdmin"));
            console.log(newData);
            let user = {
              taiKhoan: newData.taiKhoan,
              hoTen: newData.hoTen,
              email: newData.email,
              soDt: newData.soDt,
              matKhau: newData.matKhau,
              maLoaiNguoiDung: newData.maLoaiNguoiDung
            };
            console.log(user);

            setTimeout(() => {
              resolve();

              if (oldData) {
                userService
                  .UpdateUserAxios(user, userAD.accessToken)
                  .then(result => {
                    getData();
                  })
                  .catch(({...error}) => {
                    console.log( {...error} )

                  });
                // setState(prevState => {
                //   const data = [...prevState.data];
                //   data[data.indexOf(oldData)] = newData;
                //   return { ...prevState, data };
                // });
              }
            }, 600);
          }),

        onRowDelete: oldData =>
          new Promise(resolve => {
            console.log(oldData);
            console.log(state.data);
            setTimeout(() => {
              resolve();
              // setState(prevState => {
              //   const data = [...prevState.data];
              //   data.splice(data.indexOf(oldData), 1);
              //   return { ...prevState, data };
              // });
              let userAD = JSON.parse(localStorage.getItem("UserAdmin"));
              console.log(oldData);
              userService
                .DeleteUserAxios(oldData.taiKhoan, userAD.accessToken)
                .then(result => {
                  console.log(result);
                  alert("đã xoá");
                  getData();
                })
                .catch(err => {
                  // console.log(err.response.data);
                  alert(err.response.data);
                });
            }, 600);
          })
      }}
    />
  );
}
