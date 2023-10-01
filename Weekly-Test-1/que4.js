let str="A man, a plan, a canal: Panama"

console.log(palindrome(str));

function palindrome(str){
    str=str.replace(/[^a-zA-Z]/g,"");
    str=str.toLowerCase();
    
    let left=0;
    let right=str.length-1;
    let flag=true;
    while(left<right)
    {
        if(str.charAt(left)!=str.charAt(right))
        {
            flag=false;
        }
        left++;
        right--;
    }
    return flag;
}