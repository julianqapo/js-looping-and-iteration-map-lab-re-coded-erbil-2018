// Code your solution in this file.



function lowerCaseDrivers(drivers){
let z =
  drivers.map(function(x){
    return x.toLowerCase()
  })
return z

}
/*
function nameToAttributes(drivers){
  let n = [{firstName: }, {lastName : }]
  let z = drivers.map(function(x){
    x.split(" ")
    x.[0][0]
  })
  return n
}
*/

function nameToAttributes(drivers){
  let z = drivers.map(function(v){
return v.split(" ")

})

z.map(function(v){
let o = {}
  o.firstName = v[0]
  o.lastName = v[1]
  return o
})
}





/*function lowerCaseDrivers(x){

  let a = x.toString()
  let b = a.toLowerCase()
  let c = b.split(" ");
  return c
}
*/


function attributesToPhrase(drivers){
  let z = drivers.map(function(x){
    return x.name +" is from "+ x.hometown
  })
  return z
}
