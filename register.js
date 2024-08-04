const login =()=>{
    window.location="index.html"
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
   const createAccount=()=>{
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
   