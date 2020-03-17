import Home from "./Screens/Home/Index";
import DetailMovie from "./Screens/Home/Detail-movie/";
import BookingTix from "./Screens/Home/Booking-Tix/";
import DetailAccount from "./Screens/Home/Detail-Account";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/detail-movie/:id",
    exact: false,
    component: DetailMovie
  },
  {
    path: "/booking-tix/:id",
    exact: false,
    component: BookingTix
  },
  {
    path: "/chi-tiet-tai-khoan",
    exact: false,
    component: DetailAccount
  }
];

// const routesAdmin = [
//   {
//     path: "/dash-board",
//     exact: false,
//     component: DashBoard
//   },
//   {
//     path: "/them-nguoi-dung",
//     exact: false,
//     component: ThemNguoiDung
//   }
// ];

export { routesHome };
