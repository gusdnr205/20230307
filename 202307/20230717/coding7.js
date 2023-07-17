function commonElements(kArray)
{
    console.log(kArray);
    let tmpArr=[];
    let gijunArr=[];

    for(let i=0;i<kArray.length;i++)
    {
       tmpArr[i]=kArray[i].length;
    }
    tmpArr.sort();
    console.log(tmpArr)
    for(let i=0;i<kArray.length;i++)
    {
        if(tmpArr[0]==kArray[i].length){
            gijunArr=[...kArray[i]]

        }
    }

    console.log("gijunArr",gijunArr);
    let same=[];
    for(let i=0;i<kArray.length;i++)
    {
        for(let n=0;n<kArray[i].length;n++)
        {
            for(let t=0;t<gijunArr.length;t++)
            {
                if(gijunArr[t]==kArray[i][n]){
                    console.log(kArray[i][n]);
                    same.push(kArray[i][n]);
                }

            }
                
            
        }
    }
    let ddd=[...new Set(same)];
    console.log(ddd);
    return ddd
}

console.log(commonElements([[1,2,3],[1,2,3,4],[1,2]]));