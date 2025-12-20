const firstname=document.getElementById('f-name');
const lastname=document.getElementById('l-name');
const cpsw=document.getElementById('p-cr');
const copsw=document.getElementById('p-co');
const submitbtn=document.querySelector('#submitbtn');

function createAccount(){
    const userdata=[
    firstname.value,
    lastname.value,
    cpsw.value,
    copsw.value,];
     
    if(firstname.value&&lastname.value&&cpsw.value&&copsw.value){
        alert('You created account successfully!');
       
    }else{
        alert('Enter the form to create account!');
    }
    localStorage.setItem('newuser-data',userdata);   
}
const user=localStorage.getItem('newuser-data');
console.log(user);

const myuser=document.getElementById('myuser');
myuser.addEventListener('submit',e=>{
            e.preventDefault()
            const fname=document.getElementById('f-name').value;
            const lname=document.getElementById('l-name').value;
            const pswcre=document.getElementById('p-cr').value;
            const pswcom=document.getElementById('p-co').value;

            sessionStorage.setItem('firstname',JSON.stringify(fname));
            sessionStorage.setItem('lastname',JSON.stringify(lname));
            sessionStorage.setItem('pswcre',JSON.stringify(pswcre));
            sessionStorage.setItem('pswcom',JSON.stringify(pswcom));
            const userofname=sessionStorage.setItem('username',fname+lname);
            window.location.href="login.html";
            createAccount(); 
            
});
