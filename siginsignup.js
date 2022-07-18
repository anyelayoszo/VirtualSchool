
const sign_in_btn=document.querySelector('#sign-in-button');
const sign_up_btn=document.querySelector('#sign-up-button');
const container=document.querySelector('.container')

sign_up_btn.addEventListener('click',()=>{
    container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click',()=>{
    container.classList.remove('sign-up-mode');
});

function show(){
    var pswrd=document.getElementById('passInp');
    var icon=document.querySelector('.fas');
    if(pswrd.type === "password"){
        pswrd.type = "text";
        pswrd.style.marginTop = "20px";
        icon.style.color="#ff7200";
    }else{
        pswrd.type="password";
        icon.style.color="grey";
    }
}

function show2(){
    var pswrd=document.getElementById('passInp1');
    var icon=document.querySelector('.fas');
    if(pswrd.type === "password"){
        pswrd.type = "text";
        pswrd.style.marginTop = "20px";
        icon.style.color="#ff7200";
    }else{
        pswrd.type="password";
        icon.style.color="grey";
    }
}