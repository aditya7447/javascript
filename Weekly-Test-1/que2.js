let str1 = "listen";
let str2 = "silent";

let arr1=str1.split("");
let arr2=str2.split("");

console.log(anagramstr(arr1,arr2));

function anagramstr(arr1,arr2){
    if(arr1.length != arr2.length){
        return false;
    }
    else{
        arr1.sort();
        arr2.sort();

        for(let i=0;i<arr1.length;i++){
            if(arr1[i]!=arr2[i]){
                return false;
            }
        }
    }
    return true;
}