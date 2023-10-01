let arr1=[1,2,3,4];
let arr2=[3,4,5,6];
let arr=[];
arr=arrayIntersection(arr1,arr2);

for(let x=0;x<arr.length;x++){
    console.log(arr[x]);
}
function arrayIntersection(arr1,arr2){
    let ans=[];
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                let k=i;
                for(let l=j;l<arr2.length;l++){
                    if(arr1[k]!=arr2[l]){
                        return ans;
                    }
                    else{
                        ans.push(arr1[k]);
                        k++;
                    }
                }
            }
        }
    }
}