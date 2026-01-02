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
       
    }
    else{
        alert('Enter the form to create account!');
    }
    localStorage.setItem('newuser-data',userdata);   
}
const user=localStorage.getItem('newuser-data');
console.log(user);

const myuser=document.querySelector('#myuser');

myuser.addEventListener('submit',e=>{
    e.preventDefault();
            const fname=document.getElementById('f-name').value;
            const lname=document.getElementById('l-name').value;
            const pswcre=document.getElementById('p-cr').value;
            const pswcom=document.getElementById('p-co').value;

            sessionStorage.setItem('firstname',fname);
            sessionStorage.setItem('lastname',lname);
            sessionStorage.setItem('pswcre',pswcre);
            sessionStorage.setItem('pswcom',pswcom);
            const userofname=sessionStorage.setItem('username',fname+lname);
            window.location.href="login.html";
            createAccount();
});
// const userdecle=document.getElementById('user-name');
//         const ufirstname=sessionStorage.getItem('firstname').replace(/['"]/g, '');
//         const ulastname=sessionStorage.getItem('lastname').replace(/['"]/g, '');
//         if(ufirstname&&ulastname){
//     userdecle.innerHTML=`${ufirstname}_${ulastname}`;
// }else{
//     alert('No data found! Please try agian.')
// };

// // logout//
// logoutSession.addEventListener('click',e=>{
//     e.preventDefault();
//     window.location.href='login.html';
    
    
// });
// //  window.location.href='login.html';
// const logIn=document.querySelector('#logIn');
// function userreLog(){
//     const logEd=document.getElementById('logipt').value;
// const logPass=document.getElementById('logpsw').value;
// const storeName=sessionStorage.setItem('user',logipt);
// const storePass=sessionStorage.setItem('psw',logpsw);
// if(logEd===sessionStorage.getItem('user')&&logPass===sessionStorage.getItem('psw')){
//     window.location.href='usercreatedacc.html';
// }else{
//     alert('username or password is incorrect! please tryagain');
// }

// };
// const changep=document.getElementById('changep');
// const pricechange=document.getElementById('pricechange');
// const quantity=document.getElementById('quantity');
// const minus=document.getElementById('minus');

// let productPrice=300;
// changep.addEventListener('click',e=>{
//     e.preventDefault();
//     productPrice=productPrice+=300;
//     pricechange.textContent=`${productPrice}`;
    
// });
// let allVal=1;
// changep.addEventListener('click',e=>{
//     e.preventDefault();
//     allVal=allVal+=1;
//     quantity.textContent=`${allVal}`;
// });
// minus.addEventListener('click',e=>{
//     e.preventDefault();
//     productPrice=productPrice-=300;
//     pricechange.textContent=`${productPrice}`;
// })
// minus.addEventListener('click',e=>{
//     e.preventDefault();
//     allVal=allVal-=1;
//     quantity.textContent=`${allVal}`;
// });
// const pricechange2=document.getElementById('pricechange2');
// const changep2=document.getElementById('changep2');
// const minus2=document.getElementById('minus2');
// const quantity2=document.getElementById('quantity2');
// productPrice2=300;
// allVal2=1;
// changep2.addEventListener('click',e=>{
//     e.preventDefault();
//     productPrice2=productPrice2+=300
//     pricechange2.textContent=`${productPrice2}`;
//     allVal2=allVal2+=1;
//     quantity2.textContent=`${allVal2}`;
// });
// minus2.addEventListener('click',e=>{
//     e.preventDefault();
//     productPrice2=productPrice2-=300;
//     pricechange2.textContent=`${productPrice2}`;
//     allVal2=allVal2-=1;
//     quantity2.textContent=`${allVal2}`;
// });
// const cartCount=document.getElementById('cartCount');
// productCount=0;
// document.getElementById('adding').addEventListener('click',e=>{
//     e.preventDefault();
//     productCount=productCount+=1;
//     cartCount.innerHTML=`${allVal}`;
// });
// // prifileimageupload//
// const userImg=document.getElementById('userImg');
// const fileInpt=document.getElementById('fileInpt');

// userImg.addEventListener('click',()=>{
// fileInpt.click();
// });
// fileInpt.addEventListener('change',()=>{
//     const file=fileInpt.files[0];
//     if(file){
//         const reader=new FileReader();
//         reader.onload=()=>{
//             userImg.src=reader.result;
//             localStorage.setItem('userImg',reader.result);
//         };
//         reader.readAsDataURL(file);
//     }
// });
// const savedImage=localStorage.getItem('userImg');
// if(savedImage){
//     userImg.src=savedImage;
// }
// program is work//
// const ProductCate=document.querySelector('#ProductCate');
// const carousel=document.querySelector('#carousel');
// const card=document.querySelectorAll('.card');

// carousel.addEventListener('click',e=>{
//     e.preventDefault();
//     console.log('hi');
// })

