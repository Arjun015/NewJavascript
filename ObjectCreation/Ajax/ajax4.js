
//using fetch function/method

// fetch function return the Promise

let renderHtml = function (el) {
    let con = document.querySelector('#users')
    let html = 
        `<div>
                 <h1>${el.id}</h1>
                 <p>${el.first_name} ${el.last_name}</p>
                 <p>${el.email}</p>
                 <img src = "${el.avatar}">
   
         </div>`
    con.insertAdjacentHTML('beforeend', html)
}

// pro 1 
 

function getUsers(pageNumber){
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(res){
        //console.log(res)
        return res.json()
    })
    .then(function(res){
       //console.log(res.data)
       res.data.forEach(us=>{
        //console.log(us)
       renderHtml(us)
        
       })
    })
}
//getUsers(2)


// pro 2 

//Qs - pagewise id ----- id user ----id----after 2nd api ---singleUserinfo --- html 

// function singleUserinfo(pageNumber){
//     fetch(`https://reqres.in/api/users?page=${pageNumber}`)
//     .then(function(res){
//         return res.json()
//     }).then(function(res){
//         //console.log(res.data[0].id)
//         return res.data[0].id
//     }).then(function(id){
//         return fetch(`https://reqres.in/api/users/${id}`)
//     })
//     .then(function(res){
//         return res.json()
//     }).then(function(res){
//         //console.log(res.data)
//         renderHtml(res.data)
//     })
// }
// singleUserinfo(1)


// method 3 - using async await

async function singleUserinfo(pageNumber){
   let response =  await fetch(`https://reqres.in/api/users?page=${pageNumber}`)
  let res = await response.json()
  let id  = res.data[0].id

  let response2 = await fetch(`https://reqres.in/api/users/${id}`)
  let res2 = await response2.json()
  let user = res2.data
  renderHtml(user)
}
singleUserinfo(1)