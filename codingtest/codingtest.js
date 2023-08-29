

function solution(n) {
    let arr4 = new Array(n).fill(null);

    arr4.forEach((_, idx) => {
        arr4[idx] = new Array(n).fill(null);
    });
    const dir = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    let col = 0;
    let row = 0;
    let index = 0
    let count = 4;
    let tmp = 0;
    for (let i = 1; i <= n; i++) {
        arr4[col][row] = i;
        row++
        tmp = i;
    }

    while (true) {


        count = n--;
        for (let i = 0; i < count - 1; i++) {
            index = 0
            if (index == 0) {
                col = col + dir[index][0];
                arr4[col][row - 1] = ++tmp;
            }

        }
        for (let i = 0; i < count - 1; i++) {
            index = 3
            if (index == 3) {
                row = row + dir[index][1]
                arr4[col][row - 1] = ++tmp;
            }

        }


        count = n--;
        for (let i = 0; i < count - 1; i++) {
            index = 2
            if (index == 2) {
                col = col + dir[index][0];
                arr4[col][row - 1] = ++tmp;
            }

        }
        for (let i = 0; i < count - 1; i++) {
            index = 1
            if (index == 1) {
                row = row + dir[index][1]
                arr4[col][row - 1] = ++tmp;
            }

        }
        if(tmp==n*n)
        {break;}
    }
    console.log(arr4)

    return arr4




    //     for (let i = n+1; i <= n * n; i++) {
    // {

    //         if(row<xmax)
    //         {   
    //             index=1
    //             row=row+dir[index][1];
    //         }else if(col<ymax)
    //         {

    //             index=0
    //             col=col+dir[index][0];
    //         }else if(row>xmin)
    //         {
    //             xmax=0;
    //             index=3
    //             row=row+dir[index][1]


    //         }else if(col>ymin)
    //         {       

    //             ymax=0;
    //             index=2
    //             col=col+dir[index][0]

    //         }
    // arr4[col][row] = i;







}
// for (let i = 1; i <= 25; i++) {
//     let x = nowPos[tmp - 1][0]
//     console.log("x", x)
//     let y = nowPos[tmp - 1][1]
//     console.log("y", y)
//     if(plus[1]!=-1)
//     {
//         next = [x + plus[0], y + plus[1]]
//     }else next = [x + plus[0], y + plus[1]]
//     nowPos.push(next)
//     tmp++

//     if (x > n - 1 || y > n - 1 ||(tmp>15&&y<=-1)||arr4[y][x] === undefined) {

//         console.log("방향을튼다!")
//         count++
//         next = [x - plus[0], y - plus[1]]

//         nowPos.push(next)
//         tmp++

//         plus = dir[count];
//         // next = [x + plus[0], y + plus[1]]
//         if (count == 3) {
//             count = 0;
//         }
//         console.log("plus", plus)
//         // next=[x+plus[0],y+plus[1]]
//         // nowPos.push(next)

//         continue;

//     }

//     // for (let i = 0; i < nowPos.length; i++) {
//     //     let judge = [y, x]
//     //     let tmp = nowPos[i];
//     //     for (let n = 0; n < 2; n++) {
//     //         if (judge[n] == tmp[n]) {
//     //         }else
//     //         {
//     //             console.log("두값이 틀리다.")
//     //         }
//     //     }


//     // }
//     arr4[y][x] = tmp

//     console.log(x, y, arr4)
//     console.log("next",next);



// }
// console.log(nowPos)
// return answer;


solution(5);
