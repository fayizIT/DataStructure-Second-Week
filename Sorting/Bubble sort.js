let arr = [15,5,24,8,1,3,16,8,10,20];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length ; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr); // Output: [1, 3, 5, 8, 10, 15, 16, 20, 24]



let ar=[44,4,26,2,8,24,32,74,256,233,77,9]

for(let i=0;i<ar.length;i++){
  for(let j=0;j<ar.length;j++){
    if(ar[j]>ar[j+1]){
      let temp=ar[j];
      ar[j]=ar[j+1];
      ar[j+1]=temp;
    }
  }
}
console.log(ar);



