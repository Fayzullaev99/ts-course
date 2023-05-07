// string, number, boolean, bigint, symbol, unknown, any
// 3 types of function | never, object 
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
var user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    },
};
console.log(user.becomeAdmin());
