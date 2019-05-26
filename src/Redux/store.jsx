// Store chính: Quản lý tất cả store con (Mỗi store con quản lý dữ liệu theo nghiệp vụ)
import { combineReducers } from "redux";
import gamePlayStoreReducer from "./Reducers/GamePlay.reducer"

const rootReducer = combineReducers({
  gamePlayStoreReducer: gamePlayStoreReducer
});

export default rootReducer;
