
async function searchMovie() {

        try {

            // let movie = document.querySelector('#movie').value

            // if (movie.length <= 2) {
            //     return false
            // }

            let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=64472ca5f173a35490e0de548ba55cf1&language=en-US&page=1`);

            let data = await response.json()

            let movie_arr = data.results

            console.log(movie_arr)
            ondisplay(movie_arr)
            
        }
        catch (err) {
            console.log(err)
}
}

searchMovie()

function ondisplay(movie_arr){

    
    document.querySelector('.main').innerHTML = null


    movie_arr.map(function(el){

        let div = document.createElement('div')
        div.setAttribute('class', "subdiv")
        let div2 = document.createElement('div')
        div2.setAttribute('class',"infodiv")


        let title = document.createElement('h2')
        let image = document.createElement('img')
        let release = document.createElement('h3')
        let overview = document.createElement('p')
        title.innerHTML =el.title
        release.innerHTML=`In cinemas :${el.release_date}`
        overview.innerHTML=el.overview
        image.src= `https://image.tmdb.org/t/p/w400${el.poster_path}`

        div2.append(title,release,overview)
        div.append(div2,image)
        document.querySelector('.main').append(div)

    })



 



}