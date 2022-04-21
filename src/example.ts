// let tsString: string = '123';

// let tsSum = (arr: number[]) => arr.reduce((a, b) => a + b);

// tsSum([1, 2])

// let tsString = 's';
// let tsNumber = 2;

// const result = +tsString - tsNumber;

// type StringOrNumber = string | number;

// const strOrNumber: StringOrNumber = 'str';
// const strOrNumber2: StringOrNumber = 2;
// const strOrNumber3: StringOrNumber = 1555;

// type AllTypesAlias = string | number | boolean | null | undefined | bigint | symbol | object | void | [];

// type tsArr = string | number;

// const Arr: tsArr[] = [1, 2, 3, 4, '2'];

// const Arr2: Array<tsArr> = [1, 2, 3, '5']

// const tsNextArr: [string, number] = ['1', 2 ]

// interface obj  {
//     readonly name: string,
//      age: number | string, 
//      male?: string
//     };

// const tsObj: obj = {
//     name: "Roman",
//     age: "2",
// }

// enum MethodEnum {
//     add = 'add',
//     sub = 'sub',
// }

// function calculate(method: MethodEnum, first: number, second: number): number {
//     switch(method) {
//         case MethodEnum.add: return first + second;
//         case MethodEnum.sub: return first - second;
//     }
// }

// type typeFn = () => number;
// type typeDefaultFn = () => void;

// const ArrowFunc: typeDefaultFn = () => 2;

// function identity<T>(value: T): T {
//     return value
// }

// identity(1);
// identity("222");

// interface myArray<T> {
//     [n: number]: T;

//     map<U>(fn: (el: T) => U): U[]
// }

// const arr: Array <number> = [1, 2, 3, 4,]

// arr.map((i) => `i + 1`)
// arr.map((i) => i + 1)

// function getLen<T extends Array<any>>(arr: T): number {
//     return arr.length
// }



// HOMEWORK JS => TS

//1. concat('Hello ', 'World') // -> Hello World;

function concat(param1: string, param2: string): string {
    return param1 + " " + param2
}

concat('Hello', 'World');

//2. const myHometask = {
	// howIDoIt: "I Do It Wel",
	// simeArray: ["string one", "string two", 42],
	// withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
// }

type myArr = string | number;

interface myObj {
    howIDoIt: string;
    someArray: Array<string | number>;
    withData: Array<{howIDoIt: string; someArray: myArr[]}>;
}

const myHometask: myObj = {
	howIDoIt: "I Do It Wel",
	someArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", someArray: ["string one", 23] }],
}

interface MyArray<T> {
	[N: number]: T;
	reduce<U>(fn: (acc: U, curr: T, index: number, arr: T[]) => U): U;
}

const numArray: MyArray<number> = [1,2,3,4,5];
const strArray: MyArray<string> = ['Hello ', 'world', 'from', 'typescript!'];
const num: number = numArray.reduce((acc, el) => acc + el);
const str: string = strArray.reduce((acc, el) => acc + el)
console.log({num, str});