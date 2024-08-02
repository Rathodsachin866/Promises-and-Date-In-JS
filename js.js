// Given a function fn and a time in milliseconds t, return a debounced version of that function.

// A debounced function is a function whose execution is 
// delayed by t milliseconds and whose execution is cancelled if it is called 
// again within that window of time.
//  The debounced function should also receive the passed parameters.
// /**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timer
    return function(...args) {
        clearTimeout(timer)
     timer = setTimeout(()=> fn(...args), t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */

//// Queston 2

* @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let res =Array(functions.length)
        let waitingFor = functions.length

        for( let i = 0; i<functions.length; i++){
            functions[i]()
            .then((result) => {
                res[i] = result;
                waitingFor--
                if(waitingFor === 0) resolve(res);

            }).catch(reject)
        }
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */