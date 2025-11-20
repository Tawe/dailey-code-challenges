var shuffle = function(nums, n) {
    const arr1 = nums.slice(0, n);
    const arr2 = nums.slice(n, nums.length)
    const newArr = []
    for (let i = 0; i<arr1.length; i++){
       newArr.push(arr1[i]);
        if(arr2[i]){
            newArr.push(arr2[i])
        }
    }

    return newArr
};