var data=[{n:'Alice',a:25,e:'alice@test.com'},{n:'Bob',a:30,e:'bob@test.com'}]
function p(u){
console.log(u.n+' is '+u.a+' years old')
if(u.a>=18){console.log('Adult')}else{console.log('Minor')}
}
for(var i=0;i<data.length;i++){p(data[i])}
function f(a){
var r=[]
for(var i=0;i<data.length;i++){if(data[i].a>=a){r.push(data[i])}}
return r
}
var adults=f(18)
console.log('Adults:',adults)
