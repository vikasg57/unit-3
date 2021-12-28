


    
 var imagearray=["https://images.hdqwalls.com/wallpapers/berlin-money-heist-4k-2020-h0.jpg",
     "https://www.thenewsminute.com/sites/default/files/MoneyHeist_Lacasadepapel_Twitter_1092021_1200.jpg",
     "https://www.koimoi.com/wp-content/new-galleries/2021/08/money-heist-was-bought-by-netflix-for-2-001.jpg",
      "https://cdn.lifestyleasia.com/wp-content/uploads/sites/7/2021/05/25115013/Screen-Shot-2021-05-25-at-11.49.41-am.png",
     "https://w0.peakpx.com/wallpaper/484/14/HD-wallpaper-ursula-corbero-as-tokyo-in-money-heist-money-heist.jpg",
     "https://filmdaily.co/wp-content/uploads/2019/11/money-heist-7-nairobi.jpg"]

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
    document.querySelector('.main').innerHTML=null

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

