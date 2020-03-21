import Home from "./Screens/Home/Index";
import DetailMovie from "./Screens/Home/Detail-movie/";
import BookingTix from "./Screens/Home/Booking-Tix/";
import DetailAccount from "./Screens/Home/Detail-Account";
import LoginAdmin from "./Screens/Admin/LoginAdmin";
import MovieManagement from "./Screens/Admin/MovieManagement/MovieManagement";
import UserManagement from "./Screens/Admin/UserManagement/UserManagement";
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

const routesAdmin = [
  {
    path: "/dash-board",
    exact: false,
    component: LoginAdmin
  },
  {
    path: "/quan-ly-phim",
    exact: false,
    component: MovieManagement
  },
  {
    path: "/quan-ly-user",
    exact: false,
    component: UserManagement
  }
];

export { routesHome, routesAdmin };
