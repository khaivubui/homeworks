import _ from 'lodash';

const component = function component () {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
};

document.body.appendChild(component());
