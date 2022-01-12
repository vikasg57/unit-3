
async function getdata(url){
    try{
        let res = await fetch(url)
        let data= await res.json()
        return data
    }
    catch(er){
        console.log(er)

    }

}


// import{getdish} from './fooddapp/index.html'

function searchresult(data,location){
     document.querySelector('#results').style.height="300px"
    location.innerHTML=null

    

    //location as a argument so we can append data on any location 

    data.map((el)=>{
        let{strArea,strMealThumb,strMeal}=el



        let div=document.createElement('div')
        div.setAttribute('class',"searchbox")
        // let imgdiv=document.createElement('div')
        // imgdiv.setAttribute('class',"imgdiv")
        let infodiv=document.createElement('div')
        infodiv.setAttribute('class',"infodiv")
        let area=document.createElement('h5')
        area.innerHTML=strArea
        let img=document.createElement('img')
        img.src=strMealThumb
        let title=document.createElement('h3')
        title.innerHTML=strMeal
        infodiv.append(title)
        div.append(img,infodiv)

        location.append(div)

        div.addEventListener('click',function(){
            getitem(el,maindiv)
        })
       


    })

     
}

let getitem=(el,location)=>{
    
    console.log(el)
   

     let{strArea,strMealThumb,strMeal}=el

     console.log(strArea,strMeal,strMealThumb)

     console.log(el.strArea)
        let div=document.createElement('div')
        div.setAttribute('class',"mainbox")
         let infodiv=document.createElement('div')
        infodiv.setAttribute('class',"maininfodiv")
         let area=document.createElement('h3')
        area.innerHTML=strArea
        let img=document.createElement('img')
        img.src=strMealThumb
        let title=document.createElement('h3')
        title.innerHTML=strMeal


        infodiv.append(title,area,)

        div.append(img,infodiv)

        location.append(div)


}

let populardish=(items,location)=>{

    items.map((el)=>{
                 let{strArea,strMealThumb,strMeal}=el

     console.log(strArea,strMeal,strMealThumb)

     console.log(el.strArea)
        let div=document.createElement('div')
        div.setAttribute('class',"mainbox")
         let infodiv=document.createElement('div')
        infodiv.setAttribute('class',"maininfodiv")
         let area=document.createElement('h3')
        area.innerHTML=strArea
        let img=document.createElement('img')
        img.src=strMealThumb
        let title=document.createElement('h3')
        title.innerHTML=strMeal


        infodiv.append(title)

        div.append(img,infodiv)

        location.append(div)

    })



}


 function randomrecipe(data, location) {
        location.innerHTML = null


        //location as a argument so we can append data on any location 

        data.map((el) => {

            let{strArea, strMeal, strMealThumb,strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5,strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5,strInstructions}=el
            

            let div = document.createElement('div')
            div.setAttribute('class',"main")
            
            let imgdiv=document.createElement('div')
            imgdiv.setAttribute('class',"imgdiv")
            let infodiv = document.createElement('div')
            infodiv.setAttribute('class',"infodiv")
          
            let area = document.createElement('h3')
            area.innerHTML = `Country of origin :${strArea} ` 
            let img = document.createElement('img')
            img.setAttribute('class',"mainimg")
            img.src =strMealThumb
            let title = document.createElement('h1')
            title.innerHTML = strMeal
             
             let ing=document.createElement('h4')
             ing.textContent="Ingredients : "
              let rec = document.createElement('h4')
            rec.textContent = "Recipe : "
       
             let ingdiv = document.createElement('div')

            let ingredient = document.createElement('p')
            ingredient.textContent=strIngredient1 +" : "+ strMeasure1
            let ingredient2 = document.createElement('p')
            ingredient2.textContent = strIngredient2+" : " + strMeasure1
            let ingredient3 = document.createElement('p')
            ingredient3.textContent = strIngredient3+" : " + strMeasure1
            let ingredient4 = document.createElement('p')
            ingredient4.textContent = strIngredient4+ " : " + strMeasure1
            let ingredient5 = document.createElement('p')
            ingredient5.textContent = strIngredient5+ " : " + strMeasure1



            let recipe=document.createElement('p')
            recipe.textContent=strInstructions
            recipe.setAttribute('class',"recipe")

            // let measurediv = document.createElement('div')

         
            ingdiv.setAttribute('class', "measurediv")



            ingdiv.append(ingredient,ingredient2,ingredient3,ingredient4,ingredient5)

            imgdiv.append(img)
            infodiv.append(title, area,ing,ingdiv,rec,recipe)
            div.append(imgdiv, infodiv)

            location.append(div)


        })
    }

    let hidebox=(body,box)=>{
        
      body.addEventListener('click',function(){
             document.querySelector('#results').style.height= "0px"
        })
        box.addEventListener('click',function(){
            document.querySelector('#results').style.height = "300px"
        })

    }

    let searchdata;

    function debounce(fu){

     
        if(searchdata){
            console.log(searchdata)
            clearTimeout(searchdata)
        }


       searchdata=setTimeout(function(){
          fu()

        },1000)


       
            
    }


    

    

    function userinfo(location){
          var userdata= JSON.parse(localStorage.getItem('userdata')) || {name:"log in first",email:"log in first"}

         let {name,email}=userdata
        

         let title= document.createElement('h3')
         title.textContent= `Hello ! ${name}`

          let mail= document.createElement('h3')
         mail.textContent= `Email: ${email}`
          console.log(title )

         location.append(title,mail)

    }

export {getdata,searchresult,getitem,populardish,randomrecipe,hidebox,debounce,searchdata,userinfo}
