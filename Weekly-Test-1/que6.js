let str="aabcccccaaa";

let ans="";let j;let sub="";let count;

for(let i=0;i<str.length;i++){
    for(j=i+1;j<str.length;j++){
        if(str.charAt(i)!=str.charAt(j))
        {
            sub=str.substring(i,j);
            count=sub.length;
            ans+=str.charAt(i)+count;
            i=j;
        }
        if(j==str.length-1)
        {
            sub=str.substring(i,j+1);
            count=sub.length;
            ans+=str.charAt(i)+count;
            i=j;
        }
    }   
}
console.log(ans);