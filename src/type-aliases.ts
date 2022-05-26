export {};

type Mojiretsu = string

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example = {
  name: 'gam',
  age: 33
};

type Hairetu =  {
  name: string;
  age: number;
}

const example2: Hairetu = {
  name: 'gam',
  age: 33
};

type Profile2 = typeof example;
console.log( { example2 });

