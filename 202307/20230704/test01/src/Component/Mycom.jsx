import { Component } from "react";

 class Mycom extends Component{
    // 컴포넌트의 구조는 같은데 내용이 다른경우
    // 재사용성이 용이해서 컴포넌트를 만든다고햇는데 
    // props 라는 값을 받아서 그려주면된다.
    constructor(props)
    {
        super(props)
        // super : 부모의 생성자 함수를 호출해줘야 this 사용할수있다. 
        //this
        this.state={
            num:0
       }
    }

    // 컴포넌트가 초기에 생성되면
    // consturctor -> render -> componentDidmount
    componentDidMount(){
        console.log("나 생성")
    }
    // 상태 변환 후 -> componentDidupdate
    componentDidUpdate(){
        console.log(this.props.name+"나 상태 변함")
    }
    render(){
        return(
            <div className={"com "+this.props.Cname}>
                 {this.props.name}
                <button onClick={()=>{
                    this.setState({...this.state,num:this.state.num+=1})
                    console.log(this.state.num);
                    }}>상태 변경</button>
            </div>
        )
    }
}

class Mycom2 extends Component{
    render(){
        return(
            <div>
                안녕 컴포넌트 2
            </div>
        )
    }
}

// 다수의 컴포넌트를 내보낼경우
export{Mycom,Mycom2};

// 단일로 내보낼경우
// export default