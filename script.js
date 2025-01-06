var sts = document.querySelector("h5")

var btn = document.querySelector("#add")


var check = 0

// var remvFrnd = document.querySelector("#remove")

btn.addEventListener("click", function(){

    if( check == 0){
        sts.innerHTML= "Friend"
        sts.style.color= "Green"
        btn.innerHTML = "Remove Frend"
       
        
        check = 1

    }

    else{
        sts.innerHTML= "Stranger"
        sts.style.color= "red"
        btn.innerHTML = "Friend"
         
        check = 0
    }
    
})

// remvFrnd.addEventListener("click",function(){
//     sts.innerHTML= "Stranger"
//     sts.style.color= "red"
// })
