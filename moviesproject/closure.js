



let movies_div=document.querySelector("#movies")

let movie_wait;

async function searchMovie(){

    try{

    let movie=document.querySelector('#movie').value

    if(movie.length<=2){
        return false
    }

    let response = await fetch(`http://www.omdbapi.com/?apikey=503116dc&s=${movie}`);

    let data =await response.json()

    let movie_arr = data.Search

    appendmovies(movie_arr)

    console.log(data)
    }
    catch(err){
        console.log(err)
    }

}


function appendmovies(movies){

    if(movies==undefined){
        return false
    }

    movies_div.innerHTML=null

    movies.map(function(el){
        let p =document.createElement('p')

        p.innerHTML= el.Title

        p.addEventListener('click',function(){
            document.querySelector('#movies').style.height = "0px"
            openmovie(el)

        })


        movies_div.append(p)

    })
}


function debounce(fu,delay){
    document.querySelector('#movies').style.height="200px"

    if(movie_wait){
        clearTimeout(movie_wait)
    }


    movie_wait=setTimeout(function(){
        fu()

    },delay)

    

}
   

function openmovie(el){
    console.log(el)
    let div = document.createElement('div')
    let img=document.createElement('img')
    let title=document.createElement('h2')
    let year=document.createElement('p')

    //    let rating = document.createElement('p')
    // rating.textContent = `Imdb Rating : ${el.imdbRating}`



    // let lang = document.createElement('p')
    // lang.textContent = "Language : " + users.Language

    // let genre = document.createElement('p')
    // genre.textContent = "Genre : " + users.Genre

    img.src=el.Poster
    title.innerHTML=el.Title
    year.innerHTML=el.Year
    div.append(img,title,year)

    document.querySelector('.mainbox').append(div)
}

setTimeout(function(){
    


},5000)
