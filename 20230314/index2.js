let arr2=[];
function countSum(arr,n)
{
    let p1=0;
    let p2=1;
    while(p1<arr.length)
    {
        // console.log("p1 "+arr[p1]);
        // console.log("p2 "+arr[p2]);

        // if(arr[p1]+arr[p2]===n)
        // {
        //     console.log([arr[p1],arr[p2]]);
        //     //return [arr[p1],arr[p2]];

        // }else if(arr[p1]+arr[p2]!==n)
        // {
        //     p2++;
        //     console.log(p2);
        //     if(p2===arr.length)
        //     {
        //         console.log(p1);
                
        //         p2=p1;
        //     }
            
        // }
       
        for(let i=0;i<arr.length;i++)
        {
            if(i!=p1)
            {
                if((arr[p1]+arr[i])===n){
                    //console.log([arr[p1],arr[p2]]);
                    arr2.push(arr[p1],arr[i]);
                }
            }
        }
        p1++;

    }
    console.log(arr2);
    console.log("헤당없음");
    //return false;
}

//countSum([8, 9, 1, 3, 12, 4, 8, 2, 3, 1], 11);
//countSum([1, 2, 3, 4], 10);
countSum([1, 4, 2, 9, 3, 2], 5); // 3