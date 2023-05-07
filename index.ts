// string, number, boolean, undefined, null, bigint, symbol, unknown, any


// let y: undefined = undefined;
// let z: null = null;

// any , unknown

// let v: any = true;
// v = "string"; // no error as it can be "any" type
// Math.round(v); // no error as it can be "any" type

// let w: unknown = 1;
// w = "string"; // no error


// object


// const car: { type: string, model: string, year: number } = {
//     type: "Toyota",
//     model: "Corolla",
//     year: 2009
//   };

//   const car = {
//     type: "Toyota",
//   };
//   car.type = "Ford"; // no error
//   car.type = 2; // Error: Type 'number' is not assignable to type 'string'.

// optional ?

// const car: { type: string, mileage?: number } = { // no error
//     type: "Toyota"
//   };
//   car.mileage = 2000;



// array | readonly

// const names: string[] = [];
// names.push("Dylan");
// const numbers = [1, 2, 3]; 
// numbers.push(4);

// const names:readonly string[] = [];
// names.push("Dylan");
// const numbers:readonly number[] = [1, 2, 3]; 
// numbers.push(4);

// tuples | readonly

// let ourTuple: [number, boolean, string];
// ourTuple = [5, false, 'Coding God was here'];

// let ourTuple: [number, boolean, string] = [5, false, 'Coding God was here'];
// ourTuple[0] = 'text'
// We have no type safety in our tuple for indexes 3+
// ourTuple.push('Something new and wrong');

// let ourTuple: readonly [number, boolean, string] = [5, false, 'Coding God was here'];
// ourTuple[0] = 23
// ourTuple.push('Something new and wrong');


// 3 types of function | never | void,  overload

// function a(a:string):string {
//     return `${a} - test`
// }
// let b = function(b:string):string {
//     return `${a} - test`
// }
// const c = (a:string):string => {
//     return `${a} - test`
// }
// const errorLog1 = (msg:string):never=>{
//     throw new Error(msg)
//     // return 1
//     // console.log(123);

// }
// const errorLog2 = (msg:string):never=>{
//     while (true) {
//         throw new Error(msg)
//     }
// }


// overload function


// function a(a:string,b:string):string
// function a(a:number,b:number):number
// function a(a:number,b:string):string
// function a(a:any,b:any):any {
//     return a + b
// }
// console.log(a(10,10));


// rest parameters


// function buildName(firstName: string, ...restOfName: string[]) {
//     return firstName + " " + restOfName.join(" ");
//   }

// let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");


// this


// const user = {
//     id: 123,

//     admin: false,
//     becomeAdmin: function () {
//       this.admin = true;
//     },
//   };

//   console.log(user.admin);
//   user.becomeAdmin()
//   console.log(user.admin);


// unknown


// function f1(a: any) {
//     a.b(); // OK
//   }
//   function f2(a: unknown) {
//     a.b();
// //   'a' is of type 'unknown'.
//   }


// ENUM

// function anime(el:string,dir:string,timing:string):void {
//     if (dir === 'right') {

//     }
// }
// anime('id','Right','1000')

// enum Directions{
//     TOP,
//     RIGHT,
//     BOTTOM,
//     LEFT
// }
// enum Timing{
//     EASE = 'ease',
//     EASE_IN = 'ease-in',
//     LINEAR = 'linear',
// }
// enum Test{
//     EASE = 'ease',
//     EASE_IN = EASE + '-in',
//     LINEAR = 'linear',
// }

// function anime(el:string,dir:Directions,timing:string):void {
//     if (dir === Directions.RIGHT) {

//     }
// }

// anime('id',Directions.RIGHT,'linear')

// TYPES INTERFACE

// type CarYear = number
// type CarType = string
// type CarModel = string

// let year: CarYear = 2022
// let company: CarType = 'Chevrolet'
// let model: CarModel = "Spark"

// interface Rectangle {
//     year: number,
//     company: string
//     model?: string,
// }

// const rectangle: Rectangle = {
//     year:2022,
//     company:'Chevrolet',
//     model:"Spark"
// };

// type Model = string | number
// interface Rectangle {
//     year: number,
//     company: string
//     model?: Model,
// }


