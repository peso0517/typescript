export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  console.log('----------')
  let result = error('test');
  console.log('----------')
  console.log({ result })
} catch(e) {
  console.log(e)
}

let foo: void = undefined
let bar: never = error('only')