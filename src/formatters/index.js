import getData from '../getData.js';
import parse from '../parsers.js';
import compInPlain from './plain.js';
import compareInJson from './stylish.js';

export default (filename1, filename2, format = 'stylish') => {
  const parseFormat1 = parse(filename1);
  const parseFormat2 = parse(filename2);
  const obj1 = getData(filename1, parseFormat1);
  const obj2 = getData(filename2, parseFormat2);
  if (format === 'plain') {
    return compInPlain(obj1, obj2);
  }
  return compareInJson(obj1, obj2);
};
