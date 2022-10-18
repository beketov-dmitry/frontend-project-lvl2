import path from 'path';
import fs from 'fs';

const getPath = (filename) => path.resolve(process.cwd(), '__fixtures__', filename);
export default (filename, pars) => pars(fs.readFileSync(getPath(filename), 'utf-8'));
