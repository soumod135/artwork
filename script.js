// Currency conversion rates (example rates)
const conversionRates = {
    INR: 1,
    USD: 0.012,
    EUR: 0.011,
    GBP: 0.0095
};

let currentCurrency = 'INR';

// Initialize state
let cart = [];
const artworks = [
    {
        id: 1,
        title: "Mystic Dreams in Blue",
        artist: "Deeksha Dwivedi",
        description: "A mesmerizing exploration of deep blues and ethereal forms, this piece invites viewers into a dreamlike state of contemplation.",
        price: 285000, // Price in INR
        image: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        medium: "Oil on Canvas",
        size: "48\" x 60\"",
        year: "2024",
        featured: true
    },
    {
        id: 2,
        title: "Golden Sunset Reflections",
        artist: "Deeksha Dwivedi",
        description: "Capturing the magical moment when day meets night, this piece showcases the artist's masterful use of light and shadow.",
        price: 315000,
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        medium: "Acrylic on Canvas",
        size: "40\" x 60\"",
        year: "2024",
        featured: true
    },
    {
        id: 3,
        title: "Urban Symphony",
        artist: "Deeksha Dwivedi",
        description: "A vibrant interpretation of city life, where chaos meets harmony in an explosion of color and movement.",
        price: 425000,
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        medium: "Mixed Media",
        size: "54\" x 72\"",
        year: "2023",
        featured: true
    },
    {
        id: 4,
        title: "Serenity in Nature",
        artist: "Deeksha Dwivedi",
        description: "A peaceful landscape that captures the essence of natural tranquility through subtle color gradients and organic forms.",
        price: 245000,
        image: "https://images.unsplash.com/photo-1578926288207-a90a5366759d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        medium: "Oil on Canvas",
        size: "36\" x 48\"",
        year: "2024",
        featured: false
    },
    {
        id: 5,
        title: "Abstract Emotions",
        artist: "Deeksha Dwivedi",
        description: "An emotional journey expressed through bold brushstrokes and a powerful color palette.",
        price: 365000,
        image: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        medium: "Acrylic and Oil",
        size: "48\" x 48\"",
        year: "2023",
        featured: false
    },
    {
        id: 6,
        title: "Midnight Garden",
        artist: "Deeksha Dwivedi",
        description: "A mysterious and enchanting depiction of a garden at midnight, where flowers bloom in ethereal light.",
        price: 475000,
        image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        medium: "Oil on Canvas",
        size: "60\" x 72\"",
        year: "2024",
        featured: true
    },
    {
        id: 7,
        title: "Dancing Spirits",
        artist: "Deeksha Dwivedi",
        description: "An energetic composition that captures the movement and joy of spiritual dance through abstract forms.",
        price: 345000,
        image: "https://images.unsplash.com/photo-1582456891925-a0def999c267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        medium: "Mixed Media on Canvas",
        size: "40\" x 60\"",
        year: "2023",
        featured: false
    },
    {
        id: 8,
        title: "Ocean's Whisper",
        artist: "Deeksha Dwivedi",
        description: "A serene seascape that brings the calming energy of ocean waves into any space.",
        price: 295000,
        image: "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        medium: "Oil on Canvas",
        size: "48\" x 60\"",
        year: "2024",
        featured: false
    },
    {
        id: 9,
        title: "Forest Dreams",
        artist: "Deeksha Dwivedi",
        description: "A mystical forest scene that blends reality with imagination, creating a dreamlike atmosphere.",
        price: 445000,
        image: "https://images.unsplash.com/photo-1541580621-39f717ce77cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        medium: "Acrylic on Canvas",
        size: "54\" x 66\"",
        year: "2024",
        featured: true
    }
];

// Currency formatting function
function formatPrice(price, currency) {
    const convertedPrice = price * conversionRates[currency];
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    return formatter.format(convertedPrice);
}

