var names = ["Lars","Peter","Thomas","Mos"];

names.forEach(f = (name)=>console.log(name));

var filtered = names.filter(f = (name)=>name[0]==="T");

console.log(filtered);

names = names.map(function(name){
   return "<li>"+name+"</li>";
});

var lis = "<ul>"+names.join("")+"</ul>";
console.log(lis);

function Names(name,birthdate,nr){
    this.name = name;
    this.birthdate = birthdate;
    this.nr = nr;
}

var n1 = new Names("Karl",0001,1);
var n7 = new Names("Henrik",2007,7);