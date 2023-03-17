
function divbtn(){
    // 버튼누르면 실행 시킬 기능
    console.log("나 눌렀어?");
    addArr();
    //화면 업데이트 하기위햇 만든함수
    render();
}

let n ={}

function stat(name,age,sex,content,glass){
    this.name=name;
    this.age=age;
    this.sex=sex;
    this.content=content;
    this.glass=glass;
};

function addn()
{
    let input = document.querySelectorAll("input");
    let obj = new obj(input[0].value,input[1].value,input[2].value,input[3].value,input[4].value);
    n.push(obj);
}

function review(){
    let sub="";
    n.array.forEach(i => {
        text=text+(
            `<ul><li> 이름: ${i.name} 나이 : ${i.age} 성별: ${n.sex} 내용 : ${n.content} 안경쓰는지: ${n.glass}</ul></li>`
        );
        
    });
}