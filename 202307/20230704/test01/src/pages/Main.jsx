import { Component } from "react";
import {Mycom,Mycom2 }from "../Component/Mycom";
import Mycom3 from "../Component/Mycom3";
import {Newheader, Newdate,Newpooter,RealDate} from "../Component/cal"


export default class Main extends Component{
    render(){
        // 랜더 리턴해줄때 꼭 div나 hmtl 태그를 통해서 데이터를 넘겨줊 필요는 없다. 컴포넌트 선언만 해서 데이터만 넘겨주어도 된다. 아래와 같이 
        // <Mycom name="첫번쨰 컴포넌트" Cname="red"></Mycom>
        // <Mycom name="두번쨰 컴포넌트2"  Cname="blue"></Mycom>

        // <Mycom2></Mycom2>
        // <Mycom3></Mycom3>
        return(
            
            <>
            {/* <Mycom name="첫번쨰 컴포넌트" Cname="red"></Mycom>
            <Mycom name="두번쨰 컴포넌트2"  Cname="blue"></Mycom>

            <Mycom2></Mycom2> */}
            {/* <Mycom3 newnum={1}newnum2={1}newnum3={1}></Mycom3> */}

            메인페이지 <br/>

            <Newheader ></Newheader>
            <div className="row">
            <RealDate></RealDate>
            <RealDate></RealDate>
            <RealDate></RealDate>
            <RealDate></RealDate>
            <RealDate></RealDate>
            <RealDate></RealDate>
            <RealDate num="1" color="blue"></RealDate>
            </div>
           
            <Newdate tmp="2"></Newdate> 
            <Newdate tmp="9"></Newdate> 
            <Newdate tmp="16"></Newdate> 
            <Newdate tmp="23"></Newdate> 
            <Newdate tmp="30"></Newdate> 

            <Newpooter></Newpooter>
            </>
        )
    }
}