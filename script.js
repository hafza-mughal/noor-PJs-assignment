// 1. pop methood

var fruits = ["mango" , "banana" ,"grapes" ,"lychee" , "strawberry",]

fruits.pop()
console.log(fruits);


// 2 . push method

var num = [4 , 5 , 7  , 8 , 9 , 2, 3]
console.log(num)

var a = 77

num.push(a)
console.log(num)


// 3 . shift method

var colors = ["black" ,"teal green" , "mustard" ,"gray" , "peach" , "mint " , "lvory"]
console.log(colors)

colors.shift()
console.log(colors)


// 4 . unshift method 
 
var Plang = ["java", "C++", "python" , "javaScript" , "ruby","swift","PHP"]

Plang.unshift("kotlin")
console.log(Plang)

// 5 . slice method

var days = ["monday", "tuesday","wednesday", "thursday" ,"friday","saturday","sunday"]
console.log(days)

var weekdays =days.slice(0,5)
console.log(weekdays)


// 6 . reverse method

var char = ["l", "i" ,"v" ,"e" ,"d"]
console.log(char)

var revWord =char.reverse()
console.log(revWord)


//7 . concat method

var Meyve = ["Papaya" ,"orange" , "Plum" , "Pomegranate" ,"Kiwi", "Guava" , "blueberry"]



var  Verdura = ["Beetroot","Zucchini" ," Sweet Potato" , "Pumpkin", "Asparagus", "Radish" ,"Artichoke"]

var mergeFV = Meyve.concat(Verdura)

console.log(mergeFV)

//8 . join method

var words = ["Actions",  "speak", "louder" , "than" , "words"]
console.log(words)

var sent = words.join(" ",words)
console.log(sent)


// 9 . splice method

var Vnum =[45 , 78 , 99 , 34 , 88, 43 , 25]
console.log(Vnum)

var Wnum = Vnum.splice(2,5)
console.log(Wnum)


//10 . map

var Mnum = [4 , 8 , 9 , 6 , 3 , 2]
console.log(Mnum)

var Dnum = Mnum.map((Mnum) => Mnum * 2)
console.log(Dnum)


// 11 . filter

var age = [15, 16,18 , 20, 21 , 25, 23 ,35]

var GreaterAge = age.filter((age) => age > 21)
console.log(GreaterAge)


// 12 . find

var books = [

    {
       titel : "To Kill a Mockingbird" ,
       PageCount: 281
    },
    {

       titel : "1984",
       PageCount: 328
    },
    {

        titel : "The Catcher in the Rye",
        PageCount: 277
     },
     {

        titel : "The Great Gatsby",
        PageCount: 180
     },
     {

        titel : "Pride and Prejudice",
        PageCount: 432
     },
]
console.log(books)

var findBook = books.find((books) => books.PageCount > 300 )
console.log(findBook)


// 13 . every 

var examMarks = [ 67, 89, 78 ,90 , 87, ]

var Gscore = examMarks.every((examMarks) => examMarks > 60)
console.log( Gscore + ':all score are greater than 60' )


//14 . some
var temp =[34 ,56, 22, 87, 12 ]

var Tabove30 = temp.some((temp) => temp > 30)
console.log(Tabove30)


// 15 .forEach

var Name = ["qais" ," zenia", "mehdi" ,"haad" ,"abdul","eman" , "duran"]

Name.forEach(function(Name) {
   console.log(`Hello, ${Name}!`);
});




  //16 . includes

  var cities = ["Paris", "Islamabad", "Tokyo", "London", "Sydney", "Berlin", "Rome"];

  var INcity =cities.includes("Sydney")
  console.log(INcity + ":city is included")

  //17 . reduce

  var RNum = [5 , 9, 7, 3, 7, 9, 20 ]

  var sum = RNum.reduce((total, RNum) => total + RNum, 0);
console.log(sum);


// 18 . indexOf
const col = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink"];

var colIndex = col.indexOf('Green');
console.log(colIndex)


//19 . lastIndexOf

var cars = ["Toyota", "Honda", "Ford", "Toyota", "BMW", "Honda", "Toyota"];

var carIndex = cars.lastIndexOf("Honda")

console.log(carIndex)


//20 . toString 

var Mixed =[ "sara" , 78 , false , 90 , "buraq" , true]

var mixedArr = Mixed.toString()
console.log(mixedArr)

