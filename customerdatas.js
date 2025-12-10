const form=document.querySelector('#userform');
    const table=document.querySelector('#table-layout');
    const tbody=document.querySelector('#ttbody');
    const tr=document.querySelector('#inputdatas');
 
   const userExp= function inputdata(e){
        e.preventDefault();
        const username=document.getElementById('username').value;
        const userid=document.getElementById('userid').value;
        const userstatus=document.getElementById('userstatus').value;
        const userbehaviour=document.getElementById('userbehaviour').value;
        const dates=new Date();
        const f=new Intl.DateTimeFormat("jp",{
            dateStyle:"medium",
        })
       const collectData= tbody.innerHTML+=`<tr id="userdata">
            <td style="width:150px;">${f.format(dates)}</td>
            <td colspan="2"style="width:100px;">${username}</td>
            <td colspan="2"style="width:100px;">${userid}</td>
            <td colspan="2"style="width:100px;">${userstatus}</td>
            <td colspan="2"style="width:100px">${userbehaviour}</td>
           <td><button id="activebtn">Active</button>
            <button id="editbtn">Edit</button>
            <button id="deletebtn">Delete</button>
            </td>
            <tr>
           
            `
             
            document.getElementById('username').value=""
            document.getElementById('userid').value=""
            document.getElementById('userstatus').value=""
            document.getElementById('userbehaviour').value=""
          
    
           
    localStorage.removeItem('nameitems');
    localStorage.removeItem('list');
   
    if (username=="" || userid=="" || userstatus=="" || userbehaviour=="") {
                alert('Please fill in all fields before submitting.', 'error');
                return;
            
  }
    setData();
    loadDataengine();
       
       };
  
    form.addEventListener('submit',userExp);
    
     
    // loadData();

function setData(){
    let dataSet=[];
    tbody.querySelectorAll('tr').forEach(function(item){
        dataSet.push(item.textContent.trim());
    })
    localStorage.setItem('user-data',JSON.stringify(dataSet));
}
function loadDataengine(){
   const dataSet=JSON.parse(localStorage.getItem('user-data')|| []);
   dataSet.forEach(tr);
}

// // function loadData(){
//     let tr=document.querySelector('#userdata');
//     const dataSet=JSON.parse(localStorage.getItem('user-data'|| []));
//     dataSet.forEach(collectData.innerHTML);
// }

    let day;
    switch(new Date().getDay()){
        case 0:
            day="Sunday"
            break;
        case 1:
            day="Monday"
            break;
        case 2:
            day="Tuesday"
            break;
        case 3:
            day="Wednesday"
            break;
        case 4:
            day="Thusday"
            break;
        case 5:
            day="Friday"
            break;
        case 6:
            day="Saturday"
            break;
    }
     document.getElementById('dateandday').innerText="Today is"+" "+day;
    
     const hamburger=document.querySelector('.hamburger');
     const datalist=document.querySelector('.datalist');
     hamburger.addEventListener('click',()=>{
        hamburger.classList.toggle("active");
        datalist.classList.toggle("active");
     });
     const deletebtn=document.querySelector('#deletebtn');
     const userdata=document.querySelector('#userdata')


    //  fetch('food2you/dom.html')
    //     .then(response=>console.log(response))
    //     .then(data=>console.log(data))
    //     .catch(console.error(error))
    
     let number=[1,2,3,4,5,6,7,8,9,10];

            oddnum=number.filter(numfilter);
            evennum=number.filter(numfilter)
            console.log(oddnum);

        function numfilter(element){

            return element%2!==0;
        }

    let ageGap=[16,17,18,30,45,40,50,55,60,65,70,80];
        adult=ageGap.filter(allowAge);

        console.log(adult);

        olderage=ageGap.filter(oldAge);
        console.log(olderage);
    function allowAge(ages){

        return ages<30
        
    }
    function oldAge(theAges){
        return theAges>50
    }
    
    // search filter//
    
//    ...///

    
    
    
    
