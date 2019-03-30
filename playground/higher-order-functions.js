var add = (a,b)=>a+b;

var square = a => a*a;

console.log(add(99,1));

//Higher order function to return a modified func
//Definition: A higher order function is a function that takes another function as an argument
//and returns yet another function.
var callAndLog = (func)=>{
    //cannot use arrow func since we need access 
    //to arguments passed to callAndLog in the function that is returned.
    //Apply is used to call a function immediately
    //First arg in apply is the context in which we want to execute the function.
    //Since we dont need any change of context, we are leaving it undefined.
    //Second is the list of arguments that we need to call func with.
    //In our case, we want to call func the argument list that was passed to the function returned
    return function(){ 
        let res = func.apply(undefined, arguments); 
        //modify the original func
        console.log(`Result is ${res}`);
        //Also return the result like the original func
        return res;
    }
};


var addAndLog = callAndLog(add);
//Test for modified functionality
var sum = addAndLog(194,6);
//Test for existing functionality
console.log(sum);

var squareAndLog = callAndLog(square);
squareAndLog(3);