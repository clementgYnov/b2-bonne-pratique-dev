var userData=[{name:'Alice',age:25,email:'alice@test.com'},{name:'Bob',age:30,email:'bob@test.com'}]
function printUserInfo(user){
console.log(user.name+' is '+user.age+' years old')
if(user.age>=18){console.log('Adult')}else{console.log('Minor')}
}
for(var index=0;index<userData.length;index++){printUserInfo(userData[index])}
function filterByAge(minimumAge){
var results=[]
for(var index=0;index<userData.length;index++){if(userData[index].age>=minimumAge){results.push(userData[index])}}
return results
}
var adultsOnly=filterByAge(18)
console.log('Adults:',adultsOnly)
