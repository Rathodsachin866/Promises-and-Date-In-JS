// /**
//  * @param {Promise} promise1
//  * @param {Promise} promise2
//  * @return {Promise}
//  */
// var addTwoPromises = async function(promise1, promise2) {
    
//     return Promise.all([promise1,promise2]).then((values)=>{
//         return values[0]+values[1];
//     })
// };

// /**
//  * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
//  *   .then(console.log); // 4
//  */
console.log("hiiii");

async function sleep(millis) {
 return promise = new Promise(function(resolve){
 setTimeout(resolve,millis);
   console.log("byee")
 }) 


}

const ans = sleep(1000);
console.log(ans)