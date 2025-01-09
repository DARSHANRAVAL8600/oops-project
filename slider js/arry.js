// QUE 1
console.log((22/7)7*2)

//   QUE 2

  let a = 10
      b = 20
      c = 5
      console.log((a*b)/c + (b-a))
      console.log((10*20)/5 + (20-10))

// QUE 3
      let x = 5
      let y = 10
          x=x+2
          console.log(x*y)

// QUE 4

         let num=10
         num+=15
         console.log(num)
         num-=5
         console.log(num)
         num*=3
         console.log(num)
         num/=2
         console.log(num)

        


// QUE 5
          let score1=85
          let score2=90
              console.log(score1>80)
              console.log(score2>80)

// QUE 6
          let fruit1 = "apple"
          let   fruit2 = "banana"
              console.log("fruit1"<"fruit2")

// QUE 7
              let age = 25
              let hasDrivingLicense = true

              if(age>=18 && hasDrivingLicense){
                console.log("the person is eligible to drive")
              } else {
                console.log("the person is not eligible to drive")
              }

// QUE 8
            let number2 = 35
            if((number2>10 && number2<50)||number2%5==0){
                console.log(number2)
            } else{
                console.log("that number is not grater than 10 and not less than 50")
            }


// QUE 9
            let str = "123.45"
            let numb = parseFloat(str)
            let result = numb + 10
            console.log(result)

// QUE10
            let booleanValue = true
            let result2 = booleanValue.toString() + " is the value"
            console.log(result2)

// QUE 11 
function isCartEmpty(cart) {
    return cart.length === 0;
  }
  

// QUE 12     
            let a1 = 5
            let b1 = 10
            console.log(a1+b1)

//  que 13
           let number = 10
           if(number = 10 ){
            console.log( "the number is positive")
           }

// que 14 
            let tempreture = 30
            if(tempreture>25){
                console.log("it is a hot day")
            }

// que 15 
            let number3 = 0
            if(number3>=0){
                console.log("the number is positive")
            } else{
                console.log("the number is negative")
            }

// que 16 
let score = 75
if (score>90) {
    console.log("you will get grade A")
} else if(score>80) {
    console.log("you will get grade B")
} else if(score>70){
    console.log("you will get grade C ")
} else if (score<70){
    console.log("you will get grade D")
} 

// que 17 

let numbr = 16
if(numbr+=10 && numbr%2){
    console.log("number is both even and greater than 10")
}

// QUE 18 
function rotateCars(cars) {
    cars.unshift(cars.pop());
    return cars;
}

// que 19

function countVowels(name) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < name.length; i++) {
      if (vowels.indexOf(name[i]) !== -1) {
        count++;
      }
    }
    return count;
  }
  
  console.log(countVowels("Rahul"));
  

// QUE 20

let age1 = 30
if(age1>=18 && age1<=60){
    console.log("you are eligible")
} else{
    console.log("you are not eligible")
}