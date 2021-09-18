// named export sample

// moduleA not included in the bundle.js
const moduleA = () => {
  console.log('moduleA');
};

const moduleB = () => {
  console.log('moduleB');
};

export { moduleA, moduleB };
