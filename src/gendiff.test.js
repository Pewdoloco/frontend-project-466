import path from 'path';
import genDiff from './genDiff';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('gendiff flat JSON files', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const expectedOutput = `{ /* expected output here */ }`;

  expect(genDiff(file1, file2)).toEqual(expectedOutput);
});
