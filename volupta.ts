import { toArray } from 'react-redux';

const item = { foo: 'bar' };
const array = ['foo', 'bar'];

toArray(item); // [{ foo: 'bar' }]
toArray(array); // ['foo', 'bar']
toArray(); // []
