console.clear();

// const test = 12;


// let temp = "test";

// let String = 15;



// let test = null;

// let test2 = undefined;
// let test3;

// console.log("test:",test);
// console.log("test2:",test2);
// console.log("test3:",test3);


// let temp = "a";
// if(temp !== ""){
//     console.log("if");
// }else{
//     console.log("else");
// }

// for (let counter = 0; counter < 10; counter++) {
//     console.log(counter)
// }

// let counter = 0;
// while (counter <= 10) {
//     console.log(counter);
//     counter++;
// }

// ES5:
// sumation(2 , 4);

// function sumation(number1 , number2){
//     console.log(number1 , "-" ,  number2);
//     // return number1 + number2;
// }

// console.log(sum);

// ES6:
// const power2 = (number1) => {
//     return number1 ** 2;
// }


// const array1 = [ "test" , 1 , true , [1,2,3] , {name: "Moeid"} , null ];

// const len = array1.length;

// if(array1.length){
//     console.log("object");
// }else{
//     console.log("else");
// }

// const product = [
//     {
//         id: 1,
//         name: "mobile",
//         price: 320
//     },

//     {
//         id: 2,
//         name: "telvesion",
//         price: 620
//     },

//     {
//         id: 3,
//         name: "watch",
//         price: 100
//     },

//     {
//         id: 4,
//         name: "car",
//         price: 50000
//     },
// ]


// const elems = product.map( item => "<div>"+"<p>"+item.id+"</p>"+"<p>"+item.name+"</p>"+"<p>"+item.price+"</p>"+"</div>" );

// const pop = product.pop();
// console.log(pop);
// console.log(product);

// product.push({
//     id: 5,
//     name: "laptop",
//     price: 400
// })

// console.log(product);

// const index = product.filter(item => item.id === 2);

// product.forEach(item => console.log(item))

// const test = product.slice(1, 3);

// const test2 = product.splice(1, 2, "deleted");

// console.log(test2);
// console.log(product);
// let temp = 0;
// const interval = setInterval( () => {
//     console.log("hello");
//     console.log("=======");
//     temp++;
//     console.log(temp);
//     if(temp > 10){
//         clearInterval(interval)
//     }
// } , 1000)

setTimeout(() => {
    console.log("after 5");
} , 5000)