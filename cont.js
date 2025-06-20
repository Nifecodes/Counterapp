let counterr = document.getElementById("count")
 let decreasebn =document.getElementById("decreasebtn")
let increase = document.getElementById("increasebtn")
let count=0;
counterr.textContent=count;
decreasebn.onclick= function(){
   count--
   counterr.textContent=count;
}
increase.onclick= function () {
    count++
       counterr.textContent=count;


}
