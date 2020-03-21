import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { userService, movieService } from "../../../Services/index";

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
        // type: "file",
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
      { title: "Ngày khởi chiếu", field: "ngayKhoiChieu", type: "datetime" },
      { title: "Đánh giá", field: "danhGia", type: "numeric" }
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

  function handleOnChange(event) {
    console.log(event.target.files[0]);
    return event.target.files[0];
  }
  useEffect(() => {
    // console.log("mounted");
    // console.log();
    let user = JSON.parse(localStorage.getItem("UserAdmin"));
    console.log(user.taiKhoan);

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
        onRowAdd: newData => {
          console.log(newData);

          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          });
        },

        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            console.log(newData);
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
        onRowDelete: oldData => {
          console.log(oldData);

          //   new Promise(resolve => {
          //     setTimeout(() => {
          //       resolve();
          //       setState(prevState => {
          //         const data = [...prevState.data];
          //         data.splice(data.indexOf(oldData), 1);
          //         return { ...prevState, data };
          //       });
          //     }, 600);
          //   })
        }
      }}
    />
  );
}
