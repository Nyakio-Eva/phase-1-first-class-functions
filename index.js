function receivesAFunction(callback){
    return callback();
}
console.log(receivesAFunction(callback()));

function returnsANamedFunction(){
    return function myNamedfn(){

    };
}

function returnsAnAnonymousFunction(){
    return function(){

    };
}
