// Ajax 

// sync execution
function addition(){
    console.log(2+2)
}

function addition1(){
    console.log(2+3)
}
//addition()
//addition1()


// Async

function add(){
    setTimeout(function(){
        console.log(9+9)
    },2000)
}

function add1(){
    console.log(10+9)
}
//add()
//add1()



// program -1 

//api-----UserCreate
//UserCreste------id
//id fetch----------userInfo


function getInfo(){
    setTimeout(function(){
        console.log('userCreated')
    },3000)

    setTimeout(function(){
        console.log('Id')
    },2000)

    setTimeout(function(){
        console.log('userInfo')

    },1000)
}
//getInfo()


// call back hell==> Perpose of call back hell is to get async function get execute sync order


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



// Es-2015 ------promise

// async call sync execution in better way by removing call back hell


// basic promise 


// let promise = new Promise(function(resolve,reject){
//     let a = 10 
//     let b = 10 
    
//     if(a == b ){
//         resolve('hello')
//     }else{
//         reject('bye')
//     }

// })
// // consuming promise
// promise.then(function(a){
//     console.log(a)

// },function(b){
//     console.log(b)

// })


//--------------

// let pro = new Promise(function(resolve,reject){
//     let a = 10 
//     let b = 5
    
//     if(a == b ){
//         resolve('hello')
//     }else{
//         reject('bye')
//     }

// })
// // consuming promise
// pro.then(function(a){
//     console.log(a)

// },function(b){
//     console.log(b)

// })

//-----------------




let pro2 = new Promise(function(resolve,reject){
    let a = 10 
    let b = 10
    
    if(a == b ){
        resolve([11,12,13])
    }else{
        reject([-11,-12,-13])
    }

})
// consuming promise
pro2.then(function(a){
    console.log(a[0])

},function(b){
    console.log(b[1])

})



//------------------------------


let pro3 = new Promise(function(resolve,reject){
    let a = 10 
    let b = 10
    
    if(a == b ){
        resolve([11,12,13])
    }else{
        reject([-11,-12,-13])
    }

})
// consuming promise
pro3.then(function(a){
    console.log(a[0])

}).catch(function(b){
    console.log(b)
}).finally(function(){
    console.log('i will ececute this program')
})




