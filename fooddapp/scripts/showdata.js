
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
    location.innerHTML=null
    

    //location as a argument so we can append data on any location 

    data.map((el)=>{



        let div=document.createElement('div')
        div.setAttribute('class',"searchbox")
        // let imgdiv=document.createElement('div')
        // imgdiv.setAttribute('class',"imgdiv")
        let infodiv=document.createElement('div')
        infodiv.setAttribute('class',"infodiv")
        let area=document.createElement('h5')
        area.innerHTML=el.strArea
        let img=document.createElement('img')
        img.src=el.strMealThumb
        let title=document.createElement('h3')
        title.innerHTML=el.strMeal
        infodiv.append(title,area)
        div.append(img,infodiv)

        location.append(div)


    })
}

export {getdata,searchresult}
