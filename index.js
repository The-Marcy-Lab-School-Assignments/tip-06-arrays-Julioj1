//write your code here
const findMax = (numArr) => {
    let maxNum = numArr[0];
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] > maxNum) {
            maxNum = numArr[i];
        }
    }
    return maxNum;
}
console.log(findMax([5, 9, 8, 1]));
console.log(findMax([-7, -9, -8, -1, -45, -1, -35, -98]));

// const findMax = (numArr) => {
//     numArr.sort((a, b) => b - a);
//     return numArr[0]
// }
// console.log(findMax([5, 9, 8, 1]));
// console.log(findMax([-7, -9, -8, -1, -45, -1, -35, -98]));