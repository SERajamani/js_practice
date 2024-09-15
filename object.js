var person={
    name:"Raja",
    age:23,
    place:"Tirunelveli"
}

console.log(person)

console.log(person.name)

person.name="mani"
console.log(person.name)

delete person.name
console.log(person)

for (var key in person){
    console.log(person[key])
}

// array of object

var students=[
    {
        name:"Rajamani",
        age:23,
        dept:"cse"
    },{
        name:"saran",
        age:21,
        dept:"cse"
    }
]

console.log(students)

console.log(students[0])

for(var count=0;count<students.length;count=count+1){
    console.log(students[count].name)
}


// 1 question

var recipes=[
    {
        name:"vada",
        ingredients:["maavu","aadupu"],
        instruction:["turn on the stove"]
    },

    {
        name:"dosai",
        ingredients:["maavu","aadupu"],
        instruction:["turn on the stove"]
    },

    {
        name:"maitha",
        ingredients:["maavu","aadupu"],
        instruction:["turn on the stove"]
    }

]

for (var count=0;count<3;count=count+1){
    console.log(recipes[count].name)
}