// DOM Elements
const galleryContainer = document.querySelector('.gallery-container');
const featuredContainer = document.querySelector('.featured-container');
const cartIcon = document.querySelector('.cart-icon');
const cartCount = document.querySelector('.cart-count');
const cartModal = document.getElementById('cart-modal');
const artModal = document.getElementById('art-modal');
const closeButtons = document.querySelectorAll('.close-modal');
const searchInput = document.querySelector('.search-bar input');
const currencySelect = document.getElementById('currency-select');

// Currency change handler
currencySelect.addEventListener('change', (e) => {
    currentCurrency = e.target.value;
    updateAllPrices();
});

function updateAllPrices() {
    // Update gallery prices
    document.querySelectorAll('.art-item .price').forEach((priceElement, index) => {
        const artwork = artworks[index % artworks.length];
        priceElement.textContent = formatPrice(artwork.price, currentCurrency);
    });

    // Update modal price if open
    const modalPrice = document.querySelector('.art-modal .art-price');
    if (modalPrice && modalPrice.dataset.price) {
        modalPrice.textContent = formatPrice(parseFloat(modalPrice.dataset.price), currentCurrency);
    }

    // Update cart prices
    updateCartDisplay();
}

// Initialize Gallery
function initializeGallery() {
    artworks.forEach(artwork => {
        if (artwork.featured) {
            renderArtwork(artwork, featuredContainer);
        }
        renderArtwork(artwork, galleryContainer);
    });
}

// Parallax Effect
window.addEventListener('scroll', () => {
    const parallax = document.querySelector('.parallax-section');
    const scrolled = window.pageYOffset;
    parallax.style.backgroundPositionY = `${scrolled * 0.5}px`;
});

// Search Functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const artItems = document.querySelectorAll('.art-item');
    
    artItems.forEach(item => {
        const title = item.getAttribute('data-title').toLowerCase();
        const artist = item.getAttribute('data-artist').toLowerCase();
        if (title.includes(searchTerm) || artist.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

// Render Artwork
function renderArtwork(artwork, container) {
    const artItem = document.createElement('div');
    artItem.className = 'art-item';
    artItem.setAttribute('data-title', artwork.title);
    artItem.setAttribute('data-artist', artwork.artist);
    
    artItem.innerHTML = `
        <img src="${artwork.image}" alt="${artwork.title}">
        <div class="art-item-info">
            <h3>${artwork.title}</h3>
            <p class="artist">${artwork.artist}</p>
            <p class="price">${formatPrice(artwork.price, currentCurrency)}</p>
        </div>
    `;

    artItem.addEventListener('click', () => showArtModal(artwork));
    container.appendChild(artItem);
}

// Show Art Modal
function showArtModal(artwork) {
    const modal = document.getElementById('art-modal');
    const image = modal.querySelector('.art-image img');
    const title = modal.querySelector('.art-title');
    const artist = modal.querySelector('.artist-name');
    const description = modal.querySelector('.art-description');
    const price = modal.querySelector('.art-price');
    const medium = modal.querySelector('.medium');
    const size = modal.querySelector('.size');
    const year = modal.querySelector('.year');
    const addToCartBtn = modal.querySelector('.add-to-cart-btn');

    image.src = artwork.image;
    title.textContent = artwork.title;
    artist.textContent = artwork.artist;
    description.textContent = artwork.description;
    price.textContent = formatPrice(artwork.price, currentCurrency);
    price.dataset.price = artwork.price;
    medium.textContent = artwork.medium;
    size.textContent = artwork.size;
    year.textContent = artwork.year;

    addToCartBtn.onclick = () => addToCart(artwork);

    modal.style.display = 'block';
}

// Cart Functions
function addToCart(artwork) {
    const existingItem = cart.find(item => item.id === artwork.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...artwork,
            quantity: 1
        });
    }
    
    updateCartCount();
    showNotification('Added to cart!');
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Cart Modal
cartIcon.addEventListener('click', showCartModal);

function showCartModal() {
    const cartItems = document.querySelector('.cart-items');
    const totalAmount = document.getElementById('cart-total-amount');
    
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-item-details">
                <h3>${item.title}</h3>
                <p class="artist">${item.artist}</p>
                <p class="price">${formatPrice(item.price, currentCurrency)} x ${item.quantity}</p>
            </div>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItems.appendChild(itemElement);
        total += item.price * item.quantity;
    });

    totalAmount.textContent = formatPrice(total, currentCurrency);
    cartModal.style.display = 'block';
}

