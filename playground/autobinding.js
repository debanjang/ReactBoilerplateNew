var obj = {
    name: 'Debanjan',
    printName: function(){
        console.log(`My name is ${this.name}`);
    }
};

//In javascript, the context of this changes in accordance with the context of the calling object
//In this case, the calling object is the windows object, and hence, this.name is going to be undefined
obj.printName();

//obj.printName is set as the callback to the setTimeout method.
//In javascript, the context of this changes in accordance with the context of the calling object
//In this case, the calling object is the windows object, and hence, this.name is going to be undefined
setTimeout(obj.printName, 1000);

//In javascript, the context of this changes in accordance with the context of the calling object
//We can explicitly modify the context of the calling object using bind.
//bind is a function available on every function that returns a new function with the context set to the
//object that is passed as a parameter to it. In other words, this is set to the object that 
//is passed inside bind
setTimeout(obj.printName.bind(obj), 1000);

//In javascript, the context of this changes in accordance with the context of the calling object
//We can explicitly modify the context of the calling object using bind.
//bind is a function available on every function that returns a new function with the context set to the
//object that is passed as a parameter to it. In other words, this is set to the object that 
//is passed inside bind
setTimeout(obj.printName.bind({name:'Mike'}), 1000);