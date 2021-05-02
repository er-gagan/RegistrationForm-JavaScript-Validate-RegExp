let Names = document.getElementById("name")
Names.addEventListener("keyup", () => {
    let VALUE = String(Names.value)
    re = /[a-zA-Z ]/gi
    let Msg = document.getElementById("NameMsg")
    if (VALUE.length === 0) {
        Msg.innerText = ""
    }
    else if (VALUE[0].match(re) !== null) {
        VALUE = VALUE.match(re).join("")
        Names.value = VALUE
        if (VALUE.length > 10) {
            Msg.innerText = "Maximum 10 character allowed"
            Msg.style.color = "red"
        }
        else {
            Msg.innerText = "Correct"
            Msg.style.color = "green"
        }
    }
    else {
        Names.value = ""
        Msg.innerText = ""
    }
})

let Emails = document.getElementById("email")
Emails.addEventListener("keyup", () => {
    let VALUE = Emails.value
    let re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/gi;
    let Msg = document.getElementById("EmailMsg")
    if (VALUE.length === 0) {
        Msg.innerText = ""
    }
    else if (VALUE.match(re) !== null) {
        if (VALUE.length > 25) {
            Msg.innerText = "Maximum 25 character allowed"
            Msg.style.color = "red"
        }
        else {
            Msg.innerText = "Correct"
            Msg.style.color = "green"
        }
    }
    else {
        Msg.innerText = "Please Enter Valid Email"
        Msg.style.color = "red"
    }
})

let Phones = document.getElementById("phone")
Phones.addEventListener("keyup", () => {
    let VALUE = Phones.value
    let re = /[0-9]/gi;
    let Msg = document.getElementById("PhoneMsg")
    if (VALUE.length === 0) {
        Msg.innerText = ""
    }
    else if (VALUE[0].match(re) !== null) {
        VALUE = VALUE.match(re).join("")
        Phones.value = VALUE
        if (VALUE.length > 10) {
            Msg.innerText = "Maximum 10 character allowed"
            Msg.style.color = "red"
        }
        else {
            Msg.innerText = "Correct"
            Msg.style.color = "green"
        }
    }
    else {
        Phones.value = ""
        Msg.innerText = ""
    }
})

let Ages = document.getElementById("age")
Ages.addEventListener("keyup", () => {
    let VALUE = Ages.value
    console.log(VALUE[0])
    let re = /[0-9]/gi;
    let Msg = document.getElementById("AgeMsg")
    if (VALUE.length === 0) {
        Msg.innerText = ""
    }
    else if (VALUE[0] == 0) {
        Ages.value = ""
        Msg.innerText = ""
    }
    else if (VALUE[0].match(re) !== null) {
        VALUE = VALUE.match(re).join("")
        Ages.value = VALUE
        if (VALUE.length > 2) {
            Msg.innerText = "Maximum 2 character allowed"
            Msg.style.color = "red"
        }
        else {
            Msg.innerText = "Correct"
            Msg.style.color = "green"
        }
    }
    else {
        Ages.value = ""
        Msg.innerText = ""
    }
})