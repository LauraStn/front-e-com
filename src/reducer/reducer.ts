// import { actionProps, stateProps } from "@/utils/types";


// export const actions = {
//   INC_QUANTITY: "INC_QUANTITY",
//   FETCH_SUCCESS: "fetch_success",
// };

// export const reducer = (state: stateProps, action: actionProps) => {
//   switch (action.type) {
//     case actions.FETCH_SUCCESS:
//       return { ...state, product: action.payload };
//       break;
//     case actions.INC_QUANTITY:
//       return {
//         ...state,
//         quantity:
//           action.payload === "increment"
//             ? state.quantity + 1
//             : Math.max(1, state.quantity - 1),
//       };

//     default:
//       return state;
//   }
// };
