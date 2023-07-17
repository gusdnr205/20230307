function isPalindromeRecursive(word){
    word=[...word]
    let begin="";
    let end="";
    begin=word[0]
    end=word[word.length-1];
    word[word.length]=0;
    console.log(word);
   let asd=isPalindromeRecursiveHelper(word,begin,end) 
    return asd?true:false
}

function isPalindromeRecursiveHelper(word,beginPos,endPos){
    word[word.length-1]=word[word.length-1]+1;
    let count = word[word.length-1];
    console.log(count);
    let begin="";
    let end="";
    if(beginPos==endPos)
    {
        console.log(beginPos,endPos);
        console.log("같당")
        begin=word[count];
        end=word[word.length-(count+2)];
        console.log(begin,end);
        if(count<word.length-2)
        {
            if(count==word.length-3)
            {
                return true
            }
            return isPalindromeRecursiveHelper(word,begin,end);
        }
    }else{
        if(count!=word.length)
            {
                return false
            }
        console.log("틀리당");
        // return false
    }
}
console.log(isPalindromeRecursive("asddda"));