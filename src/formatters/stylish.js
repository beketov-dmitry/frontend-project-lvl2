import _ from 'lodash';
import compareNeaste from './compare.js';

const Spaces = (depth) => ' '.repeat(2 + 2 * depth);

const stringify = (item, depth1) => {
  let res = [];
  const iter = (value, depth) => {
    if (!_.isObject(value)) {
      return value;
    }
    const keys = Object.keys(value);
    res = keys.map((key) => `  ${Spaces(depth + 2)}${key}: ${iter(value[key], depth + 2)}`);
    return `{\n${res.join('\n')}\n${Spaces(depth + 1)}}`;
  };
  return iter(item, depth1);
};

export default (obj1, obj2) => {
  const resMas = compareNeaste(obj1, obj2);
  const iter = (item, depth) => item.map((obj) => {
    const { ind, key, data } = obj;
    if (ind === 'obj') {
      return `${Spaces(depth)}  ${key}: {\n${iter(data, depth + 2)}\n${Spaces(depth + 1)}}`;
    } if (ind === 'minus') {
      return `${Spaces(depth)}- ${key}: ${stringify(data, depth)}`;
    } if (ind === 'plus') {
      return `${Spaces(depth)}+ ${key}: ${stringify(data, depth)}`;
    } if (ind === 'not_same') {
      return `${Spaces(depth)}- ${key}: ${stringify(data[1], depth)}\n${Spaces(depth)}+ ${key}: ${stringify(data[2], depth)}`;
    }
    return `${Spaces(depth)}  ${key}: ${stringify(data, depth)}`;
  }).join('\n');
  return `{\n${iter(resMas, 0)}\n}`;
};
