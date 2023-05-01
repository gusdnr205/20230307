function solution(babbling) {
  var answer = 123;
  let ex = ["aya", "ye", "woo", "ma"];
  let text = babbling.join();
  let dd="";
  let asddqw = [];
  let bit= false;
  let num=1;
  for (let i = 0; i < text.length; i++) {
    num++;
    if (text.charAt(i) == ",") {
      console.log("구분자");
      bit=true;
    } else {
      dd = dd + text.charAt(i);
      console.log(dd);
    }
        for (let n = 0; n < 4; n++) {
            if (ex[n] == dd) {
                asddqw[i] = dd;
                dd="";
                bit=false;
            }
        }
    
  }
  console.log("답:"+asddqw);
  return text;
}

//["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]	3

let tt = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"];

//

console.log(solution(tt));
