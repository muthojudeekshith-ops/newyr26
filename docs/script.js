const i1 = document.getElementById("i1");
const i2 = document.getElementById("i2");
const i3 = document.getElementById("i3");

function goToI2(){
  i1.classList.remove("show");
  i2.classList.add("show");
}

function checkPassword(){
  const pwd = document.getElementById("pwd").value;
  if(pwd === "c5d9"){
    i2.classList.remove("show");
    i3.classList.add("show");
  }else{
    alert("Wrong Password");
  }
}

