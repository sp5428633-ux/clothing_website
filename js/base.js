 var cartcount=0;
function count(btn){
    cartcount++;
    document.getElementById('cart-count').innerText = cartcount;

   btn.innerText = "Added";
    btn.classList.remove("btn-dark");
    btn.classList.add("btn-success");

    // alert message
    alert("Item added to cart");
   
}

 document.getElementById('year').innerText=new Date().getFullYear();