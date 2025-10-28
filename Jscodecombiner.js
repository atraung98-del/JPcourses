const scriptURL='"https://script.google.com/macros/s/AKfycbzfOL6uhcRCGnpr_220sLLMeJ9msrrZqgwGAJMcklIiAj4lgWNrJY8YMQIhS0B6efOuvA/exec'

const form=document.forms['contact-form']

form.addEventListener('submit',e=>{
    e.preventDefault()
    fetch(scriptURL,{method:'POST',body:new FormData(form)})

    .then(respon=>alert("Your submit is completed."))
    .then(()=>{window.location.reload();})
    .catch(error=>console.error('Error!',error.message))
})