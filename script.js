

var formLogin=document.querySelector("#login");
formLogin.addEventListener('submit',(e)=>{
    var localStorageData=JSON.parse(localStorage.getItem("Users"))
    console.log(localStorageData)
e.preventDefault();
var username=e.target.username.value;
var userpass=e.target.password.value;


function userlogin(username,password){
for(var l of finalData){
    console.log(finalData)
  if(l.UserName!=username){
  alert("username doesnot match")
  }else if(l.password!=userpass){
    alert("password does not match")
  }else{
    window.location="profilepage.html"
  }

}

}
})
