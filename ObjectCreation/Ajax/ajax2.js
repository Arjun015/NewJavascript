// call back hell

function getInfo(){
    setTimeout(function(){
        console.log('userCreated')
        setTimeout(function(){
            console.log('Id')
            setTimeout(function(){
                console.log('userInfo')
        
            },1000)
        },2000)
    
    },3000)

}
//getInfo()


// writing call back hell code is simple ways

function UserCreate(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('userCreate')
        },3000)
    })

}


function UserID(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('userID')
        },2000)
    })

}

function userInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('userInfo')
        },1000)
    })

}

// UserCreate().then(function(a){
//     console.log(a)
//     return UserID()
// }).then(function(b){
//     console.log(b)
//     return userInfo()
// }).then(function(c){
//     console.log(c)
// })


// latest way to write using async function 


async function getUserInfo(){
    let a = await UserCreate()
    console.log(a)

    let b = await UserID()
    console.log(b)

    let c = await userInfo()
    console.log(c)
}

getUserInfo()