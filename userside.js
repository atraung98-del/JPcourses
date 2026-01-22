const userdecle=document.getElementById('user-name');
        const ufirstname=sessionStorage.getItem('firstname').replace(/['"]/g, '');
        const ulastname=sessionStorage.getItem('lastname').replace(/['"]/g, '');
        if(ufirstname&&ulastname){
    userdecle.innerHTML=`${ufirstname}_${ulastname}`;
}else{
    alert('No data found! Please try agian.')
};

// logout//
const logoutSession=document.getElementById('logoutSession');
logoutSession.addEventListener('click',e=>{
    e.preventDefault();
    alert('Are you sure to log out now');
    window.location.href='login.html';
    
    
});
//  window.location.href='login.html';
const logIn=document.querySelector('#logIn');
function userreLog(){
    const logEd=document.getElementById('logipt').value;
const logPass=document.getElementById('logpsw').value;
const storeName=sessionStorage.setItem('user',logipt);
const storePass=sessionStorage.setItem('psw',logpsw);
if(logEd===sessionStorage.getItem('user')&&logPass===sessionStorage.getItem('psw')){
    window.location.href='usercreatedacc.html';
}else{
    alert('username or password is incorrect! please tryagain');
}

};
// prifileimageupload//
const userImg=document.getElementById('userImg');
const fileInpt=document.getElementById('fileInpt');

userImg.addEventListener('click',()=>{
fileInpt.click();
});
fileInpt.addEventListener('change',()=>{
    const file=fileInpt.files[0];
    if(file){
        const reader=new FileReader();
        reader.onload=()=>{
            userImg.src=reader.result;
            localStorage.setItem('userImg',reader.result);
        };
        reader.readAsDataURL(file);
    }
});
const savedImage=localStorage.getItem('userImg');
if(savedImage){
    userImg.src=savedImage;
};


// program is work//

// location readable//
navigator.geolocation.getCurrentPosition(async position=>{
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;

    const res=await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
);

    const data=await res.json();
    const addressString=`${data.address.city ||data.address.town||''}
    ${data.address.state||""}
    ${data.address.country||""}`;

    document.getElementById('cuLoc').innerHTML=` <i class="fa-solid fa-location-dot"></i> ${addressString}`;
});
// program is work//
// livetime//
function updateTime(){
    const tiMe=new Date();
    const hour=tiMe.getHours().toString().padStart(2,'0');
    const minutes=tiMe.getMinutes().toString().padStart(2,'0');
    const seconds=tiMe.getSeconds().toString().padStart(2,'0');

    document.getElementById('currentTime').innerHTML=`${hour}:${minutes}:${seconds}`;
}
updateTime();
setInterval(updateTime,1000);

// product card5//
const earphone1=new Array(2);
earphone1[0]=`<h4 id='earname'>Earphone</h4>`
earphone1[1]=`<p>Earphones are small loudspeakers that are held or worn close to the listener's ear or within the outer ear. 
    They come in various forms, including hand-held receivers, headsets, and plug-in types.</p>
    <h5>About of Feature</h5><p>Earphones, especially wireless earbuds, offer a range of features 
that enhance the listening experience, including sound quality, comfort, and connectivity options.</p>
<h5>Price</h5>
<div id='p-pri'><p>￥</p><p id='pricechange' style="font-size:20px;">300</p></div>
<div id="plusminus">
<button type="button" class="btn btn-outline-secondary btn-sm" id="changep" style="width:35px;height:30px;"><i class="fa-solid fa-plus" style="color: #3f3f3f;"></i></button><p id="quantity" style='font-size:22px;'>1</p>
<button type="button" class="btn btn-outline-secondary btn-sm" id="minus" style="width:35px;height:30px;"><i class="fa-solid fa-minus" style="color: #3b3b3b;"></i></i></button></div>
<div id="noti" class="notification"></div>
<div id="buy-process"><button type="button" class="btn btn-outline-primary btn-sm" id="adding"><i class="fa-solid fa-cart-arrow-down"></i>Add to cart</button>
<button type="button" class="btn btn-secondary btn-sm" id='productDeli'>Buy Now</button></div>`


document.getElementById('infoma').innerHTML=`${earphone1}`;

const changep=document.getElementById('changep');
const quantity=document.getElementById('quantity');
const minus=document.getElementById('minus');
const pricechange=document.getElementById('pricechange');
let priceval=1;
let priceyen=300;
changep.addEventListener('click',e=>{
    e.preventDefault();
    card5.click()
    priceval=priceval+=1;
    quantity.textContent=`${priceval}`;
    priceyen=priceyen+=300;
    pricechange.textContent=`${priceyen}`;
});
minus.addEventListener('click',e=>{
    e.preventDefault();
    priceval=priceval-=1;
    quantity.textContent=`${priceval}`;
    priceyen=priceyen-=300;
    pricechange.textContent=`${priceyen}`;
});
// change card4-product//
const pchange=document.getElementById('pchange');
const cImg=document.querySelector('#f-br');

cImg.addEventListener('click',e=>{
    e.preventDefault();
    
    pchange.innerHTML=`<img src="https://static.vecteezy.com/system/resources/previews/024/558/929/original/red-wireless-headphones-isolated-on-transparent-background-ai-generated-png.png"style="width:350px;height:300px;border-radius:10px;
    box-shadow: 2px 5px 5px 5px rgb(117, 117, 117);">`;
});
document.querySelector('#f-br1').addEventListener('click',e=>{
    e.preventDefault();
    pchange.innerHTML=`<img src="https://static.vecteezy.com/system/resources/previews/034/554/362/large_2x/red-wireless-headphones-ai-generative-free-png.png"style="width:350px;height:300px;border-radius:10px;
    box-shadow: 2px 5px 5px 5px rgb(117, 117, 117);">`;
});
document.querySelector('#f-br2').addEventListener('click',e=>{
    e.preventDefault();
    pchange.innerHTML=`<img src="https://images-na.ssl-images-amazon.com/images/I/61muqXlcPwL._SL1500_.jpg"style="width:350px;height:300px;border-radius:10px;
    box-shadow: 2px 5px 5px 5px rgb(117, 117, 117);">`;
});

// document.getElementById('card5').addEventListener('click',e=>{
//     e.preventDefault();
//     const OpenW=window.open("card4.html")

// });
const card4=document.querySelector('#card4');
const theside=document.getElementById('theside');
const aboutProduct=document.getElementById('aboutProduct');
const infoma=document.getElementById('infoma');
card4.addEventListener('click',e=>{
    e.preventDefault();
    theside.style.display='none';
    infoma.style.display='block';
   aboutProduct.style.display='flex';
    
   pchange.innerHTML=`<img src="https://img.freepik.com/premium-photo/wireless-headphones-custom-design_985323-2160.jpg"style="width:350px;height:300px;border-radius:10px;
    box-shadow: 2px 5px 5px 5px rgb(117, 117, 117);">`;
});
document.getElementById('allProduct').addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector('#card4');
    infoma.style.display='none';
    aboutProduct.style.display='none';
    theside.style.display='block';
});
// const card4p=document.getElementById('card4p');
// const card5=document.querySelector('#card5');
// card5.addEventListener('click',e=>{
//     e.preventDefault();
//     theside.style.display='none';
//     infoma.style.display='block';
//    aboutProduct.style.display='flex';
//    pchange.innerHTML=`<img src="https://www.androidauthority.com/wp-content/uploads/2014/07/LG-G3-Vs-HTC-One-M8-44-1620w-1080h.jpg"style="width:350px;height:300px;border-radius:10px;
//     box-shadow: 2px 5px 5px 5px rgb(117, 117, 117);">`;
//   const earphone=new Array(2);
//    earphone[0]=`<h3>SmartPhone</h3>
//    <p>Earphones are small loudspeakers that are held or worn close to the listener's ear or within the outer ear. 
//     They come in various forms, including hand-held receivers, headsets, and plug-in types.</p>
//     <h5>About of Feature</h5><p>Earphones, especially wireless earbuds, offer a range of features 
// that enhance the listening experience, including sound quality, comfort, and connectivity options.</p>
// <h5>Price</h5>
// <div id='p-pri'><p>￥</p><p id='pricechange' style="font-size:20px;">300</p></div>
// <div id="plusminus">
// <button type="button" class="btn btn-outline-secondary btn-sm" id="changep" style="width:35px;height:30px;"><i class="fa-solid fa-plus" style="color: #3f3f3f;"></i></button><p id="quantity" style='font-size:22px;'>1</p>
// <button type="button" class="btn btn-outline-secondary btn-sm" id="minus" style="width:35px;height:30px;"><i class="fa-solid fa-minus" style="color: #3b3b3b;"></i></i></button></div>
// <div id="buy-process"><button type="button" class="btn btn-outline-primary btn-sm" id="adding"><i class="fa-solid fa-cart-arrow-down"></i>Add to cart</button>
// <button type="button" class="btn btn-secondary btn-sm" id='productDeli'>Buy Now</button></div>`;
//    document.getElementById('infoma').innerHTML=`${earphone}`;
// });
// Add to cart//
// StoreData//
const cartCount=document.getElementById('cartCount');
const noti=document.getElementById('noti');
document.getElementById('adding').addEventListener('click',e=>{
    e.preventDefault();
    cartCount.textContent=`${priceval}`;
    const saveQuantity=[];
    saveQuantity.push(priceval)
    localStorage.setItem('pricevalue',JSON.stringify(saveQuantity));
    savecartData();
    showMsg(`Earphone is added!`);
})
function savecartData(){
  const storeQ=JSON.parse(localStorage.getItem('pricevalue'));
  if(savecartData){
    saveQuantity=savecartData;
  }
  console.log(storeQ);
};
// notification cartadding//
function showMsg(msg){
    noti.textContent=msg;
    noti.style.display='inline-block',backgroundColor='green';
    setTimeout(()=>{
        noti.style.display='none';
    },2000);
}
// notification cartadding//
// ordertheproduct-detail//
const cartcheck=document.querySelector('#cartcheck');
const cartcount=document.querySelector('#cartcount');
const reserve=document.getElementById('reserve');
const reserveProduct=new Array(3);
reserveProduct[0]=`<div id="tableData">
<div style="background-color:grey;width:100px;height:400px;"></div>
<div id='detailOrder'>
<table>
<tr>
    <td>hi</td>
    <td>${localStorage.getItem('pricevalue')}</td>
</tr>

</table>
</div>
</div>`;


cartcheck.addEventListener('click',e=>{
    e.preventDefault();
    reserve.style.display='block';
    document.getElementById('ucan').style.display='none';
    reserve.innerHTML=`${reserveProduct}`;
});
// discount//
const discount=document.getElementById('discount');
discount.textContent="10%Off";
discount.style.backgroundColor='rgb(255, 0, 34)';
discount.style.width='100px';
discount.style.color='white';
// discount1//
const discount1=document.getElementById('discount1');
discount1.textContent="20%Off";
discount1.style.backgroundColor='rgb(255, 0, 34)';
discount1.style.width='100px';
discount1.style.color='white';
// discount2//
const discount2=document.getElementById('discount2');
discount2.textContent="20%Off";
discount2.style.backgroundColor='rgb(255, 0, 34)';
discount2.style.width='100px';
discount2.style.color='white';

// discount3//
const discount3=document.getElementById('discount3');
discount3.textContent="20%Off";
discount3.style.backgroundColor='rgb(255, 0, 34)';
discount3.style.width='100px';
discount3.style.color='white';