// ALIASES

// type CarYear = number
// type CarType = string
// type CarModel = string
// type Car = {
//   year: CarYear,
//   type: CarType,
//   model: CarModel
// }

// const carYear: CarYear = 2001
// const carType: CarType = "Toyota"
// const carModel: CarModel = "Corolla"
// const car: Car = {
//   year: carYear,
//   type: carType,
//   model: carModel
// };


// DIFFERENT TYPE and INTERFACE

// interface ICar{
//     year:number
// }
// interface ICar{
//     model:string
// }
// type ICar = {
//     year:number
// }
// type ICar = {
//     model:string
// }


// interface IYear{
//     year:number
// }
// interface IModel{
//     model:string
// }
// interface ICar extends IYear,IModel{
//     company:string
// }
// const bmw:ICar = {
//     year:2019,
//     model:"x-5",
//     company:"bmw"
// }

// type Year = {
//     year:number
// }
// type Model = {
//     model:string
// }

// type Car = Year & Model

// const mers:Car = {
//     year:2019,
//     model:"x-5",
//     // company:"bmw"
// }

// type Nums = 404 | 500 | 200
// interface INums = 404 | 500 | 200


// UNION | OR


// function printCode(code: string | number) {
//     console.log(`My status code is ${code}.`)
//   }
//   printCode(404);
//   printCode('404');


// CASTING

// let x: unknown = 'hello';
// console.log((x as string).length);

// let x: unknown = 'hello';
// console.log((<string>x).length);


// CLASS

// class Point {}
// class Point {
//     x: number;
//     y: number;
//   }
   
//   const pt = new Point();
//   pt.x = 0;
//   pt.y = 0;


// class BadGreeter {
//     name: string;
//   Property 'name' has no initializer and is not definitely assigned in the constructor.
//   }

// class GoodGreeter {
//     name: string;
   
//     constructor() {
//       this.name = "hello";
//     }
//   }

// class Person {
//     name: string;
//   }
  
//   const person = new Person();
//   person.name = "Jane";


// readonly class


// class Greeter {
//     readonly name: string = "world";
   
//     constructor(otherName?: string) {
//       if (otherName !== undefined) {
//         this.name = otherName;
//       }
//     }
   
//     err() {
//       this.name = "not ok";
//   Cannot assign to 'name' because it is a read-only property.
//     }
//   }
//   const g = new Greeter();
//   g.name = "also not ok";



// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - ichi va merosxorlarga tasir qiladi


// class Person {
//     private name: string;
  
//     public constructor(name: string) {
//       this.name = name;
//     }
  
//     public getName(): string {
//       return this.name;
//     }
//   }
  
//   const person = new Person("Jane");
//   console.log(person.getName()); 

// class Person {
//     // name is a private member variable
//     public constructor(private name: string) {}
  
//     public getName(): string {
//       return this.name;
//     }
//   }
  
//   const person = new Person("Jane");
//   console.log(person.getName());

// interface Shape {
//     getArea: () => number;
//   }
  
//   class Rectangle implements Shape {
//     public constructor(protected readonly width: number, protected readonly height: number) {}
  
//     public getArea(): number {
//       return this.width * this.height;
//     }
//   }


// protected

class Greeter {
    public greet() {
      console.log("Hello, " + this.getName());
    }
    protected getName() {
      return "hi";
    }
  }
   
  class SpecialGreeter extends Greeter {
    public howdy() {
      // OK to access protected member here
      console.log("Howdy, " + this.getName());
    }
  }
  const g = new SpecialGreeter();
  g.howdy(); // OK
//   g.getName();


// private


// class Base {
//     private x = 0;
//   }
//   const b = new Base();
//   // Can't access from outside the class
//   console.log(b.x);




// ABSTRACT


// abstract class Polygon {
//     public abstract getArea(): number;
  
//     public toString(): string {
//       return `Polygon[area=${this.getArea()}]`;
//     }
//   }
  
//   class Rectangle extends Polygon {
//     public constructor(protected readonly width: number, protected readonly height: number) {
//       super();
//     }
  
//     public getArea(): number {
//       return this.width * this.height;
//     }
//   }