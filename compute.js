/* callback funtion:
    define      call 
    callback    function 
*/

// define
function division(a, b, callback) {
    if(b === 0) {
        callback("Not divided by zero", null);
    } else {
        callback(null, a % b);
    }
}

// call 
division(10, 0, function (err, data) {
    if(err) console.log("ERROR:", err);
    else {
        console.log("RESULT:", data)
        console.log("...");
    }
});