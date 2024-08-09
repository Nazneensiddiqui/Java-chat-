function fun(){
let namee = document.getElementById("name").value
let lastname = document.getElementById("last").value
let email = document.getElementById("email").value
let  date = document.getElementById("date").value
let referen = document.getElementById("reference").value
let option1 = document.getElementById("option1").value
let option2 = document.getElementById("option2").value
let underr = document.getElementById("evey").value


//.................namee....................
if(namee ==""){
    alert("pleace fill the name field")
    document.getElementById("name").focus()
    return false;
}
//......................lastname...............

if(lastname ==""){
    alert("pleace fill the last name field")
    document.getElementById("last").focus()
    return false;
}

//......................email...............

if(email ==""){
    alert("pleace fill the email field")
    document.getElementById("email").focus()
    return false;
}
// else if(!(email.include("@"))){
//     alert("please special charecter @ use this field")
//     document.getElementById("email").focus()
//     return false;
// }

//......................date...............

if( date==""){
    alert("pleace fill date field")
    document.getElementById("date").focus()
    return false;
}

//......................referec...............

if(referen ==""){
    alert("pleace fill reference field")
    document.getElementById("reference").focus()
    return false;
}

//......................optional...............

if(option1==""){
    alert("pleace fill the optional field")
    document.getElementById("option1").focus()
    return false;
}

if(option2==""){
    alert("pleace fill the field")
    document.getElementById("option2").focus()
    return false;
}
//............select...................
// if(underr==""){
//     alert("pleace select")
//     document.getElementById("evey").focus()
//     return false;
// }

}
