const menuItems = [
    {
        id: "Boneless Crispy Pata",
        name: "Bonesless Crispy Pata",
        category: "The Filipino Canon",
        description: "Golden, crispy pork skin with tender, juicy meat, served with a savory soy-vinegar.",
        price: 695,
        tag: "A crowd favorite",
        image: "Boneless crispy pata.jpg",
        alt: "Golden, crunchy pork skin wrapped around tender, juicy meat"
    },
    {
        id: "Especial Sisig",
        name: "Especial Sisig",
        category: "The Filipino Canon",
        description: "Sizzling, savory pork loaded with bold flavors and a spicy kick in every bite!",
        price: 285,
        tag: "House specialty",
        image: "Especial Sisig.jpg",
        alt: "Savory chopped pork topped with fresh onions, green onions, spicy chilies"
    },
    {
        id: "Lengua in Mushroom sauce",
        name: "Lengua in Mushroom sauce",
        category: "The Filipino Canon",
        description: "Slow-cooked tenderness smothered in rich, creamy mushroom goodness.",
        price: 495,
        tag: "Comfort in a plate",
        image: "Lengua in mushroom sauce.jpg",
        alt: "A creamy mushroom masterpiece with tender, flavorful beef lengua."
    },
    {
        id: "karekare",
        name: "Kare-Kare",
        category: "The Filipino Canon",
        description: "Pata with tender pork hocks in savory peanut.",
        price: 390,
        tag: "Sunday favorite",
        image: "food_Kare-kare.jpg",
        alt: "A plate of Kare-Kare with Pata"
    },
    {
        id: "Lechon Kawali",
        name: "Lechon Kawali",
        category: "The Filipino Canon",
        description: "Crispy and tender deep-fried pork belly with a flavorful dipping sauce.",
        price: 495,
        tag: "Local Serve",
        image: "Lechon kawali.jpg",
        alt: "Golden, crispy pork belly with irresistibly crunchy skin and juicy"
    },
    {
        id: "Madayaw Glazed Wings(6pcs)",
        name: "Madayaw Glazed Wings(6pcs)",
        category: "The Talked About Wings",
        description: "Juicy, tender chicken wings coated in a rich, sticky, sweet-and-savory glaze.",
        price: 225,
        tag: "Sweet Glazed",
        image: "Madayaw Glazed wings.jpg",
        alt: "Glazed chicken wings glistening with a rich barbecue and hot sauce coating."
    },
    {
        id: "Garlic Parmesan Wings",
        name: "Garlic Parmesan Wings",
        category: "The Talked About Wings",
        description: "Buttery garlic sauce and sprinkled with savory Parmesan cheese.",
        price: 245,
        tag: "Cheesy flavor",
        image: "Garlic Parmesan wings.jpg",
        alt: "Every bite delivers the perfect blend of garlicky goodness"
    },
    {
        id: "Gising-Gising(sigarillas + dilis)",
        name: "Gising-Gising(sigarillas + dilis)",
        category: "Vegetables & Amp; Sides",
        description: "Crunchy sigarillas simmered in creamy coconut milk, complemented by savory dried dilis.",
        price: 215,
        tag: "Tasty Green Beans",
        image: "Gising-Gising dilis.jpg",
        alt: "A perfect balance of creamy, savory, and spicy in every spoonful!"
    },
    {
        id: "Streetfood Platter",
        name: "Streetfood Platter",
        category: "Vegetables & Amp; Sides",
        description: "Mouthwatering mix of Filipino street food favorites, crispy lumpia, fish balls, kwek-kwek, fries, and other",
        price: 385,
        tag: "Night mix",
        image: "Streetfood Platter.jpg",
        alt: "Satisfying cravings, and making every snack time extra special!"
    },
    {
        id: "Pinakbet",
        name: "Pinakbet",
        category: "Vegetables & Amp; Sides",
        description: "Fresh squash, eggplant, okra, and string beans, sautéed with tender pork and rich, savory bagoong.",
        price: 245,
        tag: "Garden Flavors",
        image: "Pinakbet.jpg",
        alt: "A delicious blend of fresh garden flavors and authentic Filipino goodness in every bite"
    },
    {
        id: "Plain / Garlic rice(per cup)",
        name: "Plain / Garlic rice(per cup)",
        category: "Vegetables & Amp; Sides",
        description: "Freshly cooked, fluffy rice served warm and tender.",
        price: 45,
        tag: "Rice",
        image: "Plain garlic rice.jpg",
        alt: "Toasted garlic for an extra savory kick."
    },
    {
        id: "Mango Salad",
        name: "Mango Salad",
        category: "Vegetables & Amp; Sides",
        description: "Crisp green mangoes tossed with onions, chili, and a flavorful blend.",
        price: 195,
        tag: "Chili flakes",
        image: "Mango salad.jpg",
        alt: "Sweet, tangy, and spicy seasonings."
    },
    {
        id: "Calamansi Iced Tea",
        name: "Calamansi Iced Tea",
        category: "Drinks & amp; Closers",
        description: "A delightful blend of zesty citrus and smooth tea sweetness, served over ice for a crisp.",
        price: 85,
        tag: "Fresh & zesty",
        image: "Calamnsi Iced Tea.jpg",
        alt: "A refreshing citrus drink served over ice."
    },
    {
        id: "Mango Shake",
        name: "Mango Shake",
        category: "Drinks & amp; Closers",
        description: "Velvety mango shake blended from sweet ripe mangoes, layered with chewy tapioca pearls.",
        price: 125,
        tag: "Creamy Drinks",
        image: "Mango Shake.jpg",
        alt: "Loaded Mango Graham Shake"
    },
    {
        id: "Leche Flan",
        name: "Leche Flan",
        category: "Drinks & amp; Closers",
        description: "Made with rich egg yolks and creamy milk, crowned with a glossy.",
        price: 125,
        tag: "Creamy Caramel",
        image: "Leche flan.jpg",
        alt: "Pure golden indulgence."
    },
    {
        id: "Halo-Halo",
        name: "Halo-Halo",
        category: "Drinks & amp; Closers",
        description: "layers of colorful jellies, chewy coconut strips, sweetened beans, and tropical fruits buried under finely shaved ice.",
        price: 185,
        tag: "Loaded mix-ins",
        image: "halo-halo.jpg",
        alt: "Every spoonful is a sweet surprise."
    }
];

