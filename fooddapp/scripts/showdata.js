
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

function searchresult(data,location){
     document.querySelector('#results').style.opacity="1"
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





export {getdata,searchresult,getitem}
