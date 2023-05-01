//이터러블 이터레이터


//set,map
// set은 배열에 중복되지않는 값을 저장할수있다.
// 중복되지않는 유일한 값들 
// 배열에는 중복값이 저장될수있는데 set은 중복이 안되는값을 저장할수있다.

// 배열은 요소에 순서의 의미가 있는데 set x
// 이터레이터로 next 접근 가능은한데 index가없다
// 배열은 인덱스로 접근을 하는데 set은 접근이 안된다.

// set: ES6 값으로만 이루어져있고 중복값으 허용하지앟는다.

// set 

const s= new Set();
// 요소 추가하는방법

//메서드 사용해서
s.add("one");
s.add("one");
// 중복되는값 들어오지않는다. allowed x 
s.add("tne");
s.add("thrne");
s.add("fne");
console.log("s : ",s);

const arr = [1,2,3,4,5];
// 생성단계에서 생성자 함수에 배열을 전달
const ss = new Set(arr);
console.log(ss);

// delete 요소를 제거하는 메소드
ss.delete(2);

//has 값을 가지고있는지 확인하는 메소드
console.log(ss.has(2));

//값을 제거 모든값을 제거하는 메소드
// ss.clear();
// console.log(ss);

// forEach 이터러블 반복자.
ss.forEach(function(i){
    console.log(i);
})

// SetIterator 객체로 반환
// 이터러블에 이터레이터를 반환 시켜준다. 이터레이터 객체는 iteratorresult 를 반환하고 value나 done을 확인할수있다.

const temp = ss.entries();
console.log(temp.next().value);
console.log(temp.next());

// Map 키와 벨류를 저장하는데
// 키값을 객체로도 할수있다.

// Map : ES6부터 추가되었다. 키와 벨류로 한쌍으로 
// 저장학고 중복된 키값을 허용하지않는다.
// iterator을 통해 Map 객체 내부를 순회할수있다.

// Map

const map = new Map();

// 값을 추가
// map은 값을 추가할때 키와같이 한쌍으로 추가를 해줘야한다.

// set 메소드를 통해 키와 값을 저장
map.set("one",1);
map.set("one",3);
map.set("two",2);
console.log(map);

// 키를 왜지정할까 키로 저장된 값을 호출하기위해.

// map은 get 이라는 메소드로 값을 호출할수있다.,

console.log(map.get("one"));
// 값이 1이 나오지않고 3이나온다. 중복되는 키를 허용하지않고 마지막값이 출력된다.

console.log(map.get("two"));

// 값을 저장하면 삭제도 해야겠지?
// delete 메소는 삭제할 해당 키값을 매개변수로 전달
// map.delete("one");
console.log(map);

// 사이즈확인 map에 저장된 요소가 몇개인지?
// map 저장된 요소의 갯수르 확인할수있다. size
console.log(map.size)

// amp에저장된 key 값들을 전부 반환해주는 메소드
const keys=map.keys();
console.log(keys);

// map에 저장된 벨류들을 반환해주는 메소드
const values=map.values();
console.log(values);

// entries() : {키 ,  값}형태의 정보들을 모아서 MapIterator 객체로 변환 해서 반환


const iter = map.entries();
console.log(iter);

// console.log(iter.next().value);

// 키 정보만 출력시키게 for of 문으로 작성해보자

for (const iterator of keys) {
    // 이터레이터 요소가 끝날때가지 반복하면서 요소를 부여해준다.
    console.log(iterator);
}

// 값만보여주자
for(const iterator of values)
{
    console.log(iterator);
}

// 키랑 값을 다 출력
// 구조분해 할당

for (const [key,value] of iter) {
    console.log(`키는 ${key} , 값은 ${value}이다`);
}


//키와 값을 호출
map.forEach(function(value,key){
    console.log(` 키는 ${key}, 값은 ${value}`);
})
