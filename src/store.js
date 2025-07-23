import { configureStore } from "@reduxjs/toolkit";
import  todoReducer  from "./slice/todoSlice"; //引入後todoSlice.reducer需改成todoReducer
export const store = configureStore({
    reducer: { // 必要加入 reducer
        todo: todoReducer, // todo 是todoSlice.reducer的名稱而todoReducer名稱需要相同
      }
});
export default configureStore;
