let signBtn = document.getElementById('sign_btn')

let email
let password


signBtn.addEventListener('click', () =>{
    
localStorage.setItem('email', email)
localStorage.setItem('password', password)
localStorage.setItem('confirm password', password)

console.log(localStorage.getItem('email'));

     
})