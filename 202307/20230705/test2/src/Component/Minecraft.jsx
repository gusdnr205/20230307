import React, { useState, useEffect } from 'react'

const Minecraft = ({arr}) => {
    return (
        <div>
            Minecraft
            <GenerateArr arr={arr}/>
        </div>
    )
}
const Minecount = ()=>{

}
const Tile = ({arr,handler}) => {

   
    const handleChange = (event) => {
        console.log("handler")
        handler(event);
       
      }
    
    
    useEffect(()=>{
        console.log("tile배치되었습니다.");
    },[])
    const[mine,setMine]=useState(arr)
    const[judge,setjudge]=useState(false);
    const[blind,setblind]=useState("blind")
    useEffect(()=>{
        // console.log("앗유저가 뭔가를 눌렀다!");
    },[judge])
    function aactiveJudgfunc(){
        console.log("앗유저가 뭔가를 눌렀다!")
        if(mine==1){
            handleChange(1);
            setjudge(!judge)
            setblind("mine")
            console.log("젠장 지뢰다!");
        }else{
            setblind("notmine")
            console.log("하하 지뢰는아니군")
        }
    }
    return(
        <div  onClick={aactiveJudgfunc} className={'daybox '+blind}>
            {arr}
        </div>
    )

}
const TIlerow = ({arr,handler})=>{
    return(
        <div className='flexmode'>
            <Tile handler={handler} arr={arr[0]}/>
            <Tile handler={handler} arr={arr[1]}/>
            <Tile handler={handler} arr={arr[2]}/>
        </div>
    )
}
const GenerateArr = ({arr}) => {
    const [arr2,setarr] = useState(arr);
    const [data, setData] = useState(null);

    // // 전에 바인드 공부했던거랑 비슷
    // const handleData = (value) => {
    //   setData(value);
    //   console.log(data);
    // }

    const handleData = (value) => {
        console.log("개수반영");
        count2=count2-value;
        setData("죽음");
    }
    let count=0;
   
    for (let i = 0; i < 3; i++) {
   
        for (let j = 0; j < 3; j++) {
          
            if(arr2[i][j]==1)
            {
                count++;
            }
        }
    }
    let count2=count;

    // setarr(arr);
    console.log(arr2);
    return(
        <div>
            <TIlerow handler={handleData} arr={arr2[0]}/>
            <TIlerow handler={handleData} arr={arr2[1]}/>
            <TIlerow handler={handleData} arr={arr2[2]}/>
            설치된 지뢰 : {count}
            결과 : {data};
        </div>
    )

}

export { Minecraft }