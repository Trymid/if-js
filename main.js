let user = 'John Doe';
console.log(user);

const student = 'Dmitry';
console.log(student);

user = student; // в user будет Dmitry
console.log(user);

let test = 1;
test += 1;
test += '1'; // в test будет 21
console.log(test);

test -= 1; // в test будет 20
console.log(test);

test = Boolean(test); // будет true
console.log(test);



let array = [2, 3, 5, 8];
let answer = 0;
for (let i = 1; i < array.length; i++) {
  array[i] = array[i - 1] * array[i];
  answer = array[i];
}
console.log('Произведение элементов массива: ', answer);



array = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < array.length; i++) {
  if (5 < array[i] && array[i] < 10) {
    console.log('Элемент массива, который больше 5-ти, но меньше 10-ти: ', array[i]);
  }
}



for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    console.log('Четные элементы массива: ', array[i]);
  }
}
