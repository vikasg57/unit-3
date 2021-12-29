
    var mac=[]
    var final=[]
    function additems(n,ig,pr){
        this.name=n
        this.image=ig
        this.price=pr
        this.id=Math.floor((Math.random()*10)+1);
    }

    var pro1= new additems("Combo","https://assets.grab.com/wp-content/uploads/sites/8/2019/03/12120002/chicken-grilled-mcdonalds-burger-delivery-700x700.jpg","300")
     var pro2 = new additems("Hotdog","https://4.bp.blogspot.com/-oaYD19Fa4iU/V8fFOvtHisI/AAAAAAAAZl8/Q-MHk__UDKc9kvsC84gyPtUHhmuQZdWPwCLcB/s640/mcD.jpg","230")
      var pro3 = new additems("Chicken burger","https://www.mcdonalds.com.my/storage/foods/September2019/lojYE6LgUCgHSTdBHxC1.png","342","12")
       var pro4 = new additems("Fries","https://www.mcdonalds.com/content/dam/usa/nfl/nutrition/items/regular/desktop/t-mcdonalds-Fries-Small-Medium.jpg","60")
        var pro5 = new additems("Mexican fries","https://i.ytimg.com/vi/FaRGi-pXNko/maxresdefault.jpg","120")


        mac.push(pro1,pro2,pro3,pro4,pro5)
         

     function ondisplay(){
         document.querySelector('.main').innerHTML=null

         mac.map(function(el){
            let div = document.createElement('div')
             div.setAttribute('class', "box")

             let div2 = document.createElement('div')
             
             let title = document.createElement('h2')
            
             let img = document.createElement('img')
             img.src=el.image
             let info = document.createElement('div')
             let imgdiv = document.createElement('div')
             imgdiv.setAttribute('class', "imagediv")
             let pr=document.createElement('h4')
             let toggle=document.createElement('input')
             toggle.setAttribute('type',"checkbox")

             let id = document.createElement('h4')
             id.textContent= "Order Id : "+el.id
             title.textContent=el.name
             pr.textContent="Price: ₹"+el.price

             imgdiv.append(img)
             div2.append(title)

             div.append(imgdiv,div2,pr,id,toggle)

             document.querySelector('.main').append(div)

             toggle.addEventListener('change',function(){

                if(toggle.checked){
                    // console.log(el)
                    order(el)
                }
                
             })

            //  let res = ""
            //  var check = document.querySelectorAll('input').values
            //  var che=document.querySelectorAll('input')

            //      if (check == check.checked) {
            //          res = true
            //      }
            //      else {
            //          res = false
            //      }



            //      console.log(res)

             document.querySelector('.button').style.display = "block"
         })
         
        }

        ondisplay()

                function placeorder(){
                    document.querySelector('.main').innerHTML = null
                    document.querySelector('.button').style.display="none"

                    let myPromise=new Promise(function(resolve,reject){
                        setTimeout(function(){
                            if(final.length>0){
                                resolve(final.map(function (el) {
                                    let div = document.createElement('div')
                                    div.setAttribute('class', "box")
                                    let div2 = document.createElement('div')
                                    let title = document.createElement('h2')
                                    let img = document.createElement('img')
                                    img.src = el.image
                                    let info = document.createElement('div')
                                    let imgdiv = document.createElement('div')
                                    imgdiv.setAttribute('class', "imagediv")
                                    let pr = document.createElement('h4')
                                    let id = document.createElement('h4')
                                    id.textContent = "Order Id : " + el.id
                                    title.textContent = el.name
                                    pr.textContent = "Price: ₹" + el.price

                    imgdiv.append(img)
            div2.append(title)

            div.append(imgdiv, div2, pr, id)

            document.querySelector('.main').append(div)


        })+"order sucessful")
    }
    else{
        reject("please select product")
     }
    },5000)
});

    myPromise.then(function(res){
    alert(res)
})

     myPromise.catch(function(res){
        alert(res)
        ondisplay()
    })
  
}



function order(el){
    final.push(el)
    console.log(final)




}


