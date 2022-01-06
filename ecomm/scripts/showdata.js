async function getdata(url){
    // url as a argument for making it dyanamic.


    try{
         let res =await fetch(url)
    let data = await res.json()
    return data

    }
    catch(er){
        console.log(er)
    }
   
}


function appenddata(data,location){

    //location as a argument so we can append data on any location 

    data.map((el)=>{
        let{title,image}=el
        let div= document.createElement('div')
        let p = document.createElement('p')
        p.innerHTML=title

        let img=document.createElement('img')
        img.src=image

        div.append(img,p)

        location.append(div)


    })

}

export {getdata,appenddata}