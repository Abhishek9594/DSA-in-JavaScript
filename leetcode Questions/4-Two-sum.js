// Q4 Tow sum
// input num = [3,2,4], target = 6
// output [1,2]

const towSum = (nums,target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j <nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i,j];
        }
    }
}
console.log(towSum([3, 7, 4, 9, 8], 16));

// using object
const towSum = (nums,target) => {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        var n = nums[i];
        if (obj[target - n] >= 0) {
            return [obj[target - n], i];
        } else {
            obj[n] = i;  
        }
    }
}

console.log(towSum([3, 7, 4, 9, 8], 16));
