const topButton = document.getElementById("topButton");
  window.onscroll = function() { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      topButton.style.opacity = 1;
    } else {
      topButton.style.opacity = 0;
    }
  }

  topButton.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const nav = document.getElementById("nav");
  window.onscroll = function() { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      nav.style.backgroundColor = "#000";
    } else {
      nav.style.backgroundColor = "transparent";
    }
  }
let productdata = [
   {
    productname : "The Baconator",
    price :  30,
    image : "/assets/product1.jpg"
   },
   {
    productname : "The Mushroom Melt",
    price : 40,
    image : "/assets/product2.jpg"
   },
   {
    productname : "Punch",
    price : 20,
    image : "/assets/product3.jpg"
   },
   {
    productname : "The Blazin' Buffalo",
    price : 45,
    image : "/assets/product4.jpg"
   },
   {
    productname : "Pimms Jug",
    price :  44,
    image : "/assets/product5.jpg"
   },
   {
    productname : "Coco Spice",
    price : 40
   },
   {
    productname : "Punch",
    price : 40
   },
   {
    productname : "Punja",
    price : 40
   },

]

for (let index = 0; index < 4; index++) {
    document.getElementById("product-detail").innerHTML += `
    <div class="card">
    <img src="${productdata[index].image}" alt="">
    <h3>${productdata[index].productname}</h3>
    <h5>${productdata[index].price}£</h5></div>`;
}
