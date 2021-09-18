// default export sample

const moduleC = () => {
  console.log('moduleC');
};

const moduleD = () => {
  moduleC();
  console.log('moduleD');
};

// moduleE not included in the bundle.js
const moduleE = () => {
  console.log('moduleE');
};

const moduleF = () => {
  console.log('moduleF');
};

export { moduleD, moduleE };
export default moduleF;
