import navBar from "../components/navbar.js";
import fetchProducts from "../components/fetchProducts.js";
import displayProducts from "../components/displayProducts.js";

// getting the html elements into js
export const productsContainer = document.querySelector(".products");
const paginationContainer = document.querySelector(".pagination");

// function to fetch products and display them in UI
async function getProductsData() {
  // fetchProducts("https://fakestoreapi.com/products").then((value)=>{
  //     console.log("value:",value);
  //     displayProducts(value,productsContainer);
  // })
  let pageNo = 1;
  let limit = 10;
  const productDetails = await fetchProducts(pageNo, limit);
  console.log("data:", productDetails);
  showProducts(productDetails.products,productsContainer);
}
getProductsData();

// function to show products
function showProducts(products) {
  if (products) {
    displayProducts(products, productsContainer);
  }
}

// TODO:This commented code will be removed later

// // fetch the products
// const fetchProducts = async () => {
//   try {
//     const response = await fetch("https://fakestoreapi.com/products");

//     if (response.ok) {
//       const data = await response.json();
//       return data;

//       // console.log(data);
//       // displayProducts(data);
//     } else {
//       throw new Error("Invalid request");
//     }
//   } catch (error) {
//     console.log("error:", error);
//   }
// };
// console.log(fetchProducts())

// // display products in UI
// const displayProducts = (data) => {
//   productsContainer.innerHTML = "";

//   data?.forEach((product) => {
//     const cardContainer = document.createElement("div");
//     cardContainer.classList.add("card-container");

//     const imageContainer = document.createElement("div");
//     imageContainer.classList.add("image-container");

//     const image = document.createElement("img");
//     image.classList.add("image");
//     image.src = product.image;

//     imageContainer.append(image);

//     const textContainer = document.createElement("div");
//     textContainer.classList.add("text-container");

//     const titleElement = document.createElement("p");
//     titleElement.classList.add("product-title");
//     titleElement.textContent = product.title;

//     const priceElement = document.createElement("p");
//     priceElement.classList.add("price-element");
//     priceElement.textContent = product.price;

//     const ratingElement = document.createElement("p");
//     ratingElement.classList.add("rating-element");
//     ratingElement.textContent = product.rating.rate;

//     textContainer.append(titleElement, priceElement, ratingElement);

//     cardContainer.append(imageContainer, textContainer);

//     productsContainer.append(cardContainer);
//   });
// };
