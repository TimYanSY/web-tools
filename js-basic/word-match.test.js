const test = require('tape');
const match = require('./word-match');

test('test1: both input strings are null', t => {
  const result = match(null, "null");
  t.equal(result, null);
  t.end();
});

test('test1: first input string is null', t => {
  const result = match(null, "ABCC");
  t.equal(result, null);
  t.end();
});

test('test2: seoncd input string is null', t => {
  const result = match("ABC", null);
  t.equal(result, null);
  t.end();
});

test('basic test1 exact match', t => {
  const result = match("AC", "AC");
  t.equal(result, 2);
  t.end();
});

test('basic test2 part match', t => {
  const result = match("ABCCD", "ABCCE");
  t.equal(result, 4);
  t.end();
});

test('basic test3 nothing is in common', t => {
  const result = match("ABCDXYY", "EFGHIJK");
  t.equal(result, 0);
  t.end();
});

test('basic test4 uppercase and lowercase', t => {
  const result = match("ABCDE", "abcde");
  t.equal(result, 5);
  t.end();
});

test('basic test5 duplicate handles', t => {
  const result = match("ABCDE", "aaaaa");
  t.equal(result, 1);
  t.end();
});