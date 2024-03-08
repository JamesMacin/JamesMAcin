
//This is for your Art Page Gallery
//This code was developed by asking the StackOverFlow crowd for some help
//Use event delegation to detect events from child elements
  const container = document.querySelector('.container');
  container.addEventListener('click', handleClick);

  function handleClick(e) {
  const el = e.target;
  
  // If the clicked element is an image and
  // it's a thumbnail find the selected image container
  // and update its src property
  if (el.closest('img') && el.closest('.thumbnails')) {
  const selected = el.parentElement.previousElementSibling;
  selected.src = e.target.src;
  }
}

//////////////////////////////////
//This is for your shopping cart// 
// Sample array of items with images
const items = [
  { id: 1, name: "Item 1", price: 10, image: "Images/Border Collie Art Print, (8 x 10) Dog Art.png" },
  { id: 2, name: "Item 2", price: 20, image: "Images/Modern ORIGINAL Pink Roses Painting (8 x 10).png" },
  { id: 3, name: "Item 3", price: 30, image: "Images/Chickadees Chat ORIGINAL Mini Painting.png" },
  { id: 4, name: "Item 4", price: 30, image: "Images/Daisy Wildflower Abundance ORIGINAL Painting ( 7x7).png" },
  { id: 5, name: "Item 5", price: 30, image: "Images/download (12).png" },
  { id: 6, name: "Item 6", price: 20, image: "Images/download.png" },
  { id: 7, name: "Item 7", price: 30, image: "Images/Georgian Bay ORIGINAL Painting Summer Clouds Island Art (7x7).png" },
  { id: 8, name: "Item 8", price: 30, image: "Images/Mini ORIGINAL Flower Abstract Meadow.png" },
  { id: 9, name: "Item 9", price: 30, image: "Images/Modern ORIGINAL Pink Roses Painting (8 x 10).png" },
  { id: 10, name: "Item 10", price: 20, image: "Images/Modern ORIGINAL Rose Painting (7 x 7).png" },
  { id: 11, name: "Item 11", price: 30, image: "Images/Northern Lights ORIGINAL Acrylic Painting Night Sky Art (5x7) Aurora Borealis.png" },
  { id: 12, name: "Item 12", price: 30, image: "Images/Northern Lights ORIGINAL Painting (7 x7) , Aurora Borealis 2.png" },
  { id: 13, name: "Item 13", price: 30, image: "Images/Northern Lights ORIGINAL Painting (7 x7) , Aurora Borealis.png" },
  { id: 14, name: "Item 14", price: 20, image: "Images/Northern Lights ORIGINAL Small Painting (7 x 7) Aurora Borealis.png" },
  { id: 15, name: "Item 15", price: 30, image: "Images/Prairie Road ORIGINAL Painting, Pink Sky Art (8 x 10).png" },
  { id: 16, name: "Item 16", price: 30, image: "Images/Sheltie Snow Day Art Print (7 x 7).png" },
  { id: 17, name: "Item 17", price: 30, image: "Images/Three Sisters Mountains.png" }
];

const itemsContainer = document.getElementById('items-container');
const totalElement = document.getElementById('total');
const checkoutBtn = document.getElementById('checkout-btn');
let total = 0;

// Display items in the HTML
items.forEach(item => {
  const itemElement = document.createElement('div');
  itemElement.classList.add('item');
  itemElement.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <span>${item.name}</span>
      <span>$${item.price}</span>
      <button onclick="addToCart(${item.id}, ${item.price})">Add to Cart</button>
  `;
  itemsContainer.appendChild(itemElement);
});

// Function to add item to the cart
function addToCart(itemId, price) {
  total += price;
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Checkout button functionality (this is just a placeholder, you'd need to implement your checkout logic)
checkoutBtn.addEventListener('click', () => {
  alert(`Total Amount: $${total.toFixed(2)}`);
});


//////////////////////////////////////////////////


