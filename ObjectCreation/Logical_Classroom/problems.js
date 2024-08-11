/*--------    1>    Print reverse string------------*/

// Program 1

let names = "Arjun is very handsome"
rev= " "
for(let i=0 ; i<names.length ; i++){

    rev = names[i] + rev

}
console.log(rev)  // emosdnah yrev si nujrA 



// Program 2

let first = "cypress is best Automation tool"
let rev2 = ""
for(let i= first.length-1 ; i>=0 ; i--){
    rev2 = rev2 + first[i]
}
console.log(rev2)   // loot noitamotuA tseb si sserpyc



// Program 3 



/*let aaa = "wednsday This is good day"
let bb  = aaa.split(" ")
console.log(bb)
let ccc = bb.reverse()
console.log(ccc)
let ddd = ccc.join(" ") // yad doog si sihT yadsndew
console.log(ddd)
let sss = ddd.split(" ")
blank =[]
console.log(sss)         // [ 'day', 'good', 'is', 'This', 'wednsday' ]

for(let i= sss.length-1 ; i>=0 ; i-- ){
    console.log(sss[i])
    blank.push(sss[i])
}
console.log(blank.join(" "))*/  // yad doog si sihT yadsndew


/*   //Program 4 

let str = "wednsday This is good day"
let nm = str.split(" ")
let revv = " "
let newStr = []

for(let i=0 ;i<=nm.length-1 ; i++){

    for(let j=0 ; j<=nm.length-1 ; j++){
        revv = nm[i][j] + rev
    }
    newStr.push(rev)
   revv = " "

}
console.log(newStr.join(" "))




///////////////////////////////////////////////////////////////////////////////////
// Program 5  //  Print every character is reversed

let sentence = "wednday is good day"
let rev3 = ""
for(let i = 0 ; i < sentence.length ; i++) {
    rev3 = sentence[i] + rev3
}
console.log(rev3)  // yad doog si sihT yadsndew

revStr = rev3.split(" ").reverse().join(" ")
console.log(revStr)  // yadndew si doog yad

/////////////////////////////////////////////////////////////////////////////////



// Program 6 

let student = "Power of Nation"
let reva = ""
for(let i= 0 ; i < student.length ; i++){
    reva = student[i] + reva 

}
console.log(reva)   //noitaN fo rewoP 
let revStr1 = reva.split(" ").reverse().join(" ")
console.log(revStr1)  //rewoP fo noitaN



// Program 7 

let des = "Tajmahal is the wonderful thing of India"
let dd = ""
for(let i = des.length-1 ; i>= 0 ; i--){
    dd = dd + des[i]
}
console.log(dd)          // aidnI fo gniht lufrednow eht si lahamjaT
let sss = dd.split(" ").reverse().join(" ")
console.log(sss)        // lahamjaT si eht lufrednow gniht fo aidnI



// Program 8 

let Names = "appaB itapanaG"
let revvv = ""
for(let i = 0 ; i < Names.length ; i++){
    revvv = Names[i] + revvv 
}
console.log(revvv)    // Ganapati Bappa
let jjj = revvv.split(" ").reverse().join(" ")
console.log(jjj)       // Bappa Ganapati




//  Program 9 

let fff  = "Automation Testers"
let lll = ""
for(let i= fff.length-1 ; i>=0 ; i--){
    lll = lll + fff[i]
}
console.log(lll)        // sretseT noitamotuA
let aaa = lll.split(" ").reverse().join(" ")
console.log(aaa)       //noitamotuA sretseT               */





////////////////////------- 2> Counting Repeated Characters in String---///////////////////////////


/*--------------- Program 10   -----------*/

let namess = "sanittti"
let count = 0
for(let i=0 ; i<namess.length ; i++){
    if(namess[i] == "t"){
        count = count + 1 
    }
}
console.log(count)


/*-------- Program 11  ------------*/


let city = "Mohenjodaro"
let vvv = 00
for(let i=0 ; i<city.length ; i++){
    if(city[i] == "o"){
        vvv = vvv + 1
    }
}
console.log(vvv)



/////////////////////////  3> No.of Tickets on Discount   ////////////////////


/*----------Program 12 ------------*/

let numberofTickets = 3
if(numberofTickets < 5){
    console.log("5 percent discount")
}
else if(numberofTickets > 5 && numberofTickets < 10 ){
    console.log( "10 percent discout")
}else{
    console.log("no discount")

}  // 5 percent discount  


/*---------------- Program 13 -----------------------*/

let numofTicket = 10 
if(numofTicket < 9){
    console.log("you won silver Medal")

}else if(numofTicket < 15){

    console.log("you won Gold Medal")

}else if(numofTicket < 8){

    console.log("you won bronze Medal")

}else{

    console.log("You are Exllent played ! Try Again....")
}


/*----------- Program 14 --------------------*/

let number = 100
if(number <= 100){
    console.log("You are Nice")

}else if(number > 99 &&  number < 110){

    console.log("You are Naughty")

} else if(number < 1000 && number > 99){

    console.log("You are Greate")


}




////////////////////// 4> Even or odd number of Program   /////////////////////


/*------------ Program 15  ---------------*/

//let i = 0                     /*print the even or odd condition 0 to 50  */
for( i=0 ; i<= 50 ; i++){
    if(i%2 == 0){
        console.log("Even number",i)
    }else{
        console.log("Odd number",i)
    }
}


/*----------  Program 16 ------------*/

// print the even or odd number from 1-100

for(let j=0 ; j <= 100 ; j++ ){
    if(j % 2 == 0){
        console.log("Even number",j)
    }
    else{
        console.log("Odd number",j)
    }
}


// print the even or odd number from 1-20 using while loop

let a = 0 
while(a <= 20){
    if(a % 2 == 0){
        console.log("even number",a)
    }else{
        console.log("odd number",a)
    }
    a++
}


//  print the even or odd number from 1 - 150 using while loop

let f = 0 
while(f <= 150){
    if(f % 2 == 0){
        console.log("Number is Even ",f)
    }
    else{
        console.log("Number is odd ",f)
    }
    f++
} 





//-------------- Program -17  -------------------//

//0 1 2 3 4 5 6


for(let i=0 ; i<=10 ; i++){
    if(i==5){
        continue
    }
    if(i==7){
        break
    }
}
console.log(i)




/*------------------Program-18 -------------------- */

// Findout the Gretest  number  

let x = 1000
let y = 3000
let z = 500
if(x > y){
    if(x > z){
        console.log("x is Greater")
    }else{
        console.log("z is Greater")
    }
}
else if(y > z){
    console.log("y is Greater")
}else{
    console.log("z is Greater")
}



//-------------------------------------

if(x > y && x > z){
    console.log("x is Greater")
}
else if(y > z){
    console.log("y is Greater")
}else{
    console.log("z is Greater")
}




/*------------------Program 19  ------------------------------- */

// Print dice Random Number

let dice = Math.floor(Math.random() * 6) + 1
console.log(dice)

let dice2 = Math.ceil(Math.random() * 6)
console.log(dice2)