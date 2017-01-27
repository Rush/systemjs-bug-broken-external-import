import { getCounter } from 'dynamic';

import foo from 'foo';

setInterval(() => {
  console.log('Counter', getCounter());
}, 100);
