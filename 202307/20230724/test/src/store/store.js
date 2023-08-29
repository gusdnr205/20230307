import {configureStore} from "@reduxjs/toolkit"; // createstore랑 비슷하다 다만 기능추가
import { countSlice,countSlice2,loginslice,boardslice } from "../features/countSlice";
// 저장소 생성
export const store = configureStore(
    {
        reducer: {
            // 가게만들면서 메뉴판 전달
            count : countSlice.reducer,
            count2:countSlice2.reducer,
            login:loginslice.reducer,
            board:boardslice.reducer

        }
    }
)

// 매개변수로 객체들어감