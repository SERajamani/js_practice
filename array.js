// slice

var a=[10,20,30,40]
var b=a.slice(0,2)
console.log(a)
console.log(b)

// splice

var c=[20,40,60,80]
c.splice(3,1)
console.log(c)

var d=[21,22,23,24]
d.splice(2,1,24)
console.log(d)

// indexof includes  length

var a=[10,20,30,40]


console.log(a.indexOf(20))
console.log(a.includes(40))
console.log(a.length)

// array with loop

var a =[10,20,30,40,50]
for (count=0;count<=4;count=count+1){
    console.log(a[count])
}

// Array question 1

// even number
var a=[1,2,3,4,5,6,7,8,9,10]
console.log('Even numbers are:')
for(count=0;count<10;count=count+1){
    if(a[count]%2==0){
        console.log(a[count])
    }

}

// odd number
var a=[1,2,3,4,5,6,7,8,9,10]
console.log('odd numbers are:')
for(count=0;count<10;count=count+1){
    if(a[count]%2==1){
        console.log(a[count])
    }

}

