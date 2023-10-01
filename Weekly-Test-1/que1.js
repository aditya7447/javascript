let str="Reverse";
let rev="";
function strreverse(){
    for(let i=str.length-1;i>=0;i--)
    {
        rev+=str.charAt(i);
    }
    console.log(rev);
}
strreverse();


