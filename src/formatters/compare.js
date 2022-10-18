import _ from 'lodash';

const compareNeaste = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const resKeys = _.sortBy(_.uniq(keys1.concat(keys2)));
  return resKeys.map((key) => {
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return {
        ind: 'obj',
        key,
        data: compareNeaste(obj1[key], obj2[key]),
      };
    } if (!keys1.includes(key)) {
      return {
        ind: 'plus',
        key,
        data: obj2[key],
      };
    } if (!keys2.includes(key)) {
      return {
        ind: 'minus',
        key,
        data: obj1[key],
      };
    } if (!_.isEqual(obj1[key], obj2[key])) {
      return {
        ind: 'not_same',
        key,
        data: {
          1: obj1[key],
          2: obj2[key],
        },
      };
    } return {
      ind: 'same',
      key,
      data: obj1[key],
    };
  });
};

export default compareNeaste;
