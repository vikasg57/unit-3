



document.querySelector(".obj").addEventListener('click',showobj)

function showobj(){
    document.querySelector('.info').innerHTML=""
    var li=document.createElement("li")
    li.textContent="object is non-primitive data type."
    var li2=document.createElement('li')
    li2.textContent="non-primitive data types are mutable."
    var li3=document.createElement("li")
    li3.textContent="All JavaScript values, except primitives, are objects."
    var li4=document.createElement('li')
    li4.textContent="Ex: var data={name:ram,age:21}"
    var li5=document.createElement("li")
    li5.textContent="object is non-primitive"
    var li6=document.createElement('li')
    li6.textContent="object is non-primitive"

    document.querySelector('.info').append(li,li2,li3,li4)
    
}

document.querySelector(".array").addEventListener('click',showarray)

function showarray(){
    document.querySelector('.info').innerHTML=""
    
    var li=document.createElement("li")
   
    li.textContent="array is non-primitive data type."
    var li2=document.createElement('li')
    li2.textContent="non-primitive data types are mutable."
    var li3=document.createElement("li")
    li3.textContent="Array is useful for storing multiple elements."
    var li4=document.createElement('li')
    li4.textContent="Ex: var int= [1,2,3,4,5]"
    var li5=document.createElement("li")
    li5.textContent="object is non-primitive"
    var li6=document.createElement('li')
    li6.textContent="object is non-primitive"

    document.querySelector('.info').append(li3,li,li2,li4)
    
}

document.querySelector(".fun").addEventListener('click',showfun)

function showfun(){
    document.querySelector('.info').innerHTML=""
    var li=document.createElement("li")
    li.textContent="function is non-primitive data type"
    var li2=document.createElement('li')
    li2.textContent="non-primitive data types are mutable"
    var li3=document.createElement("li")
    li3.textContent="When we write function inside the object it is know as method."
    var li4=document.createElement('li')
    li4.textContent="function is a block of code designed to perform specific task"
    var li5=document.createElement("li")
    li5.textContent="Ex: function add(){ a+b}"
    var li6=document.createElement('li')
    li6.textContent="object is non-primitive"

    document.querySelector('.info').append(li4,li,li2,li3,li5)
    
}

document.querySelector(".str").addEventListener('click',showstr)

function showstr(){
    document.querySelector('.info').innerHTML=""
    var li=document.createElement("li")
    li.textContent="String is primitive data type."
    var li2=document.createElement('li')
    li2.textContent="Primitive data types are immutable."
    var li3=document.createElement("li")
    li3.textContent="String literal shown using single or double quotes."
    var li4=document.createElement('li')
    li4.textContent="Strings are useful for holding data that can be represented in text form."
    var li5=document.createElement("li")
    li5.textContent="Ex:var name='vikas'  "
    var li6=document.createElement('li')
    li6.textContent="object is non-primitive"

    document.querySelector('.info').append(li4,li3,li,li2,li5)
    
}

document.querySelector(".num").addEventListener('click',shownum)

function shownum(){
    document.querySelector('.info').innerHTML=""
    var li=document.createElement("li")
    li.textContent="Number is a primitive data type."
    var li2=document.createElement('li')
    li2.textContent="Primitive data types are immutable."
    var li3=document.createElement("li")
    li3.textContent="Value of other type can be converted to number using Number()"
    var li4=document.createElement('li')
    li4.textContent="Number is a primitive wrapper object used to represent and manipulate numbers."
    var li5=document.createElement("li")
    li5.textContent="Ex:var num = 123;"


    document.querySelector('.info').append(li4,li,li2,li3,li5)
    
}

document.querySelector(".null").addEventListener('click',shownull)

function shownull(){
    document.querySelector('.info').innerHTML=""
    var li=document.createElement("li")
    li.textContent="Null is a primitive data type."
    var li2=document.createElement('li')
    li2.textContent="Primitive data types are immutable"
    var li3=document.createElement("li")
    li3.textContent="The value null is written with a literal: null."
    var li4=document.createElement('li')
    li4.textContent="The value null represents the intentional absence of any object value. "
  

    document.querySelector('.info').append(li4,li3,li,li2)
    
}

document.querySelector(".und").addEventListener('click',showund)

function showund(){
    document.querySelector('.info').innerHTML=""
    var li=document.createElement("li")
    li.textContent="Undefined  is a primitive data type."
    var li2=document.createElement('li')
    li2.textContent="Primitive data types are immutable."
    var li3=document.createElement("li")
    li3.textContent="A variable that has not been assigned a value is of type undefined."
    var li4=document.createElement('li')
    li4.textContent="Undefined is a property of the global object. That is, it is a variable in global scope."
  

    document.querySelector('.info').append(li3,li4,li,li2)
    
}





// console.log(this)


// function add(){
//     console.log(this)

// }
// add()




// var obj={
//     name:"show",
//     price:1200,


//   product:function nike(){
//     this.obj
// }
// }
// var pro1= obj.product
// console.log(pro1)

// function nike(u,pro,pri){
//     this.user=u;
//     this.pro=pro;
//     this.price=pri;
// }

// let product= new nike("vikas","shoes")
// console.log(product)



// console.log(arr)

// function newspaper(h){
   
//     this.id=Math.floor(Math.random()*100)
//     this.date= new Date();
//     this.publisher="hindu";
//     this.heading=h
// }
// let n1 = new newspaper("safae efafc defewf")


// for(let i=0;i<100;i++){
//     let n1 = new newspaper("safae efafc defewf")
//     console.log(n1)
// }


// var p={
//     name:"john"
// }

// var p2={
//     name:"michel"
// }

// function ent(){
//     console.log(this.name)
// }

// ent.call(p)
// ent.call(p2)

// var name = "Tony"
// name[0]="J"
// console.log()

// var a=10

// function scope(){
//     var b=20
// }

// scope()

// console.log(a,b)


