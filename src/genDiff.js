import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const genDiff = (filepath1, filepath2) => {
  const file1Data = JSON.parse(fs.readFileSync(path.resolve(filepath1), 'utf-8'));
  const file2Data = JSON.parse(fs.readFileSync(path.resolve(filepath2), 'utf-8'));

  const allKeys = _.sortBy(_.union(Object.keys(file1Data), Object.keys(file2Data)));

  const result = allKeys.map((key) => {
    if (_.has(file1Data, key) && !_.has(file2Data, key)) {
      return `  - ${key}: ${file1Data[key]}`;
    }
    if (!_.has(file1Data, key) && _.has(file2Data, key)) {
      return `  + ${key}: ${file2Data[key]}`;
    }
    if (file1Data[key] !== file2Data[key]) {
      return `  - ${key}: ${file1Data[key]}\n  + ${key}: ${file2Data[key]}`;
    }
    return `    ${key}: ${file1Data[key]}`;
  });

  return `{\n${result.join('\n')}\n}`;
};

export default genDiff;
