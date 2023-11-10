// Products
const products = [
  {
    id: "1",
    title: "SIENA",
    brand: "Ilva",
    type: "sofa",
    imgUrl: "images/products/SIENA.webp",
    price: "13999",
    shipping: "Free shipping",
    rate: "4.5",
  },
  {
    id: "2",
    title: "Panthella",
    brand: "Louis Poulsen",
    type: "lamp",
    imgUrl: "images/products/Panthella.webp",
    price: "5200",
    shipping: "Free shipping",
    rate: "4.2",
  },
  {
    id: "3",
    title: "RANGOON",
    brand: "Ilva",
    type: "shelves",
    imgUrl: "images/products/Rangoon.webp",
    price: "7988",
    shipping: "Free shipping",
    rate: "4.3",
  },
  {
    id: "4",
    title: "Copenhagen Lampe",
    brand: "&TRADITION",
    type: "lamp",
    imgUrl: "images/products/CopenhagenLampe.png",
    price: "6699",
    shipping: "Free shipping",
    rate: "4.5",
  },
  {
    id: "5",
    title: "Haller Credenza O2",
    brand: "usm",
    type: "storage",
    imgUrl: "images/products/Haller Credenza O2.webp",
    price: "13999",
    shipping: "Free shipping",
    rate: "4.5",
  },
  {
    id: "6",
    title: "RICHMOND",
    brand: "Ilva",
    type: "storage",
    imgUrl: "images/products/Richmond.webp",
    price: "6999",
    shipping: "Free shipping",
    rate: "4.0",
  },
  {
    id: "7",
    title: "CH24",
    brand: "Olsson Møbler",
    type: "chair",
    imgUrl: "images/products/WishboneChair.png",
    price: "2895",
    shipping: "Free shipping",
    rate: "4.2",
  },
  {
    id: "8",
    title: "PAULA",
    brand: "SOFACOMPANY",
    type: "sofa",
    imgUrl: "images/products/paula.png",
    price: "8999",
    shipping: "Free shipping",
    rate: "4.5",
  },
  {
    id: "9",
    title: "Gentian blue G1",
    brand: "usm",
    type: "storage",
    imgUrl: "images/products/G1.png",
    price: "13995",
    shipping: "Free shipping",
    rate: "4.5",
  },
  {
    id: "10",
    title: "NEVILLE",
    brand: "Ilva",
    type: "shelves",
    imgUrl: "images/products/NEVILLE.webp",
    price: "1699",
    shipping: "Free shipping",
    rate: "4.3",
  },
  {
    id: "11",
    title: "CH25",
    brand: "Olsson Møbler",
    type: "chair",
    imgUrl: "images/products/ch25.png",
    price: "23400",
    shipping: "Free shipping",
    rate: "4.5",
  },
  {
    id: "12",
    title: "PH5 Mini",
    brand: "Louis Poulsen",
    type: "lamp",
    imgUrl: "images/products/PH5 mini.png",
    price: "3745",
    shipping: "Free shipping",
    rate: "4.5",
  },
  {
    id: "13",
    title: "DOUGLAS",
    brand: "SOFACOMPANY",
    type: "sofa",
    imgUrl: "images/products/DOUGLAS.png",
    price: "11699",
    shipping: "Free shipping",
    rate: "4.3",
  },
  {
    id: "14",
    title: "ENZO",
    brand: "SOFACOMPANY",
    type: "chair",
    imgUrl: "images/products/ENZO.png",
    price: "6699",
    shipping: "Free shipping",
    rate: "4.2",
  },
  {
    id: "15",
    title: "Setago",
    brand: "&Tradition",
    type: "lamp",
    imgUrl: "images/products/setago.png",
    price: "1120",
    shipping: "Free shipping",
    rate: "4.4",
  },
  {
    id: "16",
    title: "LEGATO",
    brand: "Ilva",
    type: "shelves",
    imgUrl: "images/products/LEGATO.webp",
    price: "1849",
    shipping: "Free shipping",
    rate: "4.1",
  },
  {
    id: "17",
    title: "Flowerpot VP9",
    brand: "&Tradition",
    type: "lamp",
    imgUrl: "images/products/vp9.png",
    price: "1101",
    shipping: "Free shipping",
    rate: "4.3",
  },
  {
    id: "18",
    title: "BABETTE",
    brand: "SOFACOMPANY",
    type: "sofa",
    imgUrl: "images/products/BABETTE.png",
    price: "4699",
    shipping: "Free shipping",
    rate: "4.5",
  },
];
const categories = [
  { id: 1, name: "All" },
  { id: 2, name: "Sofa" },
  { id: 3, name: "Lamp" },
  { id: 4, name: "Shelves" },
  { id: 5, name: "Storage" },
  { id: 6, name: "Chair" },
];

///.
// Function to display products
function displayProducts(productsArray) {
  const productsCards = document.getElementById("products_cards");
  productsCards.innerHTML = ""; // Clears the existing content

  productsArray.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `<div class ="card item ${product.type}" style="width: 15rem">
                       <div class="card-img">
                        <img src="${product.imgUrl}" class="card-img-top" alt="...">
                       </div>
                      <div class="card-body">
                         <h5 class="card-title">${product.title}</h5>
                          <p class="card-subtitle">${product.brand}</p>
                           <div class="info">
                               <div class="price_info">
                                   <p class="price">${product.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} kr</p>
                               </div>
                               <p class="card-shipping">${product.shipping}</p>
                           </div>
                           <div class="info_rate">
                               <i class="fa-solid fa-star"></i>
                               <i class="fa-solid fa-star"></i>
                               <i class="fa-solid fa-star"></i>
                               <i class="fa-solid fa-star"></i>
                               <i class="fa-solid fa-star"></i>
                               <span>${product.rate}</span>
                           </div>
                       </div>
                       </div>`;
    productsCards.appendChild(productCard);
  });
}

// Initial display of all products
displayProducts(products);

// Function to sort products by category

function changeFn() {
  let productOptions = document.getElementById("product_options");
  let selectedValue = productOptions.options[productOptions.selectedIndex].value;
  if (selectedValue === "price_hl") {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => +b.price - +a.price);
    displayProducts(sortedProducts);
  } else if (selectedValue === "price_lh") {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => +a.price - +b.price);
    displayProducts(sortedProducts);
  } else if (selectedValue === "name_ascending") {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    displayProducts(sortedProducts);
  } else if (selectedValue === "name_descending") {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    displayProducts(sortedProducts);
  }
}

// Function to filter products by category
document.getElementById("allButton").addEventListener("click", () => {
  const filteredProducts = [...products];
  displayProducts(filteredProducts);
});

document.getElementById("sofaButton").addEventListener("click", () => {
  const filteredProducts = products.filter((product) => product.type === "sofa");
  displayProducts(filteredProducts);
});

document.getElementById("lampButton").addEventListener("click", () => {
  const filteredProducts = products.filter((product) => product.type === "lamp");
  displayProducts(filteredProducts);
});
document.getElementById("shelvesButton").addEventListener("click", () => {
  const filteredProducts = products.filter((product) => product.type === "shelves");
  displayProducts(filteredProducts);
});
document.getElementById("storageButton").addEventListener("click", () => {
  const filteredProducts = products.filter((product) => product.type === "storage");
  displayProducts(filteredProducts);
});
document.getElementById("chairButton").addEventListener("click", () => {
  const filteredProducts = products.filter((product) => product.type === "chair");
  displayProducts(filteredProducts);
});

// Active tag -hover
let buttons = document.querySelectorAll(".category_button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove("active");
    }
    this.classList.add("active");
  });
}
