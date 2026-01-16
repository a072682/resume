import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// createSlice為基本引入
// createAsyncThunk為使用異布函式所使用(如async)
export const dataSlice = createSlice({ // todoSlice可任意取名
    name:"data", //此名稱為連接main.jsx的名稱
    initialState:{  //初始資料狀態
       data:"React&Vite",
    },
    reducers:{  //更新資料函示或狀態
        dataUpLoad(state,action){ // updataTodo為自由命名
            state.data = action.payload;
        },
    }
})
export const { dataUpLoad, } = dataSlice.actions; // updataTodo需要在此引出這樣外部檔案才可以利用
// todoSlice和上方todoSlice名稱需相同
export default dataSlice.reducer; // 和todoSlice名稱需要相同
