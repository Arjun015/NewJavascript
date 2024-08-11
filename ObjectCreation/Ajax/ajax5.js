
function getUsers(userID){
    return fetch(`https://reqres.in/api/users?page=${userID}`)
    .then(function(res){
        //console.log(res)
        return res.json()
    })
    .then(function(res){
        //console.log(res.data)
       renderHtml(res.data)
       return res.data
        
       })
    
}
//getUsers(2)


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





// async function userINFO(userOne , userTwo , userThree){
//     let userfirst = await getUsers(userOne)
//     let usersec = await getUsers(userTwo)
//     let userth = await getUsers(userThree)
//     console.log(userfirst,usersec,userth)

// }
// userINFO(2,3,4)


// Promise.all() = All the request going at same time , show the output all request

// async function paraLL(userOne , userTwo , userThree){
//     let data = await Promise.all([
//         getUsers(userOne),
//         getUsers(userTwo),
//         userThree(userThree)
//     ])
//     console.log(data)
// }
// paraLL(2,3,4)

// Promise.race() = > All the request going at same time , show the output onely one request 
//which is serve first

async function paraLLA(userOne , userTwo , userThree){
    let data = await Promise.race([
        getUsers(userOne),
        getUsers(userTwo),
        userThree(userThree)
    ])
    console.log(data)
}
paraLLA(2,3,4)