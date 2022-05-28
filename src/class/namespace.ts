export {};

// namespaceとは?
// 名前を小さな空間に区切り、それぞれに異なる識別名が付与されることにより。他の空間に識別名を意識しないで、ファイル名等の識別名を考えることができるようになる

namespace Japanese {
  // namespaceを指定した場合、外からアクセスするためにはクラスを公開する必要がある。
  // この場合、「export」を指定する
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace US {
  export class Person {
    constructor(public firstName: string, public lastName: string) {}
  }
}

const me = new Japanese.Tokyo.Person("shinpei");
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person("なんでやねん");
console.log(meOsaka.name);

const michael = new US.Person("shinpei", "yamammoto");
console.log(michael);
