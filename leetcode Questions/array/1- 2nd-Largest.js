// find the second largest [12, 35, 1, 10, 34, 1]  output--->34
// [10, 5, 10] output---->5 

const secondLast = (a)=>{
    let largest = -1;
    let secondLargest =-1;
    for(let i = 0; i<a.length; i++){
        if(a[i]>largest){
            secondLargest =largest;
            largest = a[i]
        }else if(a[i] != largest && a[i]> secondLargest){
            secondLargest = a[i]
        }
    }
    console.log(secondLargest)
}
secondLast( [10, 5, 10] );