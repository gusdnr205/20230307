
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

console.log(isPrime(5)); // true
console.log(isPrime(10)); // false