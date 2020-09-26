const prompt = require('prompt-sync')();


// const shuffle1 = (pass_arr) => {
//     let len = pass_arr.length;
//     // let iter = Math.floor(Math.random()*100)%7 + 10;
//     let iter = 16;
//     for(let i=0;i<iter;i++)
//     {
//         let cut = Math.floor(Math.random()*100)%len;
//         pass_arr = [...pass_arr.slice(cut,), ...pass_arr.slice(0,cut)];
//     }

//     return pass_arr;
// }


// Fisher-Yates shuffle
const shuffle2 = (pass_arr) => {
    for(let i=pass_arr.length-1; i>0;i--)
    {
        let temp = pass_arr[i];
        let r = Math.floor(Math.random()*100)%i;
        pass_arr[i] = pass_arr[r];
        pass_arr[r] = temp; 
    }
    // return pass_arr;
}

const num = prompt('Password length: ');
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const digits = "0123456789";
const special = ",.`;'[]\\~!@#$%^&*()_-+={}/|:\"<>?";
const pool = [uppercase, lowercase, digits, special];
const pool_num = [Math.floor(num/4), Math.floor(num/4), Math.floor(num/4), num-Math.floor(num/4)*3];

let pass_arr = [];

shuffle2(pool);
console.log(pool_num);

// pool.forEach(element => {
//     let temp = element.length;
//     for(let i=0; i<5;i++)
//         pass_arr = [...pass_arr, element[Math.floor(Math.random()*100)%temp] ];
// });

for(let i=0; i<4; i++)
    for(let j = 0; j<pool_num[i]; j++)
        pass_arr = [...pass_arr, pool[i][Math.floor(Math.random()*100)%pool[i].length]];


shuffle2(pass_arr);
console.log(pass_arr.join(''));