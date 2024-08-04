const login =()=>{
 const username = usernameinput.value
 const password = passwordInput.value
 if(username && password){
    localStorage.setItem("username",username)
    localStorage.setItem("password",password)
    window.location = "dashboard.html"
 }else{
    alert("Please  enter your password")
    
 }
}

const register=()=>{
   window.location = "register.html"

//    const email = emailinput.value
//  const password = passwordregInput.value
//  const repassword= passwordentergInput.value
//  if(email && password && (password==repassword)){
//    localStorage.setItem("email",email)
//     localStorage.setItem("password",password)
//     localStorage.setItem("repassword",repassword)

   
//     alert("Registeration successful,please login now")
//      window.location="login.html"
//  }
//  else{
//    alert("please enter the details")
//  }



}
const creatAccount=()=>{
      const email = emailinput.value
 const password = passwordregInput.value
 const repassword= passwordentergInput.value
 if(email && password && repassword){
   if(password==repassword){
      alert("Registeration successful,please login now")
      window.location="index.html"
   }
   else{
      alert("password doesn't match try again")
   }
 }
 else{
   alert("please enter details")
 }

}
