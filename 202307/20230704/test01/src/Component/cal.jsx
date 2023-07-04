
import React, { useState,useEffect } from 'react'

const Newheader = () => {
    return (
      <div >
        <div className="row">
          <Title mon="7"></Title> 
          <HamburgerButton></HamburgerButton>
        </div>
        <div className="row">
          <DaybyWeek day="일"></DaybyWeek>
          <DaybyWeek day="월"></DaybyWeek>
          <DaybyWeek day="화"></DaybyWeek>
          <DaybyWeek day="수"></DaybyWeek>
          <DaybyWeek day="목"></DaybyWeek>
          <DaybyWeek day="금"></DaybyWeek>
          <DaybyWeek day="토"></DaybyWeek>
        </div>
      </div>
    );
  }
  
const Title = ({mon})=>{
    return(
        <div>{mon}월 달력</div>
    )
}
const HamburgerButton=()=>{
    
    return(
        <button>햄벜</button>
    )
}
const DaybyWeek=({day})=>{
    return(
        <div className='daybox'>{day}요일 </div>
    )
}
const RealDate=(props)=>{
    // <div className={"com "+this.props.Cname}>

    const [active,setActive] = useState(false);
    const [num,setnum]= useState(props.num);
    const [color,setcolor]= useState(props.color);

    useEffect(()=>{
        console.log("componentDidmount");
        
    },[])
    useEffect(()=>{
        console.log("유저가 이날짜를 누름!",active,num);
    },[active],[num])
    function activeHandler1(){
        setActive(!active);
        setcolor("red");
        if(active==false&&color=="red"){
            setcolor("blue");
        }
    }
        return(
            <div onClick={activeHandler1} className={'daybox '+color}><br />{props.num}</div>
        )
    
}
const Newdate = ({tmp}) => {
    // let daysArray = [];

    // for (let i = 0; i < 2; i++) {
    //   daysArray.push(<div key={`padding-${i}`} className="day-padding"></div>);
    // }
    // console.log(daysArray);
    let dates = Array.from({ length: 7 }, (_, index) => index === 0  ? index + parseInt(tmp) : index + 2 );
    if(parseInt(tmp)>=8)
    {
        dates = Array.from({ length: 7 }, (_, index) => index === 0  ? index + parseInt(tmp) : index +parseInt(tmp));
    }
    if(parseInt(tmp)>=30)
    {
        dates = Array.from({ length:2 }, (_, index) => index === 0  ? index + parseInt(tmp) : index  +parseInt(tmp));

    }
    console.log(dates);
    return (
      <div className='row'>
        {dates.map((date, index) => (
            <RealDate
              num={date}
              color={index % 7 === 0 ? "red" : index %6===0?"blue":null}
            //   color2={index % 7-1=== 0 ? "blue" : null}
            ></RealDate>
        ))}
      </div>
    );
  };


  

const Newpooter = () => {
  return (
    <div>경일 현욱</div>
  )
}


export {Newheader,Newdate,Newpooter,RealDate};