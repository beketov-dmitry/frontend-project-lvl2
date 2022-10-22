import compareNeaste from './compare.js';

const inJs = (obj1, obj2) => {
  const res = compareNeaste(obj1, obj2);
  return JSON.stringify(res);
};

export default inJs;
