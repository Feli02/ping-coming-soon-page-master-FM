let btn = document.getElementById('btn-submit')

btn.addEventListener('click', () => {
    let email = document.getElementById('email')
    let error = document.getElementById('error-msg')
    let form = document.getElementById('form')
    let errors = 0

    value = email.value
    regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(value == null || value.length == 0 || !regex.test(value)){
        email.style.marginBottom = '0'
        error.style.display = 'block'
        errors+=1
    }else{
        email.style.marginBottom = '10px'
        error.style.display = 'none'
        if(errors != 0){
            errors-=1
        }
    }
    form.addEventListener('submit', function(event){
        if (errors > 0){
            event.preventDefault();
        }
    })
})