var names = ["Yousef","NotYousef","DefinatelyNotYousef","MostCertainlyNotYousef"];

names.forEach(f = (name)=>console.log(name));

var filtered = names.filter(f = (name)=>name[0]==="D");

console.log(filtered);

names = names.map(function(name){
   return "<li>"+name+"</li>";
});

var lis = "<ul>"+names.join("")+"</ul>";
console.log(lis);

function Yousef(name,birthdate,nr){
    this.name = name;
    this.birthdate = birthdate;
    this.nr = nr;
}

var y1 = new Yousef("Yousef",0001,1);
var y7 = new Yousef("You7inho",2007,7);