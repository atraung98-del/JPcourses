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
        window.location.href="usercreatedacc.html";
        alert('You created account successfully!');
       
    }else{
        alert('Enter the form to create account!');
    }
    localStorage.setItem('newuser-data',userdata);   
}
const user=localStorage.getItem('newuser-data');
console.log(user);

// loginform//
document.getElementById('loginform').addEventListener('submit',e=>{
            e.preventDefault()
            const fname=document.getElementById('f-name').value;
            const lname=document.getElementById('l-name').value;
            const pswcre=document.getElementById('p-cr').value;
            const pswcom=document.getElementById('p-co').value;

            sessionStorage.setItem('firstname',JSON.stringify(fname));
            sessionStorage.setItem('lastname',JSON.stringify(lname));
            sessionStorage.setItem('pswcre',JSON.stringify(pswcre));
            sessionStorage.setItem('pswcom',JSON.stringify(pswcom));
            createAccount();
            
            // window.location.href="usercreatedacc.html"
            loadData();
});
function loadData(){
    document.getElementById('loader').style.display='block';

setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    alert("Loaded!");
  }, 2000);
}

