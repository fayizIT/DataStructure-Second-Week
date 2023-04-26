function selectionSort(arr) {
    for (let i = 0; i < arr.length ; i++) {
      let minIdx = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      if (minIdx !== i) {
        let temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
      }
    }
    return arr;
  }
  
  let arr = [15, 5, 24, 8, 1, 3, 16, 10, 20];
  console.log(selectionSort(arr)); // Output: [1, 3, 5, 8, 10, 15, 16, 20, 24]



 function selectionsort(ar){
  for(let i=0;i<ar.length;i++){
    minIdx=i;
    for(j=i+1;j<ar.length;j++){
      if(ar[j]<ar[minIdx]){
        minIdx=j;
      }
    }
    if(minIdx!==i){
      temp=ar[i];
      ar[i]=ar[minIdx]
      ar[minIdx]=temp
    }
  }
  return ar;

 }

 const ar=[4,23,623,7,24,894]
 console.log(selectionsort(ar));