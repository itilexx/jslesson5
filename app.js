function massivConvert(arr) {
    const all = {}
    let key
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        key = arr[i]
      } else {
        all[key] = arr[i]
      }
    }
    return all
  }

let information = ['name', 'John', 'lastname', 'Black', 'age', '23'];
let result = massivConvert(information);
console.log(result);


//dop dz
function averageOfNumbers(...nums) {
    let summa = 0;
    for (let i = 0; i < nums.length; i++) {
      summa += nums[i];
    }
    return summa / nums.length;
  }

  let numbers = averageOfNumbers(856, 35, 234, 678);
console.log(numbers); 


  