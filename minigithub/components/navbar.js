function navbar(){
    return ` <div id="navbar">
        <div id="logo"> 
            <a href=""><img src="https://avatars.githubusercontent.com/u/9919?s=200&v=4
" alt="logo"></a>
          
        </div>
        <div id="search">

            <input type="text" id="search-input" placeholder="search github">

        </div>

        <div id="options">
            <ul id="list">
                <li> Pull Requests</li>
                <li>Issues</li>
                <li>Marketplace</li>
                <a href="explore.html"><li>Expolre</li></a>

            </ul>
        </div>

        <div id="profile">
            <img  src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" alt="" id="profile-img">

        </div>

    </div>`
}

export {navbar}


