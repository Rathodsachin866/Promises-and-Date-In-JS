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
console.log(ans);





async function sleep(millis) {
 return promise = new Promise(function(resolve){
 setTimeout(resolve,millis);
   console.log("byee")
 }) 


}

const ans = sleep(1000);
console.log(ans)



/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    fn(...args);
    const interval = setInterval(()=>fn(...args),t);
    return () => clearInterval(interval);
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 2;
 *  const args = [4], t = 35, cancelTimeMs = 190;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *   
 *  setTimeout(() => {
 *      console.log(result); // [
 *                           //     {"time":0,"returned":8},
 *                           //     {"time":35,"returned":8},
 *                           //     {"time":70,"returned":8},
 *                           //     {"time":105,"returned":8},
 *                           //     {"time":140,"returned":8},
 *                           //     {"time":175,"returned":8}
 *                           // ]
 *  }, cancelTimeMs + t + 15)    
 */