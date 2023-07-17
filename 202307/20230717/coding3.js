function isPrime(n){
    let count =0;
    for(let i = 1;i<=n;i++ )
    {
        if((n%i)==0)
        {
            count++;
        }
    }
    console.log(count);
    return count==2?true:false
}

function primeFactor(n){
    let asd=[]
    for(let i = 1;i<=n;i++ )
    {
        if((n%i)==0)
        {
            if(i!==1&&i!==n)
            {
                asd.push(i)
            }
        }
    }    
    return asd
}
console.log(primeFactor(15));