let dinerBreakfast = () => {
  let order = "I'd like cheesy scrambled eggs";
  console.log(order);
  return (anotherOne) => {
    order += ' and ' + anotherOne;
    console.log(order + ' please!');
  };
};
