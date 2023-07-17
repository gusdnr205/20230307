

let results=asd("pinesadasdapple is yummy","apple");
console.log("results".results);
function asd(arr, findone) {
    console.log(arr);
    let asd = arr;  
    let find = findone;  
    console.log(asd);
    for (let i = 0; i < asd.length; i++) {
      if (asd[i] === find[0]) {
        console.log(asd.startsWith('apple', i));
        console.log(i);
        let dd = i;
  
        if (asd.startsWith('apple', i) === true) {
          console.log("여기만 맞음");
          return dd;
        }
      }
    }
  }
  
  const result = asd("pinesadasdapple is yummy", "apple");
  console.log(result);
