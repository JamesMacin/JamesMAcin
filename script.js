// Art Page Gallery
const container = document.querySelector('.container');
container.addEventListener('click', handleClick);

function handleClick(e) {
  const el = e.target;
  
  if (el.closest('img') && el.closest('.thumbnails')) {
    const selected = el.parentElement.previousElementSibling;
    selected.src = e.target.src;
  }
}

// Shopping Cart
const items = [
  { id: 1, name: "Item 1", price: 10, image: "Images/Border Collie Art Print, (8 x 10) Dog Art.png" },
  { id: 2, name: "Item 2", price: 20, image: "Images/Modern ORIGINAL Pink Roses Painting (8 x 10).png" },
  // Add more items as needed
];

const itemsContainer = document.getElementById('items-container');
const totalElement = document.getElementById('total');
const checkoutBtn = document.getElementById('checkout-btn');
let total = 0;

// Display items in the HTML
function displayItems() {
  items.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('item');
    itemElement.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <span>${item.name}</span>
      <span>$${item.price}</span>
      <button data-id="${item.id}" data-price="${item.price}">Add to Cart</button>
    `;
    itemsContainer.appendChild(itemElement);
  });
}

// Function to add item to the cart
function addToCart(itemId, price) {
  total += price;
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Event delegation for adding items to the cart
itemsContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const itemId = parseInt(e.target.dataset.id);
    const price = parseFloat(e.target.dataset.price);
    addToCart(itemId, price);
  }
});

// Checkout button functionality
checkoutBtn.addEventListener('click', () => {
  alert(`Total Amount: $${total.toFixed(2)}`);
});

// Initialize
displayItems();



