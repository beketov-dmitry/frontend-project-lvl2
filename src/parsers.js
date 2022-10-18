import yaml from 'js-yaml';
import path from 'path';

export default (filename) => {
  const format = path.extname(filename);
  if (format === '.json') {
    return JSON.parse;
  }
  return yaml.load;
};
