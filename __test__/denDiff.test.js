import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import { expect, test } from '@jest/globals';
import gendiff from '../src/formatters/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const read = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const testFiles = ['file1.json', 'file2.json', 'file3.yaml', 'file4.yaml'];
const resFiles = ['resStylish.txt', 'resPlain.txt', 'resJson.txt'];

test('stylish', () => {
  const res = read(resFiles[0]);
  expect(gendiff(testFiles[0], testFiles[1])).toEqual(res);
  expect(gendiff(testFiles[2], testFiles[3])).toEqual(res);
});

test('plain', () => {
  const format = 'plain';
  const res = read(resFiles[1]);
  expect(gendiff(testFiles[0], testFiles[1], format)).toEqual(res);
  expect(gendiff(testFiles[2], testFiles[3], format)).toEqual(res);
});

test('json', () => {
  const format = 'json';
  const res = read(resFiles[2]);
  expect(gendiff(testFiles[0], testFiles[1], format)).toEqual(res);
  expect(gendiff(testFiles[2], testFiles[3], format)).toEqual(res);
});
