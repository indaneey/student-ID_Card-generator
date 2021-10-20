

document.addEventListener('blur', reset, true) 
function reset(e){
    if(e.target.getAttribute('contenteditable') == 'true'){
        //console.log('yes')
        var element = e.target;
        if (element.textContent == '' || element.textContent == undefined){element.textContent = 'type here'}
    }
}
window.onload = editBtn
function editBtn(){
    document.body.querySelectorAll('*').forEach((e)=>{
        if(e.getAttribute('contenteditable') == 'true'){
            if(e.getAttribute('already') == 'yes'){
                console.log('Already')
                //return false
            }
                var mainElement = e
                mainElement.style.position = 'relative';
                mainElement.style.width = 'fit-content'
                
                var circle = document.createElement('editIcon')
                circle.innerHTML = `<i class='fas fa-pen'></i>`
                circle.setAttribute('onClick', "this.previousElementSibling.focus()")
                var textNode = document.createElement(mainElement.tagName)
                textNode.textContent = mainElement.textContent
                //console.log(textNode)
                textNode.setAttribute('contenteditable', 'true')
                textNode.setAttribute('already', 'yes')
                textNode.setAttribute('oninput', mainElement.getAttribute('oninput'))
                textNode.id = mainElement.id
                textNode.className = mainElement.className
                textNode.style.display = 'inline'
                //textNode.style.padding = '0px'
                // console.log(getComputedStyle(mainElement).fontSize)
                textNode.style.fontSize = `${getComputedStyle(mainElement).fontSize}`
                mainElement.innerHTML = ''
                mainElement.appendChild(textNode)
                circle.className = 'circle'
                mainElement.appendChild(circle)
                mainElement.removeAttribute('contenteditable')
                mainElement.id = ''
                
                //console.dir(e.clientWidth)
            //console.log(e)
        }
    })
    
    // if(e.target.getAttribute('contenteditable') == 'true'){
    //     var mainElement = e.target
    //     var circle = document.createElement('div')
    //     circle.className = 'circle'
    //     mainElement.appendChild(circle)
    //     console.dir(e.target.clientWidth)
    // }
}


//----Print Page ------------------

var printPageBtn = document.querySelector('.printPage')
var logoPen = document.querySelector('#logoPen')
printPageBtn.addEventListener('click', printPage)

function printPage(){
    // saveCompanyData()
    console.log('Print')
    document.body.querySelectorAll('.circle').forEach((e)=>{
        e.style.display = 'none'
    })
    // addItem.style.display = 'none'
    logoPen.style.display = 'none'
    this.style.display = 'none'
    window.print()
    document.body.querySelectorAll('.circle').forEach((e)=>{
        e.style.display = 'flex'
    })
    logoPen.style.display = 'inline'
    // addItem.style.display = 'inline'
    this.style.display = 'flex'

}
document.body.querySelectorAll('.circle').forEach((e)=>{
    e.style.display = 'none'
})

//_______________________>>>>>>

//---------Change Logo------------------------>>
var logo = document.getElementById('logosource')
var fileInput = document.getElementById('file')

logo.addEventListener('click', changeLogo)

function changeLogo(){
    fileInput.click()
    fileInput.onchange = function(i){
        var filer = i.target.files[0];
        if( filer.size > 2000000){
            alert('Max image size is 2Mb!')
            return false
        }                      
        var reader = new FileReader();
        reader.onload = function(file) {
        console.log('Logo Changed!')
        logo.src = file.target.result
        }
        reader.readAsDataURL(filer)
}
}

//______________________________________>>>>>>



//User Login

var login = document.getElementById('login')
var username = document.getElementById('username')
var password = document.getElementById('password')
var error = document.getElementById('error')
var user_login = document.querySelector('.user_login')

var default_username = 'admin'
var default_password = 123456

login.addEventListener('click', ()=>{
    if(username.value == '' || password.value == ''){
        error.textContent = 'Please fill all fields!'
        return false
    }

    if(username.value != default_username || password.value != default_password){
        error.textContent = 'Username or password are incorrect!'
        return false
    }

    error.textContent = 'Successfully logged in, redirect to generator!'
    setTimeout(() => {
        user_login.remove()
    }, 1000);
    
})