let fullname = document.getElementById('fname');
let email = document.getElementById('email');

function checkName(){
   


     for(let i = 0; i<fullname.value.length;i++){
if (!(isNaN(fullname.value[i]))){
    alert("First name only can have letters")
    break;
    
}


    }
}

function checkLength(arr){
    return arr.length === 0;

}
function checkEmail(){
    for(let i = 0;i<email.value.length;i++){
        if(!(email.value[i] =='@')){
            alert('Email address must have @');
            break;
        }
        else if(email.value[0] == '@'){
            alert('Email can not start with @');
            break;
        }
        else if(checkLength(email.value)){
            alert('Please enter your email!');
            break;
        }
       
    }
}
