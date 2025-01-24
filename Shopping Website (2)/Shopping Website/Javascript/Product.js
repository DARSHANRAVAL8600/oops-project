// const cards = [
//     {
//         id : 1 , 
//         catgory : "Men",
//         cloth : "Women's Blouse Top" , 
//         img : "https://assets.ajio.com/medias/sys_master/root/20240725/fLC3/66a254b31d763220fa289303/-473Wx593H-700229010-brown-MODEL.jpg",
//         price : "$53.55" , 
//         dcprice : "68.88" , 

//     },
//     {
//         id : 2,
//         catgory : "Men",
//         cloth : "GeoCubique White Printed T-Shirt", 
//         img : "https://www.snitch.co.in/cdn/shop/files/4MSS2823-03-M13.jpg?v=1723029576",
//         price : "$1,119" ,
//         dcprice : "$1500" , 
//     },
//     {
//         id : 3,
//         catgory : "Men",
//         cloth : "Dark Green Zipper Pocket Overshirt", 
//         img : "https://www.snitch.co.in/cdn/shop/files/4MSD3746-02-326.jpg?v=1723099093",
//         price : "$150" ,
//         dcprice : "$200" , 
//     },
//     {
//         id : 4,
//         catgory : "Men",
//         cloth : "Dark Blue Zipper Pocket Overshirt", 
//         img : "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2823-01-M1.jpg?v=1723041335",
//         price : "$19" ,
//         dcprice : "$25" , 
//     },
//     {
//         id : 5,
//         catgory : "Men",
//         cloth : "Superflex Mauve Shirt", 
//         img : "https://www.snitch.co.in/cdn/shop/files/4MSS1216-06-M31_ce27f520-cffa-4742-9b9a-cf37b42df283.jpg?v=1688194678",
//         price : "$27" ,
//         dcprice : "$42" , 
//     },
//     {
//         id : 6,
//         catgory : "Women",
//         cloth : "Women Ribbed Fitted Top", 
//         img : "https://assets.ajio.com/medias/sys_master/root/20240715/8khM/669550fa6f60443f313ecda9/-473Wx593H-700193731-coffee-MODEL4.jpg",
//         price : "$10" ,
//         dcprice : "$22" , 
//     },
//     {
//         id : 7,
//         catgory : "Women",
//         cloth : "GeoCubique White Printed T-ShirtWomen Colourblock Loose Fit Round-Neck Top", 
//         img : "https://assets.ajio.com/medias/sys_master/root/20240706/fMH7/66889d736f60443f318b55f9/-473Wx593H-700167510-white-MODEL4.jpg",
//         price : "$40" ,
//         dcprice : "$54" , 
//     },
//     {
//         id : 8,
//         catgory : "Women",
//         cloth : "Women Printed Regular Fit Top", 
//         img : "https://assets.ajio.com/medias/sys_master/root/20240502/3odU/6632a08d16fd2c6e6ae07d3c/-473Wx593H-467293065-blue-MODEL3.jpg",
//         price : "$34" ,
//         dcprice : "$56" , 
//     },
//     {
//         id : 9,
//         catgory : "Women",
//         cloth : "Women Relaxed Fit V-Neck Top with Puff Sleeves", 
//         img : "https://assets.ajio.com/medias/sys_master/root/20231120/6oPC/655b6308afa4cf41f5925119/-473Wx593H-466811522-lavender-MODEL3.jpg",
//         price : "$76" ,
//         dcprice : "$100" , 
//     },
//     {
//         id : 10,
//         catgory : "Women",
//         cloth : "Women Striped Relaxed Fit Round-Neck Top", 
//         img : "https://assets.ajio.com/medias/sys_master/root/20240510/nscB/663e15a505ac7d77bb506a14/-473Wx593H-443044632-offwhite-MODEL4.jpg",
//         price : "$23" ,
//         dcprice : "$34" , 
//     },
// ]
// let basket = JSON.parse(localStorage.getItem("data")) || [];

// const container = document.querySelector(".container");
// const btns = document.querySelectorAll("#btn");

// window.addEventListener("DOMContentLoaded" , () => {
//     cardDOMContent(cards);
//     btnsFilter();
   
//   })

//   function btnsFilter () {
//     btns.forEach((btn) =>{
//     btn.addEventListener("click" , (e) =>{
//      const targetbtn = e.currentTarget.name;
    
//     const catgoryFilter = cards.filter((menuItems) =>{ 
//         console.log(menuItems.catgory);
//         if(menuItems.catgory === targetbtn){
//             return menuItems;
            
            
            
//         }
//     }) 
    
//     console.log(catgoryFilter);
    
//       if (targetbtn === "All"){
//         return cardDOMContent(cards);
//       }
//       else{
    
//         return cardDOMContent(catgoryFilter);
    
//       }
//     })
    
//     })
    
//     }


// function cardDOMContent (menu) {
//     const displayMenu = menu.map((element) => {
  
//         return ` <div class="col-md-4 col-sm-6 ">
//                 <div class="product-grid">
//                     <div class="product-image">
//                         <a href="#" class="image">
//                             <img src="${element.img}">
//                         </a>
//                         <span class="product-discount-label">-23%</span>
//                         <ul class="product-links">
//                             <li><a href="#"><i class="fa fa-search"></i></a></li>
//                             <li><a href="#"><i class="fa fa-heart"></i></a></li>
//                             <li><a href="#"><i class="fa fa-random"></i></a></li>
//                         </ul>
//                         <button  class="add-to-cart"  name="${element.id}">Add to Cart</button>
//                     </div>
//                     <div class="product-content">
//                         <h3  class="title"><a href="#">${element.cloth}</a></h3>
//                         <div class="price">${element.price}<span>${element.dcprice}</span></div>
//                     </div>
//                 </div>
//             </div>`
//       })
//      const contentJoin = displayMenu.join("");
//      container.innerHTML = contentJoin ;

//      const addCart = document.querySelectorAll(".add-to-cart")
//      addCart.forEach((e) => {
//         e.addEventListener("click" , () =>{
//             const cart = cards.filter((item) => {  
//        if(e.name == item.id){
//         return item;
//        }
//             })
            
//            basket.push(cart);
//             localStorage.setItem("data", JSON.stringify(basket));
//         })
//     })
    
// }
// console.log(basket);


   
     