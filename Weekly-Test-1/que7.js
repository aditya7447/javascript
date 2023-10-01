let arr=[3,3,5,5]
let target=8;

let left = 0;
let right = arr.length-1;

while(left<right){
    let sum = arr[left] + arr[right];
    if(sum == target){
        console.log(arr[left]+" "+arr[right]);
        while(left<arr.length-1 && arr[left]==arr[left+1]){
            left++;
        }
        while(right>0 && arr[right]==arr[right-1]){
            right--;
        }
        left++;
        right--;
    }
    else if(sum < target){
        left++;
    }
    else{
        right--;
    }
}