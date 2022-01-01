


    
 var imagearray=["https://i.pinimg.com/originals/18/31/a4/1831a4908cd8e20788bf90e5945d83f4.jpg",
     "https://trailerbabu.com/wp-content/uploads/2021/08/bhoot-police-official-movie-trailer-poster-horizontal-movie-release-trailer-babu-2021-1024x538.jpg",
     "https://www.metrotheatres.com/media/2969/smnwh-16000x640.jpg?preset=heropanel",
      "https://www.vitalthrills.com/wp-content/uploads/2021/10/red-notice-trailer.jpg",
     "https://w0.peakpx.com/wallpaper/484/14/HD-wallpaper-ursula-corbero-as-tokyo-in-money-heist-money-heist.jpg",
     "https://www.disneyplusinformer.com/wp-content/uploads/2021/05/Black-Widow-Logo.jpg"]

slideshow()
function slideshow(){


 let div=document.querySelector('.slideshow')
  let img= document.createElement('img')
  img.src=imagearray[0]
  div.append(img)

  let i =0

  id= setInterval(function(){
      if (i==imagearray.length-1){
          i=0
      }
      i++
      img.src=imagearray[i]
      div.append(img)
  },4000)
}

var info= JSON.parse(localStorage.getItem("infofilms")) || []



function ondisplay(){
    document.querySelector('.main').innerHTML=null;

    info.map(function(el){

    let div=document.createElement('div')
    div.setAttribute('class',"box")

    let div2=document.createElement('div')
    let div3=document.createElement('div')
    let title=document.createElement('h2')
    let img= document.createElement('img')
    let info=document.createElement('div')
    let imgdiv=document.createElement('div')
    imgdiv.setAttribute('class',"imagediv")
    let rate= document.createElement('h3')
    let date=document.createElement('h4')
    img.src=el.poster;
    title.textContent=el.name;
    rate.textContent= "IMDB Rating: "+ el.rating+"/10";
    date.textContent= "Release Date: "+el.date;
    div2.append(title)
    div3.append(date,rate)
    info.append(div2,div3)
    imgdiv.append(img)
    div.append(imgdiv,info)

    document.querySelector('.main').append(div)

    })
}

ondisplay()

function sortout(){
    var selected = document.querySelector('#sort').value
    if(selected=="low"){
    info.sort(function (a, b) {
        return a.rating - b.rating
    })
    }
    if (selected == "high") {
        info.sort(function (a, b) {
            return b.rating - a.rating
        })
    }
    ondisplay(info)   
}

