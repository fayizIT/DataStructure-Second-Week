function insertion(array){
  let len=array.length;
  for(let i=1;i<len;i++){
    let temp=array[i]
    console.log("temp " + temp); //if we wanted add this line for showing the key value
    let j;
    for( j=i-1;(j>=0 && temp<array[j]);j--){
        array[j+1]= array[j];
    }
    array[j+1]=temp
  }
  return array;

}

const array=[55,2,5,11,77,23,88,99,299];
console.log(insertion(array));

 //insertion sort using while loop
function insertion(arry){
  let len=arry.length;
  for(let i=1;i<len;i++){
    let temp=arry[i]
    console.log("temp " + temp); //if we wanted add this line for showing the key value
    let j=i-1;
    while(j>=0 && temp<arry[j]){
      arry[j+1]=arry[j]
      j--;
    }
    arry[j+1]=temp;

  }
  return arry;
}

const arry=[55,2,5,11,77,23,88,99,299];
console.log(insertion(arry));


