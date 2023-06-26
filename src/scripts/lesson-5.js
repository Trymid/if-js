export {correctDate, date}

const date = '2020-11-26';

function correctDate(date) {
  const temp = date.match(/\d+/gi);
  return  `${temp[2]}.${temp[1]}.${temp[0]}`;
}

console.log(correctDate(date));