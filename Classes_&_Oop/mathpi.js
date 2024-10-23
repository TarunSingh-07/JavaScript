const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);
// writable: false , so isko koi bhi age jake change nhi kar sakta,ye hardcoded he & constant bhi


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


// yahan humne khud ka object bana kar usko property diya he

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    chaiOrder: function(){
        console.log("chai nhi bani");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));         /* writable: true , so isko age ja kar change kiya ja sakta he.*/
                                                                  
Object.defineProperty(chai, 'name', {
    writable: false,                                              /*idhr humne name prperty ko change kiya */
    enumerable: true,                                             /*agar enumurable false so print nhi hoga agar true toh print hoga*/
})
                                                                  
console.log(Object.getOwnPropertyDescriptor(chai, "name"));             /*Now writable: false ,so isko change nhi karsakte*/
                                                                 
 for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {                           
        console.log(`${key} : ${value}`);
    }
 }
