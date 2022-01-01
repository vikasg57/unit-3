

     let url = "https://www.omdbapi.com/?t="
   
     let apikey= "&apikey=503116dc"
    async function getmovie(movie) {
        try {
            let res = await fetch(url+movie+apikey)
            let data = await res.json()
            let users = data
            console.log(users)
            if(users.Response === 'False'){
                error()

            }
            else{
                ondisplay(users)
            }
        }
        catch (err){
             console.log(err)

             error()
             
            }
        }


    document.querySelector('#button').addEventListener('click',search)

    function search(){
        let movie = document.querySelector('#movie').value
        console.log(movie)
        getmovie(movie)

    }

    function ondisplay(users){
        document.querySelector('.main').innerHTML=null

        let div = document.createElement('div')
        div.setAttribute('class',"box")

        let div2 = document.createElement('div')
        div2.setAttribute('class', "imagediv")

        let title=document.createElement('h1')
         title.textContent=users.Title

        let image=document.createElement('img')
        image.setAttribute('class',"poster")
        image.src=users.Poster

        let year = document.createElement('p')
        year.textContent = "Year : "+users.Year

         let rating = document.createElement('p')
        rating.textContent = "Imdb Rating : " +users.imdbRating


        let rate= +(users.imdbRating)


        let lang = document.createElement('p')
        lang.textContent ="Language : "+ users.Language

        let genre = document.createElement('p')
        genre.textContent ="Genre : "+ users.Genre

         let director = document.createElement('p')
        director.textContent ="Director : "+ users.Director
        let info=document.createElement('div')
        info.setAttribute('class',"info")

        info.append(title,year,rating,lang,genre,director)

        div2.append(image)
        div.append(info,div2)

        document.querySelector('.main').append(div)

        console.log(users.title)

        if (rate > 8) {

            let tag = document.createElement('img')
            tag.setAttribute('class',"tag")
            tag.src = "http://assets.stickpng.com/images/5eaa8f7f0494d70004e7fa04.png"

            div.append(div2, title, tag, year, rating, lang, genre, director)

            console.log("enter")
        }


    }

    function error(){
        console.log("vikas")
         document.querySelector('.main').innerHTML = null
        let p1 = document.createElement('p')
        p1.textContent = "MOVIE NOT FOUND"
      

        let errimage= document.createElement('img')
         errimage.src = "https://upload.wikimedia.org/wikipedia/commons/3/34/ErrorMessage.png"

         errimage.setAttribute('class',"errimage")


       
         let div= document.createElement('div')
         div.setAttribute('class',"box")

         div.append(errimage,p1)
        
        document.querySelector('.main').append(div)

        


    }


  


   


