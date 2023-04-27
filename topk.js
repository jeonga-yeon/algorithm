function topK(nums, k) {
  // 여기에 코드를 작성해주세요.
  let arr = new Array(nums.length).fill(null);
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    arr[i] = nums.filter((num) => num === nums[i]).length;
  }

  let newArr = new Set(arr);

  newArr = Array.from(newArr);

  for (let i = 0; i < k; i++) {
    let max = Math.max(...newArr);

    newArr.splice(newArr.indexOf(max), 1);
    result.push(nums[arr.indexOf(max)]);
  }

  return result;
}
