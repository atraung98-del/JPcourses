const firstname=document.getElementById('f-name');
const lastname=document.getElementById('l-name');
const cpsw=document.getElementById('p-cr');
const copsw=document.getElementById('p-co');
const submitbtn=document.querySelector('#submitbtn');
function show(){
    document.querySelector('#popup').style.display='block';
    document.querySelector('#accInfo').style.display='block';
}
function createAccount(){
    const userdata=[
    firstname.value,
    lastname.value,
    cpsw.value,
    copsw.value,];
     
    if(firstname.value&&lastname.value&&cpsw.value&&copsw.value){
       show()
    }
    else{
       show();

    }
    localStorage.setItem('newuser-data',userdata);   
}
const user=localStorage.getItem('newuser-data');


const sBtn=document.getElementById('sBtn');
const form=document.querySelector('#myuser');
form.addEventListener('submit',e=>{
    e.preventDefault();
            const fname=document.getElementById('f-name').value;
            const lname=document.getElementById('l-name').value;
            const pswcre=document.getElementById('p-cr').value;
            const pswcom=document.getElementById('p-co').value;

            sessionStorage.setItem('firstname',fname);
            sessionStorage.setItem('lastname',lname);
            sessionStorage.setItem('pswcre',pswcre);
            sessionStorage.setItem('pswcom',pswcom);
            sessionStorage.setItem('username',fname+lname);
createAccount();

            window.location.href="login.html";
            
});


// from useracc//
