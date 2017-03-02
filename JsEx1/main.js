function add(n1,n2){
    return n1+n2;
}

var sub = function(n1,n2){
    return n1-n2;
};

var mul = function(n1,n2){
    return n1*n2;
}

var cb = function(n1,n2,n3){
    if(!(typeof n1 === "number" && typeof n2 === "number" && typeof n3 === "function")) throw Error("Illegal Arguments");
    return "resultatet af tallene: "+n1+"+"+n2+"="+n3(n1,n2);
};

console.log(add(1,2));
console.log(add);
console.log(add(1,2,3));
console.log(add(1));
console.log(cb(3,3,add));
console.log(cb(4,3,sub));
try{
console.log(cb(3,3,add()));
console.log(cb(3,"hh",add));
} catch (err){
    console.log("Error: "+err.message);
}
console.log(cb(5,5,function(n1,n2){return n1*n2;}));
console.log(cb(3,3,mul));
console.log(cb(10,5,function(n1,n2){
    return n1/n2;
}));