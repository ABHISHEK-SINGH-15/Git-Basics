// console.log('run');
// setTimeout(() => {
//     console.log('run after 2s');
// }, 1);
// setTimeout(() => {
//     console.log('run after 3s');
// }, 0);
// console.log('first run');
// console.log('first run');
// console.log('first run');
// console.log('first run');
// console.log('first run');
// let ctr = 0;
// setInterval(() => {
//     console.log(ctr++);
// }, 1000);
// fetch(`https://jsonplaceholder.typicode.com/todos/x`)
// .then((res)=>{console.log(res)})
// .catch((rej)=>{console.log(rej)});
// let ans = new Promise((res,rej)=>{
//     if(false){
//         let data = {
//             resolved:"data is resolved!!" 
//         }
//         return res(data);
//     }else{
//         let data = {
//             rejected:"data is rejected!!" 
//         }
//         return rej(data);
//     }
// });
// let p2 = ans
// .then((resData)=>{
//     console.log(resData);
//     return new Promise((res,rej)=>{
//         return res("data resolved");
//     });
// })
// .catch((rejData)=>{
//     console.log(rejData);
//     return new Promise((res,rej)=>{
//         return res("data rejected");
//     });
// })
// p2.then((res)=>{
//     console.log("end",res);
// }).catch((rej)=>{
//     console.log("error",rej);
// });
// async function runNow(){
//     let x = await p2;
//     console.log(x);
// }
// runNow();
// class RailwayForm{
//     constructor(){
//         console.log("constructor called...");
//     }
//     submit(){
//         alert("Form Submitted");
//     }
//     cancel(){
//         alert("Cancelled");
//     }
//     fill_name(name){
//         this.name = name;
//     }
// }
// let harry = new RailwayForm();
// let abhishek = new RailwayForm();
// let raj = new RailwayForm();
// abhishek.fill_name("abhishek");
// harry.submit();
// abhishek.cancel();
// raj.cancel();
// console.log(abhishek.name);
// class Human{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     printName(){
//         console.log(`Your Name is ${this.name}`);
//     }
//     printAge(){
//         console.log(`${this.name}, your age is ${this.age}`);
//     }
// }
// class Men extends Human{
//     constructor(...args){
//         super(args[0],args[1]);
//         this.salary = args[2];
//     }
//     printGender(){
//         console.log(this.name);
//         // this.name = "rajahna";
//         // console.log(this.name);
//         console.log('Your gender is male and your salary is '+ this.salary);
//     }
// }
// class Women extends Human{
//     printGender(){
//         console.log('Your gender is female');
//     }
// }
// let abhi = new Men("abhishek",23,25000);
// let annu = new Women("annapurna",22);
// abhi.printName();
// abhi.printAge();
// abhi.printGender();
// annu.printName();
// annu.printAge();
// annu.printGender();