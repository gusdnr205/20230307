// reducer 함수를 여기에 만든다. 그리고 내보낸다.

import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from"axios";
// createSlice메서드를 사용해서 create 함수를 가지고이쓴 객체를 만듦
export const countSlice = createSlice({
    name:"count" // slice의 이름이다?ㅇㅇ slice의 구분이름
    ,//초기값
    initialState:{num:0},
    reducers : {
        add : (state) =>{
            // 이전 상태가 매개변수로 들어온다.
            state.num += 1;
        },
        remove : (state)=>{
            state.num -=1;
        }
    }
});
// api 따로없으니까 날씨 api 썻던것 가져오자.
export const temp = createAsyncThunk("/temp",async()=>{
    // axios
    const resp=await axios.get(''); // api요청 주소
    const {data} =resp;
    console.log(data);
    return data;
});

export const countSlice2 = createSlice({
    name:"count2" // slice의 이름이다?ㅇㅇ slice의 구분이름
    ,//초기값
    initialState:{num:0,value:"나 상태"},
    // 동기적인 작업을 처리하고
    reducers : {
        add2 : (state) =>{
            // 이전 상태가 매개변수로 들어온다.
            state.num =state.num+1;
        },
        remove2 : (state)=>{
            state.num =state.num-1;
        }
    }
    //비동기 처리는 여기에 작성해라라고 만들어짐
    //콜백으로 reducer가 들어옴 
    ,extraReducers:(builder)=>{
        // extraReducers의 builder매개변수로받고 케이스를 추가하는데
        // 상태의 케이스 추가 로딩중,완려,실패 
        // 상태 케이스를 등록해준다. promise 반환한다.
        // builder.addCase() 케이스 추가
        // 로딩중 케이스
        builder.addCase(temp.pending, (state,action)=>{
            state.value="로딩중임"
        })
        // 완료되었을때 케이스
        builder.addCase(temp.fulfilled,(state,action)=>{
            state.value="완료"
        })
        // 실패했을때 케이스
        builder.addCase(temp.rejected,(state,action)=>{
            state.value="실패";
        })
    }
});

export const loginslice= createSlice(
    {
        name:"login",
        initialState:{
            loginstate:""
        },
        reducers :{
            login: (state)=>{
                state.loginstate="로그인";
            },
            logout:(state)=>{
                state.loginstate="로그아웃";

            }
        }
    }
)
export const boardslice=createSlice(
    {
        name:"board",
        initialState:{
            content:[],
            currentId: 0
        },
        reducers:{
            createcontent:(state,action)=>{
                console.log(action)
                const newitem={
                    id: state.currentId,
                    ...action.payload
                }
                state.content.push(newitem)
                state.currentId++; 
            },
            removecontent:(state,action)=>{
                console.log("removecontent작동함");
                console.log(action);
                state.content.splice(action.payload,1);
            },
            editcontent: (state, action) => {
                const {index,content,title } = action.payload;
                console.log("editcontent",index,content,title );
                // Replace the post at the specified index with the updatedData
                state.content[index] = {title:title,
                    content:content
                };
              },

        }
    }
)

// 액션함수를 내보내서 dispatch로 전달해서 액션발생시킬거임
export const {createcontent,removecontent,editcontent} =boardslice.actions
export const {login,logout} = loginslice.actions
export const {add,remove} = countSlice.actions
export const {add2,remove2} = countSlice2.actions