import Validator from '../app';

test.each([
  ['meg-mila', true],
  ['Mr_cat', true],
  ['l-nemo', true],
])('nickname valid', (name, expected) => {
  const nickname = new Validator(name);
  expect(nickname.validateUsername()).toBe(expected);
});
test.each([
  ['4meg-mila', false],
  ['Mr_cat8', false],
  ['-l-nemo', false],
  ['lа-n5555emo', false],
])('nickname invalid', (name, expected) => {
  const nickname = new Validator(name);
  expect(nickname.validateUsername()).toBe(expected);
});
