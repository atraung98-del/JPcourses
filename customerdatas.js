const form=document.querySelector('#userform');
    const table=document.querySelector('#table-layout');
    const tbody=document.querySelector('tbody');

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
       const collectData= tbody.innerHTML+=`<tr style="background-color:white;box-shadow:0px 2px 2px 0px gray;height:50px;"id="usercatch">
            <td style="width:150px;">${f.format(dates)}</td>
            <td colspan="2"style="width:100px;">${username}</td>
            <td colspan="2"style="width:100px;">${userid}</td>
            <td colspan="2"style="width:100px;">${userstatus}</td>
            <td colspan="2"style="width:100px">${userbehaviour}</td>
           <td><button id="activebtn">Active</button>
            <button id="editbtn">Edit</button>
            <button id="deletebtn" onclick="listtrde()">Delete</button>
            </td>
            </tr>
           
            `
            document.getElementById('username').value=""
            document.getElementById('userid').value=""
            document.getElementById('userstatus').value=""
            document.getElementById('userbehaviour').value=""
    localStorage.removeItem('nameitems');
    localStorage.removeItem('list');
}
    
    form.addEventListener('submit',(userExp));
     const hamburger=document.querySelector('.hamburger');
     const datalist=document.querySelector('.datalist');
     hamburger.addEventListener('click',()=>{
        hamburger.classList.toggle("active");
        datalist.classList.toggle("active");
     });
//    ...///

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
    
    
    