const toggleBtn = document.querySelector('.toggle-btn');
const menu = document.querySelector('.menu__list');

const login = document.querySelector('.login');
const forms = document.querySelector('.forms');
const signinBtn = document.querySelector('.signin__btn_close');
const signupBtn = document.querySelector('.signup__btn_close');



const signinForm = document.querySelector('.signin');
const signupForm = document.querySelector('.signup');
const signupLink = document.querySelector('.signup-link')
const signinLink = document.querySelector('.signin-link')


toggleBtn.addEventListener('click', ()=>{
  toggleBtn.classList.toggle('active');
  menu.classList.toggle('open');
})

login.addEventListener('click', ()=>{
  forms.classList.add('show')
})

signinBtn.addEventListener('click', ()=>{ 
  forms.classList.remove('show');
 })

 signupLink.addEventListener('click', ()=>{
  signupForm.classList.remove('hide');
})

signupBtn.addEventListener('click', ()=>{ 
  signinForm.classList.add('hide');
  signupForm.classList.add('hide');
  forms.classList.remove('show');
 }) 

signinLink.addEventListener('click', ()=>{
  signupForm.classList.add('hide');
}) 





