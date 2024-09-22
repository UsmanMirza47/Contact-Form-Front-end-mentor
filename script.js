let submit = document.getElementsByClassName("submit")[0];
let successMsg = document.getElementsByClassName("msg")[0];
let firstName = document.getElementById("firstName");
let email = document.getElementById("email")
let msg = document.getElementById("msg")
let checkBox = document.getElementById("checkBox")
let query = document.getElementById("query");
let Query = document.getElementById("Query");



submit.addEventListener("click", submitForm);

function submitForm(e) {
  let calculate = calculateError();

  if (calculate == true) {
    successMsg.classList.remove("hidden");
  }
}

function calculateError() {
  let flag = true;

  if (firstName.value == "") {
    showerror("para-1");
    flag = false;
  } else {
    hideerror("para-1")
  }

  if (lastName.value == "") {
    showerror("para-2");
    flag = false;
  } else {
    hideerror("para-2")
  }


  if (!(isValid(email.value))) {
    showerror("para-3");
    flag = false;
  } else {
    hideerror("para-3")
  } 

  if (!(queryChecked(query,Query))) {
    showerror("para-4");
    flag = false;
  } else {
    hideerror("para-4")
  } 

  if (msg.value=="") {
    showerror("para-5");
    flag = false;
  } else {
    hideerror("para-5")
  } 

  if (!(checkBox.checked)) {
    showerror("para-6");
    flag = false;
  } else {
    hideerror("para-6")
  }


  return flag;
}

function queryChecked(query,Query) {
    let queryBox = false;
    if (query.checked) {
        queryBox = true;
    } else if(Query.checked) {
        queryBox = true
    }
    return queryBox;
}

function isValid(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }


function showerror(a) {
  let getAppear = document.getElementById(a);
  getAppear.style.color = "red"
  getAppear.classList.remove("hidden");
}
function hideerror(a) {
  let getAppear = document.getElementById(a);
  getAppear.classList.add("hidden");
}
