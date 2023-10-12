import { toast } from "react-toastify"

let users = JSON.parse(localStorage.getItem("userInfo")) || [];

const regiserUser = (user) => {
    const extEmail = users.find((item) => item.email === user.email);
    const extMobile = users.find((item) => item.mobile === user.mobile);

     if(extEmail) {
        toast.warning(`${user.email} already registered`)
     } else if (extMobile) {
        toast.warning(`${user.mobile} already exists.`)
     } else {
        users.push(user);
        toast.success(`User registered successfully`);
        saveUsers();
        setTimeout(function(){
            window.location.href = '/login';
        },3000)
     }
}

const loginUser = async (user) => {
   let { email, password } = user;
   let extEmail = await users.find((item) => item.email === email);
      if(!extEmail) {
         toast.error(`User ${email} doesn't exist.`)
      } else {
            if(extEmail.password === password) {
                  localStorage.setItem('loginStatus', true)
                  localStorage.setItem('loginUser', JSON.stringify(email))
                  toast.success("Login successful");
                  setTimeout(function(){
                     window.location.href = '/';
                 },3000)
            } else {
               toast.error(`Incorrect Password`)
            }
      }
}


const saveUsers = () => {
    localStorage.setItem("userInfo", JSON.stringify(users))
}


export { regiserUser, loginUser }