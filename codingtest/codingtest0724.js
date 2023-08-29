// function solution(nums) {
//     let set = new Set(nums)
//     if (nums.length <= 4) {
//         set = Math.floor(nums.length / 2)
//     } else {
//         set = set.size
//         if(set>nums.length/2)
//         {
//             set = Math.floor(nums.length / 2)
//         }
//     }

//     console.log(set)
//     return set
// }
// solution([3, 1, 2, 4,5])

function solution(genres, plays) {
    var answer = [];
    for(let i =0; i<genres.length;i++)
    {
        for(let n =0;n<genres.length;n++)
        {
            let strtemp="";
            let temp=0;
            if(b[n]<b[n+1])
            {
                temp=b[n]
                b[n]=b[n+1]
            }
        }
    }
    return answer;
}


let a = ["classic", "pop", "classic", "classic", "pop"];
let b = [500, 600, 150, 800, 2500];


solution(a,b)