const i1 = document.getElementById("i1");
const i2 = document.getElementById("i2");
const i3 = document.getElementById("i3");

const pwdInput = document.getElementById("pwd");

let realPwd = "";

/* ---------- Interface Navigation ---------- */
function goToI2(){
  i1.classList.remove("show");
  i2.classList.add("show");
}

/* ---------- Heart Password Logic ---------- */
pwdInput.addEventListener("input", (e)=>{
  if(e.inputType === "deleteContentBackward"){
    realPwd = realPwd.slice(0,-1);
  }else if(e.data){
    realPwd += e.data;
  }
  pwdInput.value = "🖤".repeat(realPwd.length);
});

/* ---------- Password Check ---------- */
function checkPassword(){
  if(realPwd === "c5d9"){
    i2.classList.remove("show");
    i3.classList.add("show");
  }else{
    alert("Wrong Password");
    pwdInput.value = "";
    realPwd = "";
  }
}