function removeFromCart(artworkId) {
    cart = cart.filter(item => item.id !== artworkId);
    updateCartCount();
    showCartModal();
}

// Close Modals
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartModal.style.display = 'none';
        artModal.style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    if (e.target === cartModal || e.target === artModal) {
        cartModal.style.display = 'none';
        artModal.style.display = 'none';
    }
});

// Checkout Handler
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    // In a real application, this would integrate with a payment processor
    alert('Thank you for your purchase! This is where payment processing would occur.');
    cart = [];
    updateCartCount();
    cartModal.style.display = 'none';
});

// Initialize the gallery when the page loads
document.addEventListener('DOMContentLoaded', initializeGallery);

// Mascot Behavior
const mascot = document.getElementById('artMascot');
let mascotX = 0;
let mascotY = 0;
let targetX = 0;
let targetY = 0;
let trail = [];

// Initialize mascot position
function initializeMascot() {
    mascotX = window.innerWidth - 100;
    mascotY = 100;
    updateMascotPosition();
}

// Update mascot position
function updateMascotPosition() {
    mascot.style.left = mascotX + 'px';
    mascot.style.top = mascotY + 'px';
}

// Mascot movement animation
function animateMascot() {
    // Smooth movement
    mascotX += (targetX - mascotX) * 0.05;
    mascotY += (targetY - mascotY) * 0.05;
    
    // Update position
    updateMascotPosition();
    
    // Create paint trail
    createPaintDrop();
    
    // Remove old paint drops
    while (trail.length > 50) {
        const drop = trail.shift();
        drop.remove();
    }
    
    requestAnimationFrame(animateMascot);
}

// Create paint drops for trail
function createPaintDrop() {
    const drop = document.createElement('div');
    drop.className = 'paint-drop';
    drop.style.left = (mascotX + 30) + 'px';
    drop.style.top = (mascotY + 30) + 'px';
    drop.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
    document.body.appendChild(drop);
    trail.push(drop);
    
    // Remove drop after animation
    setTimeout(() => {
        drop.remove();
        trail = trail.filter(d => d !== drop);
    }, 1000);
}

// Random movement
function moveToRandomPosition() {
    targetX = Math.random() * (window.innerWidth - 100);
    targetY = Math.random() * (window.innerHeight - 100);
}

// Mascot reaction to clicks
function mascotReact() {
    mascot.classList.add('excited');
    setTimeout(() => {
        mascot.classList.remove('excited');
    }, 500);
}

// Event listeners for mascot interaction
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.classList.contains('cta-button')) {
        mascotReact();
    }
});

// Move mascot randomly every few seconds
setInterval(moveToRandomPosition, 3000);

// Initialize mascot behavior
initializeMascot();
animateMascot();

// Update mascot boundaries on window resize
window.addEventListener('resize', () => {
    if (mascotX > window.innerWidth - 100) {
        mascotX = window.innerWidth - 100;
    }
    if (mascotY > window.innerHeight - 100) {
        mascotY = window.innerHeight - 100;
    }
});

// Carousel Functionality
const carousel = {
    currentSlide: 0,
    slides: document.querySelectorAll('.carousel-slide'),
    interval: null,
    
    init() {
        // Create dot indicators
        const dotsContainer = document.querySelector('.carousel-dots');
        this.slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        // Add button listeners
        document.querySelector('.prev-btn').addEventListener('click', () => this.prevSlide());
        document.querySelector('.next-btn').addEventListener('click', () => this.nextSlide());

        // Start automatic sliding
        this.startAutoSlide();

        // Pause on hover
        const carouselContainer = document.querySelector('.carousel-container');
        carouselContainer.addEventListener('mouseenter', () => this.stopAutoSlide());
        carouselContainer.addEventListener('mouseleave', () => this.startAutoSlide());
    },

    updateSlides() {
        // Update slides
        this.slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === this.currentSlide) {
                slide.classList.add('active');
            }
        });

        // Update dots
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === this.currentSlide) {
                dot.classList.add('active');
            }
        });
    },

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.updateSlides();
    },

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.updateSlides();
    },

    goToSlide(index) {
        this.currentSlide = index;
        this.updateSlides();
    },

    startAutoSlide() {
        if (this.interval) clearInterval(this.interval);
        this.interval = setInterval(() => this.nextSlide(), 5000);
    },

    stopAutoSlide() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
};

