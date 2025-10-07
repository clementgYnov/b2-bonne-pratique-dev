var users=[{name:"Alice",age:25,city:"Paris"},{name:"Bob",age:17,city:"Lyon"},{name:"Charlie",age:30,city:"Paris"}]
function filter(u,c){var r=[];for(var i=0;i<u.length;i++){if(u[i].city==c){r.push(u[i])}}return r}
const parisUsers=filter(users,"Paris")
function getAdults(u){var adults=[];for(var i=0;i<u.length;i++){if(u[i].age>=18){adults.push(u[i])}}return adults}
const a=getAdults(parisUsers)
console.log("Adults in Paris:",a)
function formatUser(u){return u.name+" ("+u.age+" years old, "+u.city+")"}
for(var i=0;i<a.length;i++){console.log(formatUser(a[i]))}
