
document.querySelector('.bitton').addEventListener('click',shownum)

function shownum(){
    document.querySelector('.main').innerHTML=""

   
    let num = Math.floor(Math.random()*6+1)
    
    var h1= document.createElement('h1')
    h1.textContent=num

    if(num==1){
        h1.style.color="red"
    }
     if(num==6){
        h1.style.color="green"
    }
     if(num==2){
        h1.style.color="brown"
    }
     if(num==3){
        h1.style.color="blue"
    }
     if(num==4){
        h1.style.color="#ffc929"
    }
    document.querySelector('.main').append(h1)

}