// Initialize the carousel when the page loads
document.addEventListener('DOMContentLoaded', () => {
    carousel.init();
    initializeGallery();
});

// Upload Modal Elements
const uploadModal = document.getElementById('upload-modal');
const uploadBtn = document.querySelector('.upload-btn');
const uploadForm = document.getElementById('upload-form');
const imageInput = document.getElementById('artwork-image');
const imagePreview = document.querySelector('.image-preview');

// Show Upload Modal
uploadBtn.addEventListener('click', () => {
    uploadModal.style.display = 'block';
});

// Close Upload Modal (add uploadModal to existing modal close handlers)
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartModal.style.display = 'none';
        artModal.style.display = 'none';
        uploadModal.style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    if (e.target === cartModal || e.target === artModal || e.target === uploadModal) {
        cartModal.style.display = 'none';
        artModal.style.display = 'none';
        uploadModal.style.display = 'none';
    }
});

// Handle Image Preview
imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
        };
        reader.readAsDataURL(file);
    }
});

// Handle Form Submission
uploadForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = {
        title: document.getElementById('artwork-title').value,
        description: document.getElementById('artwork-description').value,
        price: parseFloat(document.getElementById('artwork-price').value),
        medium: document.getElementById('artwork-medium').value,
        size: document.getElementById('artwork-size').value,
        year: parseInt(document.getElementById('artwork-year').value),
        featured: document.getElementById('artwork-featured').checked,
        image: imageInput.files[0]
    };

    // For now, just show a success message
    // In the future, this will send data to a server
    showNotification('Artwork uploaded successfully!');
    uploadModal.style.display = 'none';
    uploadForm.reset();
    imagePreview.innerHTML = '';
});

// Admin Functionality
const adminLoginModal = document.getElementById('admin-login-modal');
const adminPanel = document.getElementById('admin-panel');
const adminLoginForm = document.getElementById('admin-login-form');
const adminLogoutBtn = document.getElementById('admin-logout');
const adminLoginLink = document.getElementById('admin-login-link');

// Check if admin is logged in
let isAdminLoggedIn = false;

// Handle admin login link click
adminLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (!isAdminLoggedIn) {
        adminLoginModal.style.display = 'block';
    }
});

// Handle admin login
adminLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;

    // In production, this should be a secure API endpoint
    if (username === 'admin' && password === 'password') {
        isAdminLoggedIn = true;
        adminLoginModal.style.display = 'none';
        adminPanel.style.display = 'block';
        adminLoginLink.style.display = 'none';
        showNotification('Welcome back, Admin!');
        adminLoginForm.reset();
    } else {
        showNotification('Invalid credentials!');
    }
});

// Handle admin logout
adminLogoutBtn.addEventListener('click', () => {
    isAdminLoggedIn = false;
    adminPanel.style.display = 'none';
    adminLoginLink.style.display = 'block';
    showNotification('Logged out successfully');
});

// Close admin login modal
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartModal.style.display = 'none';
        artModal.style.display = 'none';
        uploadModal.style.display = 'none';
        adminLoginModal.style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    if (e.target === cartModal || e.target === artModal || e.target === uploadModal || e.target === adminLoginModal) {
        cartModal.style.display = 'none';
        artModal.style.display = 'none';
        uploadModal.style.display = 'none';
        adminLoginModal.style.display = 'none';
    }
});

// Update the upload button click handler
document.querySelector('.admin-content .upload-btn').addEventListener('click', () => {
    if (isAdminLoggedIn) {
        uploadModal.style.display = 'block';
    }
}); 