const cart = new Map();
const foodGrid = document.getElementById("foodGrid");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartCountLabel = document.getElementById("cartCountLabel");
const cartTotal = document.getElementById("cartTotal");
const cartMessage = document.getElementById("cartMessage");

function renderMenu(category) {
    const visibleItems = category === "all"
        ? menuItems
        : menuItems.filter((item) => item.category === category);

    foodGrid.innerHTML = visibleItems.map((item) => `
        <article class="food-card">
            <div class="food-card-image">
                <img src="${item.image}" alt="${item.alt}" loading="lazy">
                <span class="food-tag">${item.tag}</span>
            </div>
            <div class="food-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="food-card-bottom">
                    <span class="price">₱${item.price.toFixed(2)}</span>
                    <button type="button" data-add="${item.id}" aria-label="Add ${item.name} to your order">Add to order +</button>
                </div>
            </div>
        </article>
    `).join("");
}

function renderCart() {
    const entries = Array.from(cart.entries());
    const itemCount = entries.reduce((sum, entry) => sum + entry[1], 0);
    const total = entries.reduce((sum, entry) => {
        const item = menuItems.find((menuItem) => menuItem.id === entry[0]);
        return sum + item.price * entry[1];
    }, 0);

    cartCount.textContent = itemCount;
    cartCountLabel.textContent = itemCount;
    cartTotal.textContent = total.toFixed(2);
    cartItems.innerHTML = entries.length
        ? entries.map(([id, quantity]) => {
            const item = menuItems.find((menuItem) => menuItem.id === id);
            return `<div class="cart-item">
                <span class="cart-item-name">${item.name} × ${quantity}</span>
                <span class="cart-item-subtotal">₱${(item.price * quantity).toFixed(2)}</span>
                <button type="button" data-remove="${id}" aria-label="Remove ${item.name} from your order">Remove</button>
            </div>`;
        }).join("")
        : '<p class="empty-cart">Your cart is waiting for something delicious.</p>';
}

document.getElementById("categoryFilters").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-category]");
    if (!button) return;

    document.querySelectorAll("#categoryFilters button").forEach((filter) => {
        const isActive = filter === button;
        filter.classList.toggle("active", isActive);
        filter.setAttribute("aria-pressed", String(isActive));
    });
    renderMenu(button.dataset.category);
});

foodGrid.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-add]");
    if (!button) return;

    const id = button.dataset.add;
    cart.set(id, (cart.get(id) || 0) + 1);
    cartMessage.textContent = "";
    renderCart();
});

cartItems.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-remove]");
    if (!button) return;

    cart.delete(button.dataset.remove);
    renderCart();
});

document.getElementById("cartButton").addEventListener("click", () => {
    document.getElementById("cart").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("checkoutButton").addEventListener("click", () => {
    if (cart.size === 0) {
        cartMessage.textContent = "Add a dish from the menu to get started.";
        return;
    }

    cart.clear();
    renderCart();
    cartMessage.textContent = "Demo order placed—thanks for dining with Madayaw Kitchen!";
});

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    themeToggle.textContent = isDark ? "☀" : "☾";
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
});

const reservationDate = document.getElementById("reservationDate");
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);
reservationDate.min = localToday;

document.getElementById("reservationForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("customerName").value.trim();
    document.getElementById("reservationMessage").textContent =
        `Thanks, ${name}! Your reservation request is ready in this demo.`;
    event.currentTarget.reset();
    reservationDate.min = localToday;
});

renderMenu("all");
renderCart();
