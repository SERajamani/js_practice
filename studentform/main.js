
var fname=document.getElementById("fname")
var age=document.getElementById("age")
var gender=document.getElementById("gender")
var course=document.getElementById("course")
var email=document.getElementById("email")
var btn=document.getElementById("btn")

btn.addEventListener("click",function(event){
    event.preventDefault();
    
    var resultTable = document.getElementById("resultTable")
    
    var tablerow = document.createElement("tr")

    var fnamecolumn = document.createElement("td")
    fnamecolumn.textContent = fname.value
    tablerow.append(fnamecolumn)
   
    var agecolumn = document.createElement("td")
    agecolumn.textContent = age.value
    tablerow.append(agecolumn)
    
    var coursecolumn = document.createElement("td")
    coursecolumn.textContent = course.value
    tablerow.append(coursecolumn)


    var genderValue = document.getElementById("male").checked ? "Male" : 
                      document.getElementById("female").checked ? "Female" :"" ;
                      var gendercolumn = document.createElement("td")
    gendercolumn.textContent = genderValue
    tablerow.append(gendercolumn)
    
    var emailcolumn = document.createElement("td")
    emailcolumn.textContent = email.value
    tablerow.append(emailcolumn)

    var actioncolumn = document.createElement("td")
    actioncolumn.innerHTML = "<button onclick="+"deleteWhole(event)"+" class='remove'> Delete</button>"
    tablerow.append(actioncolumn)

    resultTable.append(tablerow)

  
})

function deleteWhole(event) {
    event.target.parentElement.parentElement.remove()
}


