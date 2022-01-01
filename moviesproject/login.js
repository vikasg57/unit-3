
    var info = JSON.parse(localStorage.getItem("infofilms")) || []

    function filmsinfo(name, poster, date, rating) {

        this.name = name,
            this.date = date,
            this.poster = poster,
            this.rating = rating
    }

    var filmsobj =  new filmsinfo("Spiderman", "https://play-lh.googleusercontent.com/WSwCwp6UXhp0PTBscvBwLel6MFlEjTXTOpXnkLyOw-RkUmszMROPup3pe65cgdrsybCJ", "20/12/2021", "7")
    var filmsobj2 = new filmsinfo("Sooryavanshi", "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sooryavanshi-et00097952-27-10-2021-05-17-20.jpg", "20/11/2021", "6")
    var filmsobj3 = new filmsinfo("Warning", "https://m.media-amazon.com/images/M/MV5BYmEzYjE0NGQtZTg1Ni00NDFmLWExZDYtNTZjNDdlMmE3NWFiXkEyXkFqcGdeQXVyOTg4MDYyNw@@._V1_.jpg", "25/12/2021", "9")
    var filmsobj4 = new filmsinfo("Sensation", "https://m.media-amazon.com/images/M/MV5BMTRmMDgxNjQtMzg4Yy00N2VkLWFhZWEtZDI4MDdlOTk0NWFkXkEyXkFqcGdeQXVyODg4ODAwMTQ@._V1_.jpg", "12/05/2021", "5")
    var filmsobj5 = new filmsinfo("RRR", "https://www.cinejosh.com/newsimg/newsmainimg/rrr-censor-completed_b_2611210420.jpg", "15/03/2022", "6")
    var filmsobj6 = new filmsinfo("83", "https://cdn.bollywoodmdb.com/movies/largethumb/2018/83/poster.jpg", "24/12/2021", "7")
    var filmsobj7 = new filmsinfo("Pushpa", "https://www.cinejosh.com/newsimg/newsmainimg/thaggede-le-pushpa-crosses-50m-milestone_b_2704210722.jpg", "24/12/2021", "6")
    var filmsobj8 = new filmsinfo("Jay Bhim", "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg", "04/10/2021", "9")
    var filmsobj9 = new filmsinfo("Red Notice", "https://cdn06.pramborsfm.com/storage/app/media/Prambors/Editorial/red%20notice-20211022133047.jpg?tr=w-800", "30/08/2021", "8")
    info.push(filmsobj, filmsobj2, filmsobj3, filmsobj4, filmsobj5, filmsobj6, filmsobj7, filmsobj8, filmsobj9)

   

    document.querySelector("#button").addEventListener('click', login)
    var arr1 = JSON.parse(localStorage.getItem("arr1"))
    console.log(arr1)

    // var arr2 = []
    function login() {
        var name = document.querySelector("#name").value
        var email = document.querySelector("#email").value
        var password = document.querySelector("#pass").value

        // var logindata = {
        //     name: name,
        //     email: email,
        //     password: password
        // };

        // arr2.push(logindata)
        // localStorage.setItem("arr2", JSON.stringify(arr2))
        // console.log(arr2);

            for (var i = 0; i < arr1.length; i++) {
                if (arr1[i].name == name && arr1[i].email == email && arr1[i].password == password) {
                    alert("login successful")
                    window.location.href = "home.html"
                    break
                }
                else {
                    alert("login failed")
                    break
                }
            }
        
         localStorage.setItem("infofilms", JSON.stringify(info))

    }

