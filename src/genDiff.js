import _ from 'lodash';
import fs from 'fs';
import path from 'path';

const parseFile = (filepath) => JSON.parse(fs.readFileSync(path.resolve(filepath), 'utf-8'));

const getSortedKeys = (obj1, obj2) => _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));

const formatDiff = (key, data1, data2) => {
    if (data1[key] === data2[key]) return `  ${key}: ${data1[key]}`;
    if (data1[key] && !data2[key]) return `- ${key}: ${data1[key]}`;
    if (!data1[key] && data2[key]) return `+ ${key}: ${data2[key]}`;
    return `- ${key}: ${data1[key]}\n+ ${key}: ${data2[key]}`;
};

const genDiff = (filepath1, filepath2) => {
    const file1Data = parseFile(filepath1);
    const file2Data = parseFile(filepath2);
    const allKeys = getSortedKeys(file1Data, file2Data);
    
    return allKeys.map((key) => formatDiff(key, file1Data, file2Data)).join('\n');
};

export default genDiff;
