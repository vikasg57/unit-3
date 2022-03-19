
function header(){

    return `

    
    <div id="userinfo">
        
    </div>
     <div id="header">
     <h1><a href="index.html">FOOD POINT</a></h1>
    
        
        <input type="text" name="" placeholder="search dish..."  id="searchdish">
    
        <div id="options">
            <h3><a href="index.html">Home</a></h3>
            <h3><a href="recipe.html">Recipe of the day</a></h3>
            <h3><a href="search.html">Search</a></h3>
            <h3><a href="login.html">Log In</a></h3>
            <h3><a href="signup.html">Sign Up</a></h3>
        </div>
    </div>`
}

function headerlogin(){

    return `
    <div id="userinfo">
        
    </div>
     <div id="header">
     <h1><a href="index.html">FOOD POINT</a></h1>
    
        
       
    
        <div id="options">
            <h3><a href="index.html">Home</a></h3>
            <h3><a href="recipe.html">Recipe of the day</a></h3>
            <h3><a href="search.html">Search</a></h3>
            <h3><a href="login.html">Log In</a></h3>
            <h3><a href="signup.html">Sign Up</a></h3>
        </div>
    </div>`
}

export {header,headerlogin } 
