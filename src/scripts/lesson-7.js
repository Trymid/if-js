import {obj1, obj2, obj3} from "../constants/constants";
export {deepEqual}

function deepEqual(object1, object2) {
  const temp1 = JSON.stringify(object1).slice(1, -1).split('').sort().join('');
  const temp2 = JSON.stringify(object2).slice(1, -1).split('').sort().join('');
  return temp1 === temp2;
}

console.log(deepEqual(obj1, obj3));