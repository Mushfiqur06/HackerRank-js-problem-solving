function modyfyArray(nums){
    const something = n => n = (n % 2 == 0) ? n * 2 : n *3;
    const newArray = nums.map(something);

    return newArray;	
}

console.log(modyfyArray([1, 2, 3, 4, 5]));