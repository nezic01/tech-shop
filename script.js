let fullname = document.getElementById('fname');
let email = document.getElementById('email');
let product_description = document.getElementById('product_description');
function checkName(){
   


     for(let i = 0; i<fullname.value.length;i++){
if (!(isNaN(fullname.value[i]))){
    alert("First name only can have letters")
    break;
    
}


    }
}

function checkLength(arr){
    return arr.length == 0;

}
function checkEmail(){
            if(!(email.value.includes('@'))){
                alert('Email must have @')
            }
            else if(email.value[0]=='@'){
                alert('Email can not start with @')
            }
            else if ((checkLength(email.value))){
                alert('Enter your email!')
               } 
        
      
       
    }
    function checkProductDescription(){
        if(product_description.value ==null)
            {
                alert('Please describe product you want to buy');
            }
        
    }


