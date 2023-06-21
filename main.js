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
    console.log(
      'Элемент массива, который больше 5-ти, но меньше 10-ти: ',
      array[i],
    );
  }
}

array = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < array.length; i++) {
  if (5 < array[i] && array[i] < 10) {
    console.log(
      'Элемент массива, который больше 5-ти, но меньше 10-ти: ',
      array[i],
    );
  }
}

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    console.log('Четные элементы массива: ', array[i]);
  }
}

function palindrome(word) {
  for (let i = 0; i < Math.trunc(word.length / 2); i++) {
    if (word[i] !== word[word.length - (i + 1)]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome('шалаш'));

function min(x, y) {
  if (x > y) {
    console.log('Меньшее число: ', y);
  } else if (x < y) {
    console.log('Меньшее число: ', x);
  } else {
    console.log('Числа равны');
  }
}
min(4, 5);

function max(x, y) {
  if (x > y) {
    console.log('Большее число: ', x);
  } else if (x < y) {
    console.log('Большее число: ', y);
  } else {
    console.log('Числа равны');
  }
}
max(6, 8);

function maxt(x, y) {
  x > y
    ? console.log('Большее число: ', x)
    : x < y
    ? console.log('Большее число: ', y)
    : console.log('Числа равны');
}
maxt(6, 8);

function generateArray() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array[i] = Math.round(Math.random() * 100);
  }
  return array;
}

function replaceZero(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 10 === 0) {
      const temp = String(array[i]).split('');
      for (let j = 0; j < temp.length; j++) {
        if (temp[j] === '0') {
          temp[j] = 'zero';
        }
      }
      array[i] = temp.join('');
    }
  }
  console.log(array);
}

const arrayTemp = generateArray();
console.log(arrayTemp);
replaceZero(arrayTemp);

function ordinarySum(x, y) {
  return x + y;
}

function cur(f) {
  return function (x) {
    return function (y) {
      return f(x, y);
    };
  };
}

const sum = cur(ordinarySum);
console.log(sum(5)(2));



const COLORS = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const DATA = {};

const BODY = document.getElementsByTagName('body');
const PARAGRAPHS = document.querySelectorAll("[id *= 'text']");

for (let i = 1; i <= PARAGRAPHS.length; i++) {
  DATA['text' + i] = [-1, PARAGRAPHS[i - 1]];
}

function changeTextColor(event) {
  const targetParagraph = event.target;

  if (DATA[targetParagraph.id]) {
    DATA[targetParagraph.id][0] += 1;
    targetParagraph.style.color = COLORS[DATA[targetParagraph.id][0]];
    if (DATA[targetParagraph.id][0] === COLORS.length - 1) {
      DATA[targetParagraph.id][0] = -1;
    }
  }
}
BODY[0].addEventListener('click', (event) => {
  changeTextColor(event);
});
