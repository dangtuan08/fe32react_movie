import * as ActionType from "../Store/Type/ActionTypeMovie";

const initialState = {
  listSeat: [],
  bookingInfo: {}
};

function timViTri(mang, dieuKien) {
  let index = mang.findIndex(item => item.maGhe === dieuKien);
  return index;
}

const BookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GHE_DANG_CHON:
      //   console.log(action);
      if (state.listSeat.length > 0) {
        let viTri = timViTri(state.listSeat, action.value.maGhe);
        if (viTri === -1) {
          state.listSeat = [...state.listSeat, action.value];
        } else {
          state.listSeat.splice(viTri, 1);
          state.listSeat = [...state.listSeat];
        }
      } else {
        state.listSeat = [...state.listSeat, action.value];
      }

      return { ...state };
    default:
      return state;
  }
};

export default BookingReducer;
