const maximumsubarry = (a)=>{
    let gsum = a[0];
    let sum = 0;
    for(let i =0; i<a.length;i++){
         
     sum = sum+a[i]
     if(sum>gsum){
         gsum = sum;
     }
     if(sum<0)
     sum =0;
    }
    console.log(gsum)
   

}
maximumsubarry([-2,1,-3,4,-1,2,1,-5,4]);