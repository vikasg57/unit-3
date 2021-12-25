document.querySelector('.button').addEventListener('click',showtask)

var taskarray= JSON.parse(localStorage.getItem("taskarray")) || []
ondisplay()

function showtask(){
var taskname=document.querySelector('#taskname').value


function creattask(el){
    this.task=el
    this.date = Date()
    this.status=false;
    
}
 var task1= new creattask(taskname)

 taskarray.push(task1)
 localStorage.setItem("taskarray",JSON.stringify(taskarray))
console.log(taskarray)

ondisplay()

}


function ondisplay(){
    document.querySelector('.main').textContent=""
 document.querySelector(".total").textContent=  "task to do:"+taskarray.length
    taskarray.map(function(el,i){
        var head= document.createElement('p')
        head.textContent= "Task:" +el.task
        var head2=document.createElement('p')
        head2.textContent="Date:"+el.date
        var head3=document.createElement('p')
        head3.textContent="Status:"+el.status
        var butt=document.createElement('button')
        butt.innerHTML="toggle task"

        butt.addEventListener('click',toggle)

        function toggle(){

            if( head3.textContent=="Status:"+el.status){
            head3.innerHTML="Status:"+"true"

            }
            else{
                head3.textContent="Status:"+el.status
            
            }
        }

        var butt2=document.createElement('button')
        butt2.innerHTML="Done"
        var butt3=document.createElement('button')
        butt3.innerHTML="Remove"

        butt3.addEventListener('click',function(){
            remove(i)
        })
         butt2.addEventListener('click',function(){
            // done(el)
         head2.style.textDecoration="line-through";
         head.style.textDecoration="line-through";
         head3.style.textDecoration="line-through";

        })

        document.querySelector('.main').append(head,head2,head3,butt,butt2,butt3)
    })
}

function remove(i){
    console.log(i)
    taskarray.splice(i,1)
    localStorage.setItem("taskarray",JSON.stringify(taskarray))

    ondisplay()

}

// function done(el){
//     console.log(el)
//     head.style.textDecoration="strikethrough";



// }


