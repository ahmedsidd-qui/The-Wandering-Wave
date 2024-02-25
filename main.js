// const timing = document.getElementById("opening-hour");
// const timingInfo = document.getElementById( "timing-info" );

// function showtime() {
//     const timingData = document.innerHTML = "<div id='opening-time'><p>Monday - Sunday</br>06:00PM - 01:00AM</p></div>";
//     timingInfo.textContent = timingData
//     timingInfo.style.display = "block";
//     timingInfo.style.color = "white"
// }

// timingInfo.style.display = "none";

// timing.addEventListener( 'mouseover', showtime);
// timing.addEventListener( 'mouseout', ()=>{
//     timingInfo.style.display = "none";
// })

let productdata = [
   {
    productname : "Pimms Jug",
    price :  30,
    image : "/assets/product1.jpg"
   },
   {
    productname : "Coco Spice",
    price : 40,
    image : "/assets/product2.jpg"
   },
   {
    productname : "Punch",
    price : 40,
    image : "/assets/product3.jpg"
   },
   {
    productname : "Punja",
    price : 40,
    image : "/assets/product4.jpg"
   },
   {
    productname : "Pimms Jug",
    price :  30,
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
