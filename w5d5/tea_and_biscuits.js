const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.question('Would you like some tea?', (res) => {
  console.log(`Yea, whatever, "${res}"`);
  reader.question('Would you like some biscuits?', (res2) => {
    console.log(`"${res2}" is no way to answer.`);
    const firstRes = (res === 'yes') ? 'do' : "don't";
    const secondRes = (res2 === 'yes') ? 'do' : "don't";
    console.log(
      `So you ${firstRes} want some tea
      and you ${secondRes} want some biscuits.`);
    reader.close();
  });
});
