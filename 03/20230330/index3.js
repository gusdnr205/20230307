// promis 객체
// 비동기 처리를 가능하게 해주는 객체

//nodejs 사용을 많이할건데
// 비동기처리를 할때 promis 객체를 사용한다.

function testPromise(num) {
  // new 키워드로 빈객체 만들고
  // promise객체를 생성
  // 매개변수자리 resolve, recject
  // 위 두가지 매개변수를 받는데 전달하는 함수값에
  // resolve() 함수고 처리가 완료되면 반환
  // reject() 함수고 처리가 오류나면 반환
  return new Promise(function (res, rej) {
    try {
      if (num > 10) rej({ date: "숫자큼" });
      //if의 중괄호가없으면 인접한 한줄까지만 조건문영역이다
      console.log("프로미스생성");
      console.log("testpromise",num);
      // 데이터를 받아온다 가정을하자.
      // 데이터를 가져오는 시간이 좀걸리는데
      // 데이터를 다 가져오고 진행을 시켜야할때.
      setTimeout(() => {
        res(num,console.log("asd"));
      }, num * 1000);
    } catch (err) {
      rej(err);
    }
  });
}

  testPromise(3).then(function (date) {
     console.log("데이터를 가지고옴");
      console.log(date);
      //데이터를 가져오고 처리할 구문을 여기에 작성하면된다.
      //데이터를 가지고 처리해야할작업
      return testPromise(date);
      //res를 실행하면 then ()메소드가 실행되고
      //rej()를 실행하면 catch() 메소드가 실행된다.
    } )
    .then(function (date) {
      //성공
      console.log("성공");
      console.log(date);
      testPromise(7);  // 왜 retrun으로 반환해주지않으면 testPromise 내의 setTimeout 함수를 실행하지않고 그냥 출력만하고 넘어가는가?
    }).then(function(date){
     console.log("7초경과")
    })
    .then(function(date){
     console.log("7초경과")
    })
    .catch(function (err) {
      //실패
      console.log(err);
    });
  

//then이랑 catch를 안쓰면

// 같이쓰면안된다.잘돌아가도 안좋은 버릇이다. promis잘 모른다는의미

//async await 구문

//  async function asyncFun(){
//      // 이제웬만하면 try catch로 작업의 오류를 예외상황을
//      // 잡으면서 작업하자.
//      try{
//          // await 뒤에 promise객체 
//          let temp = await testPromise(5);
//          //기다리고 promise 객체 res나 rej이 처리될때까지
//          console.log(temp);
//          temp=await testPromise(temp+20);
//          console.log(temp);
//          // await+promise = promise를  기다리고 resolve값을
//          // 반환한다.
//          // async await는 짝이다.
//          // 같이 붙어다닌다.
//      }catch(err)
//      {
//         console.log(err);
//      }
     
//     }
//  asyncFun();