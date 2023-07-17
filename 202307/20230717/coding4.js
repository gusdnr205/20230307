function base10ToString(n){
    let asd=[]; 
    function base10ToStringHelper(n)
    {
        let i = n%2
        let tmp=Math.floor(n/2);
        asd.push(i);
        if(tmp!=0)
        {
            return base10ToStringHelper(tmp)
        }
    }
    base10ToStringHelper(n);
    console.log(asd)
    
  
    return asd.reverse().toString();
}
console.log(base10ToString(100)) // 1100100