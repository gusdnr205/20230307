let count=0;
let asddd=0;
function swap(strArr2,idx1,idx2)
{   
    console.log("swap",strArr2);
    let strArr = strArr2.map((item) => item );
    const dis=strArr.length;
    count++;
    for(let i=1;i<dis-1;i++)
    {
        let tmp=0;
        tmp=strArr[i+1];
        strArr[i+1]=strArr[i]
        strArr[i]=tmp
        console.log("swap",strArr);
    }

        return permute(strArr2)
    
}
function permute(strArr,begin,end)
{
    // console.log(strArr.length);
    let tmp=0;
    tmp=strArr[0];
    strArr[0]=strArr[count];
    strArr[count]=tmp
    if(count<asddd){
    console.log(count);
    swap(strArr)

    }

    // return swap()
}
function permuteArray(strArr)
{
    
    asddd=strArr.length
    permute(strArr)
    
}

permuteArray(["1","2","3"]);