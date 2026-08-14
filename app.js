/* ==========================================================================
   PANAZZOLO PASTELARIA - LOGIC & APPLICATION ENGINE
   Rua Luiz Antunes, 683 (Sala 1) • Panazzolo, Caxias do Sul - RS
   ========================================================================== */

// Client Business Configuration (Official WhatsApp: +55 54 9429-7117)
const CLIENT_CONFIG = {
    name: 'Panazzolo Pastelaria',
    phoneFormatted: '(54) 9429-7117',
    whatsappNumber: '555494297117',
    pixKey: '5494297117',
    address: 'Rua Luiz Antunes, 683 - Sala 1, Panazzolo, Caxias do Sul - RS',
    deliveryFee: 5.00,
    hours: {
        // 0: Domingo, 1: Segunda, 2: Terça, 3: Quarta, 4: Quinta, 5: Sexta, 6: Sábado
        0: { open: 12, close: 22, name: 'Domingo' },
        1: null, // Segunda Fechado
        2: { open: 16, close: 22, name: 'Terça-feira' },
        3: { open: 16, close: 22, name: 'Quarta-feira' },
        4: { open: 16, close: 22, name: 'Quinta-feira' },
        5: { open: 16, close: 22, name: 'Sexta-feira' },
        6: { open: 11, close: 22, name: 'Sábado' }
    }
};

// Local Custom High-Res Assets
const PASTEL_IMGS = {
    carne: 'assets/pastel_carne.png',
    queijo: 'assets/pastel_queijo.png',
    doce: 'assets/pastel_doce.png',
    fritas: 'assets/fritas.jpg',
    cesto: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    cebola: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=800&q=80',
    omelete: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    bebida: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80'
};

// Menu Database Transcribed
const MENU_DATA = [
    // PASTÉIS SALGADOS
    {
        id: 'ps1',
        title: 'Pastel de Carne com Ovo',
        category: 'salgados',
        description: 'Carne moída especial temperada na casa com pedaços de ovo cozido e orégano em massa crocante.',
        badge: 'Mais Pedido',
        image: PASTEL_IMGS.carne,
        rating: '5.0',
        hasSizes: true,
        prices: { P: 12.90, G: 17.90 }
    },
    {
        id: 'ps2',
        title: 'Pastel de Carne e Queijo',
        category: 'salgados',
        description: 'Carne moída bem suculenta com generosa camada de muçarela derretida estalando de quente.',
        badge: 'Favorito',
        image: PASTEL_IMGS.carne,
        rating: '4.9',
        hasSizes: true,
        prices: { P: 12.90, G: 17.90 }
    },
    {
        id: 'ps3',
        title: 'Pastel de Carne com Azeitona',
        category: 'salgados',
        description: 'Carne moída temperada no ponto com rodelas de azeitonas faturadas e tempero especial.',
        image: PASTEL_IMGS.carne,
        rating: '4.8',
        hasSizes: true,
        prices: { P: 12.90, G: 17.90 }
    },
    {
        id: 'ps4',
        title: 'Pastel de Presunto e Queijo',
        category: 'salgados',
        description: 'Clássico presunto de primeira qualidade com muçarela derretida estalando de quente.',
        image: PASTEL_IMGS.queijo,
        rating: '4.9',
        hasSizes: true,
        prices: { P: 12.90, G: 17.90 }
    },
    {
        id: 'ps5',
        title: 'Pastel de Queijo com Orégano',
        category: 'salgados',
        description: 'Abundância de muçarela puxando e cheirosa com toque especial de orégano.',
        badge: 'Clássico',
        image: PASTEL_IMGS.queijo,
        rating: '4.9',
        hasSizes: true,
        prices: { P: 12.90, G: 17.90 }
    },
    {
        id: 'ps6',
        title: 'Pastel de Pizza',
        category: 'salgados',
        description: 'Recheio tradicional de pizza (muçarela, presunto, tomate fresco e orégano) dentro do pastel frito.',
        image: PASTEL_IMGS.queijo,
        rating: '4.8',
        hasSizes: true,
        prices: { P: 12.90, G: 17.90 }
    },
    {
        id: 'ps7',
        title: 'Pastel de Frango com Catupiry',
        category: 'salgados',
        description: 'Frango desfiado suculento com requeijão cremoso tipo Catupiry em massa frita douradinha.',
        badge: 'Top Vendas',
        image: PASTEL_IMGS.queijo,
        rating: '5.0',
        hasSizes: true,
        prices: { P: 12.90, G: 17.90 }
    },
    {
        id: 'ps8',
        title: 'Pastel de Palmito e Queijo',
        category: 'salgados',
        description: 'Palmito macio fatiado com queijo muçarela derretido envolvido em massa sequinha.',
        image: PASTEL_IMGS.queijo,
        rating: '4.8',
        hasSizes: true,
        prices: { P: 12.90, G: 17.90 }
    },
    {
        id: 'ps9',
        title: 'Pastel de Calabresa com Catupiry',
        category: 'salgados',
        description: 'Calabresa moída crocante na chapa com requeijão Catupiry dentro da massa frita de pastel.',
        image: PASTEL_IMGS.carne,
        rating: '4.9',
        hasSizes: true,
        prices: { P: 12.90, G: 17.90 }
    },
    {
        id: 'ps10',
        title: 'Pastel de Milho e Bacon',
        category: 'salgados',
        description: 'Milho verde doce com bacon crocante em cubos e muçarela derretida.',
        image: PASTEL_IMGS.queijo,
        rating: '4.9',
        hasSizes: true,
        prices: { P: 12.90, G: 17.90 }
    },
    {
        id: 'ps11',
        title: 'Pastel de Frango com Cheddar',
        category: 'salgados',
        description: 'Frango desfiado com creme cremoso de queijo cheddar em pastel bem quentinho.',
        image: PASTEL_IMGS.queijo,
        rating: '4.8',
        hasSizes: true,
        prices: { P: 12.90, G: 17.90 }
    },

    // PASTÉIS DOCES
    {
        id: 'pd1',
        title: 'Pastel de Chocolate com Nozes',
        category: 'doces',
        description: 'Recheio farto de chocolate derretido nobre com pedaços crocantes de nozes selecionadas.',
        badge: 'Doce Especial',
        image: PASTEL_IMGS.doce,
        rating: '5.0',
        hasSizes: true,
        prices: { P: 12.90, G: 17.90 }
    },
    {
        id: 'pd2',
        title: 'Pastel de Chocolate com Côco',
        category: 'doces',
        description: 'Chocolate nobre derretido salpicado com coco ralado estilo Prestígio.',
        image: PASTEL_IMGS.doce,
        rating: '4.9',
        hasSizes: true,
        prices: { P: 12.90, G: 17.90 }
    },
    {
        id: 'pd3',
        title: 'Pastel Romeu e Julieta',
        category: 'doces',
        description: 'Combinação clássica de goiabada cremosa quente com muçarela derretida puxando.',
        image: PASTEL_IMGS.doce,
        rating: '4.8',
        hasSizes: true,
        prices: { P: 12.90, G: 17.90 }
    },

    // CESTINHOS MISTOS
    {
        id: 'c1',
        title: 'Cesto Misto 1 Farto',
        category: 'cestinhos',
        description: 'Batata Frita bem crocante, Polenta Frita douradinha, Coxinha de Frango recheada, Cebola Frita e Queijo Empanado puxando!',
        badge: 'Destaque da Casa',
        image: PASTEL_IMGS.cesto,
        rating: '5.0',
        hasSizes: true,
        prices: { P: 74.90, G: 99.90 }
    },
    {
        id: 'c2',
        title: 'Cesto Misto 2 Especial',
        category: 'cestinhos',
        description: 'Polenta Frita crocante, Batata Frita, Dadinho de Tapioca crocante por fora e macio por dentro, Croquete de Carne e Bolinha de Queijo.',
        badge: 'Para Compartilhar',
        image: PASTEL_IMGS.cesto,
        rating: '4.9',
        hasSizes: true,
        prices: { P: 74.90, G: 99.90 }
    },
    {
        id: 'c3',
        title: 'Cesto Misto 3 Completo',
        category: 'cestinhos',
        description: 'Polenta Frita, Batata Frita, Anéis de Cebola Empanada, Risoles de Presunto e Queijo e Queijo Empanado.',
        image: PASTEL_IMGS.cebola,
        rating: '4.9',
        hasSizes: true,
        prices: { P: 74.90, G: 99.90 }
    },

    // PORÇÕES
    {
        id: 'po1',
        title: 'Batata Frita Crocante',
        category: 'porcoes',
        description: 'Batatas palito douradas e bem crocantes sequinhas. Escolha Média (400g) ou Grande (600g).',
        image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80',
        rating: '4.9',
        hasSizes: true,
        prices: { P: 25.90, G: 32.90 }
    },
    {
        id: 'po2',
        title: 'Anéis de Cebola Empanada',
        category: 'porcoes',
        description: 'Anéis de cebola empanados crocantes e douradinhos. Escolha Média ou Grande.',
        image: PASTEL_IMGS.cebola,
        rating: '4.8',
        hasSizes: true,
        prices: { P: 27.90, G: 34.90 }
    },

    // OMELETES
    {
        id: 'om1',
        title: 'Omelete de 2 Ovos Especial',
        category: 'omeletes',
        description: 'Ovos caipiras batidos com cebolinha fresca, presunto picadinho e queijo derretido.',
        image: PASTEL_IMGS.omelete,
        rating: '4.8',
        hasSizes: false,
        prices: { P: 10.90 }
    },
    {
        id: 'om2',
        title: 'Omelete de 3 Ovos Especial',
        category: 'omeletes',
        description: 'Recheio farto de 3 ovos com presunto picado, queijo muçarela e tempero verde.',
        image: PASTEL_IMGS.omelete,
        rating: '4.9',
        hasSizes: false,
        prices: { P: 11.90 }
    },

    // BEBIDAS
    {
        id: 'b1',
        title: 'Refrigerante Lata (350ml)',
        category: 'bebidas',
        description: 'Coca-Cola Original, Coca Zero, Guaraná Antarctica, Fanta Laranja ou Sprite geladíssima.',
        badge: 'Geladinho',
        image: PASTEL_IMGS.bebida,
        rating: '5.0',
        hasSizes: false,
        prices: { P: 6.00 }
    },
    {
        id: 'b2',
        title: 'Refrigerante 2 Litros',
        category: 'bebidas',
        description: 'Garrafa 2 Litros bem gelada para acompanhar seu pedido em família.',
        image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&w=800&q=80',
        rating: '4.9',
        hasSizes: false,
        prices: { P: 15.00 }
    },
    {
        id: 'b3',
        title: 'Cerveja Long Neck Gelada',
        category: 'bebidas',
        description: 'Cerveja trincando de gelada para acompanhar seu pastel favorito.',
        image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=80',
        rating: '5.0',
        hasSizes: false,
        prices: { P: 12.00 }
    }
];

// State Management
let currentCategory = 'todos';
let cart = [];
let fulfillmentType = 'delivery';
let selectedPayment = 'Pix (Chave Copia e Cola)';
const selectedSizes = {};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    setupCategoryFilters();
    setupCartDrawerListeners();
    setupStoreStatus();
    updateCartUI();
});

// Render Menu Cards
function renderMenu() {
    const menuGrid = document.getElementById('menu-grid');
    if (!menuGrid) return;
    
    const filteredData = currentCategory === 'todos' 
        ? MENU_DATA 
        : MENU_DATA.filter(item => item.category === currentCategory);

    menuGrid.innerHTML = filteredData.map(item => {
        const defaultSize = selectedSizes[item.id] || 'P';
        const currentPrice = item.prices[defaultSize] || item.prices.P || 0;
        const isPastelOrCesto = item.hasSizes !== false;

        return `
        <div class="menu-card" data-id="${item.id}">
            <div class="card-img-box">
                <img src="${item.image}" alt="${item.title}" class="card-img" loading="lazy">
                ${item.badge ? `<span class="card-badge">${item.badge}</span>` : ''}
                <div class="card-rating"><i data-lucide="star" style="width:14px; height:14px; fill:#FFC107; color:#FFC107;"></i> ${item.rating}</div>
            </div>
            <div class="card-body">
                <h3 class="card-title">${item.title}</h3>
                <p class="card-desc">${item.description}</p>

                ${isPastelOrCesto ? `
                <div class="size-selector">
                    <button type="button" class="size-btn ${defaultSize === 'P' ? 'active' : ''}" data-size="P" onclick="selectSize('${item.id}', 'P')">
                        ${item.category === 'porcoes' ? 'Média (400g)' : (item.category === 'cestinhos' ? 'Médio (2-3 pess.)' : 'Médio')}
                    </button>
                    <button type="button" class="size-btn ${defaultSize === 'G' ? 'active' : ''}" data-size="G" onclick="selectSize('${item.id}', 'G')">
                        ${item.category === 'porcoes' ? 'Grande (600g)' : (item.category === 'cestinhos' ? 'Grande (4-5 pess.)' : 'Grande (+R$ 5)')}
                    </button>
                </div>
                ` : `
                <div style="height: 12px;"></div>
                `}

                <div class="card-bottom">
                    <div class="card-price">
                        <span class="price-label">${isPastelOrCesto ? 'A partir de' : 'Preço'}</span>
                        <div class="price-value" id="price-display-${item.id}">R$ ${currentPrice.toFixed(2).replace('.', ',')}</div>
                    </div>
                    <button type="button" class="btn-add-item" onclick="addToCart('${item.id}')" aria-label="Adicionar ${item.title} ao pedido">
                        <i data-lucide="plus" style="width:16px; height:16px;"></i> Adicionar
                    </button>
                </div>
            </div>
        </div>
        `;
    }).join('');

    if (window.lucide) {
        lucide.createIcons();
    }
}

// Category Filter Setup
function setupCategoryFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category || 'todos';
            renderMenu();
            
            // Scroll selected pill into view smoothly in mobile carousel
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        });
    });
}

// Track Selected Sizes per Item
function selectSize(itemId, size) {
    selectedSizes[itemId] = size;
    const card = document.querySelector(`.menu-card[data-id="${itemId}"]`);
    if (card) {
        const btns = card.querySelectorAll('.size-btn');
        btns.forEach(b => b.classList.remove('active'));
        const activeBtn = card.querySelector(`.size-btn[data-size="${size}"]`);
        if (activeBtn) activeBtn.classList.add('active');

        const item = MENU_DATA.find(i => i.id === itemId);
        if (item && item.prices && item.prices[size] !== undefined) {
            const displayPrice = card.querySelector(`#price-display-${itemId}`);
            if (displayPrice) {
                displayPrice.innerText = `R$ ${item.prices[size].toFixed(2).replace('.', ',')}`;
            }
        }
    }
}
window.selectSize = selectSize;

// Store Opening Status Calculation
function setupStoreStatus() {
    const statusBadges = document.querySelectorAll('#status-badge, .status-badge');

    const now = new Date();
    const day = now.getDay(); // 0-6
    const hour = now.getHours() + (now.getMinutes() / 60);

    const todayRule = CLIENT_CONFIG.hours[day];
    let isOpen = false;

    if (todayRule && hour >= todayRule.open && hour < todayRule.close) {
        isOpen = true;
    }

    statusBadges.forEach(badge => {
        if (isOpen) {
            badge.className = 'status-badge open';
            badge.innerHTML = `
                <span class="status-dot"></span>
                <span class="status-text">Aberto Agora • Pedidos no WhatsApp</span>
            `;
        } else {
            badge.className = 'status-badge closed';
            badge.innerHTML = `
                <span class="status-dot" style="background:#EF4444; box-shadow:0 0 10px #EF4444;"></span>
                <span class="status-text">Fechado no Momento • Aceitamos Encomendas</span>
            `;
        }
    });
}

// Add Item to Cart
function addToCart(itemId) {
    const item = MENU_DATA.find(i => i.id === itemId);
    if (!item) return;

    const size = selectedSizes[itemId] || 'P';
    const price = item.prices ? (item.prices[size] || item.prices.P) : item.prices.P;
    
    let sizeLabel = '';
    if (item.hasSizes !== false) {
        sizeLabel = size === 'P' ? 'Médio' : 'Grande';
    }

    const itemTitle = item.title + (sizeLabel ? ` (${sizeLabel})` : '');
    const existing = cart.find(c => c.id === itemId && c.size === sizeLabel);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            title: itemTitle,
            size: sizeLabel,
            price: price,
            quantity: 1,
            notes: ''
        });
    }

    updateCartUI();
    openCart();
    showToast(`🥟 <strong>${itemTitle}</strong> adicionado ao pedido!`);
}
window.addToCart = addToCart;

function updateItemNotes(index, val) {
    if (cart[index]) {
        cart[index].notes = val;
    }
}
window.updateItemNotes = updateItemNotes;

function changeQuantity(index, delta) {
    if (cart[index]) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        updateCartUI();
    }
}
window.changeQuantity = changeQuantity;

// Clear all items from cart
function clearCart() {
    if (cart.length === 0) return;
    cart = [];
    updateCartUI();
    showToast('🗑️ Carrinho esvaziado com sucesso!');
}
window.clearCart = clearCart;

function setupCartDrawerListeners() {
    const fulfillmentBtns = document.querySelectorAll('.del-btn');
    fulfillmentBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            fulfillmentBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            fulfillmentType = btn.dataset.type || 'delivery';
            
            const addressBox = document.getElementById('address-box');
            if (addressBox) {
                addressBox.style.display = fulfillmentType === 'delivery' ? 'block' : 'none';
            }
            updateCartUI();
        });
    });

    const paymentBtns = document.querySelectorAll('.pay-btn');
    paymentBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            paymentBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedPayment = btn.dataset.pay || 'Pix (Chave Copia e Cola)';
            
            const cashChangeBox = document.getElementById('cash-change-box');
            const pixInfoBox = document.getElementById('pix-lock-box');
            
            const isCash = selectedPayment.toLowerCase().includes('dinheiro');
            const isPix = selectedPayment.toLowerCase().includes('pix');

            if (cashChangeBox) cashChangeBox.style.display = isCash ? 'block' : 'none';
            if (pixInfoBox) pixInfoBox.style.display = isPix ? 'block' : 'none';
            
            updateCartUI();
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCart();
        }
    });
}

function updateCartUI() {
    const totalQuantity = cart.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const activeDeliveryFee = fulfillmentType === 'delivery' ? (subtotal > 0 ? CLIENT_CONFIG.deliveryFee : 0) : 0;
    const finalTotal = subtotal + activeDeliveryFee;

    const cartCountEls = document.querySelectorAll('#cart-count, .cart-count');
    cartCountEls.forEach(el => el.innerText = totalQuantity);
    
    const cartTotalHeaders = document.querySelectorAll('#cart-total-header, .cart-total-header');
    cartTotalHeaders.forEach(el => el.innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`);

    const cartSubtotalEl = document.getElementById('cart-subtotal');
    const cartDeliveryFeeEl = document.getElementById('cart-delivery-fee');
    const cartGrandTotalEl = document.getElementById('cart-grand-total');

    if (cartSubtotalEl) cartSubtotalEl.innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    if (cartDeliveryFeeEl) {
        cartDeliveryFeeEl.innerText = fulfillmentType === 'delivery' 
            ? `R$ ${activeDeliveryFee.toFixed(2).replace('.', ',')}` 
            : 'Grátis (Balcão)';
    }
    if (cartGrandTotalEl) cartGrandTotalEl.innerText = `R$ ${finalTotal.toFixed(2).replace('.', ',')}`;

    const pixLockedAmount = document.getElementById('pix-locked-amount');
    if (pixLockedAmount) {
        pixLockedAmount.innerText = `R$ ${finalTotal.toFixed(2).replace('.', ',')}`;
    }

    const pixQrImg = document.getElementById('pix-qr-img');
    if (pixQrImg) {
        const qrData = encodeURIComponent(`Chave Pix Panazzolo: ${CLIENT_CONFIG.pixKey} | Valor: R$ ${finalTotal.toFixed(2).replace('.', ',')}`);
        pixQrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${qrData}`;
    }

    // Toggle clear cart button visibility
    const clearCartBtn = document.getElementById('btn-clear-cart');
    if (clearCartBtn) {
        clearCartBtn.style.display = cart.length > 0 ? 'inline-flex' : 'none';
    }

    const container = document.getElementById('cart-items-container');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty" style="text-align: center; padding: 40px 20px; color: #A1A1AA;">
                <i data-lucide="shopping-bag" style="width: 48px; height: 48px; margin-bottom: 12px; opacity: 0.5; color: var(--primary);"></i>
                <p style="font-weight: 700; color: #FFF; margin-bottom: 4px;">Seu carrinho está vazio.</p>
                <span style="font-size: 0.85rem;">Escolha os melhores pastéis no cardápio acima!</span>
            </div>
        `;
        if (window.lucide) window.lucide.createIcons();
        return;
    }

    container.innerHTML = cart.map((item, idx) => `
        <div class="cart-item">
            <div class="cart-item-info">
                <h4>${item.title}</h4>
                <p>R$ ${item.price.toFixed(2).replace('.', ',')} un.</p>
                <input type="text" class="cart-item-note-input" placeholder="Obs: ex. sem cebola, bem frito..." value="${item.notes || ''}" onchange="updateItemNotes(${idx}, this.value)">
                <span class="cart-item-price">Total: R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
            </div>
            <div class="cart-controls">
                <button type="button" class="cart-qty-btn" onclick="changeQuantity(${idx}, -1)" aria-label="Diminuir quantidade">-</button>
                <span class="cart-qty-num">${item.quantity} un</span>
                <button type="button" class="cart-qty-btn" onclick="changeQuantity(${idx}, 1)" aria-label="Aumentar quantidade">+</button>
            </div>
        </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
}

function openCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer) drawer.classList.add('active', 'open');
    if (overlay) overlay.classList.add('active', 'open');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer) drawer.classList.remove('active', 'open');
    if (overlay) overlay.classList.remove('active', 'open');
    document.body.style.overflow = 'auto';
}

window.openCart = openCart;
window.closeCart = closeCart;
window.closeCartDrawer = closeCart;

function fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    textArea.style.top = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
    } catch (err) {
        console.warn('Fallback copy error:', err);
    }
    document.body.removeChild(textArea);
}

function copyPixKey() {
    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const activeDeliveryFee = fulfillmentType === 'delivery' ? CLIENT_CONFIG.deliveryFee : 0;
    const finalTotal = subtotal + activeDeliveryFee;

    const copyBtn = document.getElementById('btn-copy-pix-key');

    const handleSuccess = () => {
        showToast(`⚡ Chave Pix (${CLIENT_CONFIG.phoneFormatted}) copiada! Valor: R$ ${finalTotal.toFixed(2).replace('.', ',')}`);
        
        if (copyBtn) {
            copyBtn.classList.add('copied');
            copyBtn.innerHTML = `<i data-lucide="check" style="width:14px; height:14px;"></i> <span>✓ Chave Pix Copiada!</span>`;
            if (window.lucide) window.lucide.createIcons();

            setTimeout(() => {
                copyBtn.classList.remove('copied');
                copyBtn.innerHTML = `<i data-lucide="copy" style="width:14px; height:14px;"></i> <span>Copiar Chave Pix</span>`;
                if (window.lucide) window.lucide.createIcons();
            }, 2500);
        }
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(CLIENT_CONFIG.pixKey)
            .then(handleSuccess)
            .catch(() => {
                fallbackCopyText(CLIENT_CONFIG.pixKey);
                handleSuccess();
            });
    } else {
        fallbackCopyText(CLIENT_CONFIG.pixKey);
        handleSuccess();
    }
}
window.copyPixKey = copyPixKey;

function showToast(message) {
    let toast = document.getElementById('toast-notification');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notification';
        toast.className = 'toast-box';
        document.body.appendChild(toast);
    }
    toast.innerHTML = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
window.showToast = showToast;

function sendWhatsAppOrder() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio! Adicione pelo menos um pastel ou porção antes de finalizar.');
        return;
    }

    const customerName = document.getElementById('cust-name') ? document.getElementById('cust-name').value.trim() : '';
    const customerAddress = document.getElementById('cust-address') ? document.getElementById('cust-address').value.trim() : '';
    const cashChange = document.getElementById('cash-change-val') ? document.getElementById('cash-change-val').value.trim() : '';

    if (fulfillmentType === 'delivery' && !customerAddress) {
        alert('Por favor, informe seu endereço completo de entrega!');
        if (document.getElementById('cust-address')) document.getElementById('cust-address').focus();
        return;
    }

    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const activeDeliveryFee = fulfillmentType === 'delivery' ? CLIENT_CONFIG.deliveryFee : 0;
    const finalTotal = subtotal + activeDeliveryFee;

    let msg = `🥟 *NOVO PEDIDO - PASTELARIA PANAZZOLO*\n`;
    msg += `------------------------------------\n`;
    msg += `📦 *Tipo:* ${fulfillmentType === 'delivery' ? '🛵 Delivery em Domicílio' : '🛍️ Retirada no Balcão'}\n`;
    if (customerName) msg += `👤 *Cliente:* ${customerName}\n`;
    if (fulfillmentType === 'delivery' && customerAddress) {
        msg += `🏠 *Endereço:* ${customerAddress}\n`;
    }
    msg += `\n*🛒 ITENS DO PEDIDO:*\n`;

    cart.forEach((i, idx) => {
        const itemSum = i.price * i.quantity;
        msg += `${idx + 1}. *${i.title}*\n`;
        msg += `   Qtd: ${i.quantity}x • R$ ${itemSum.toFixed(2).replace('.', ',')}\n`;
        if (i.notes) msg += `   _Obs: ${i.notes}_\n`;
        msg += `\n`;
    });

    msg += `------------------------------------\n`;
    msg += `💰 *Subtotal:* R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    msg += `🛵 *Taxa de Entrega:* ${fulfillmentType === 'delivery' ? `R$ ${activeDeliveryFee.toFixed(2).replace('.', ',')}` : 'Grátis (Balcão)'}\n`;
    msg += `💰 *TOTAL FINAL:* R$ ${finalTotal.toFixed(2).replace('.', ',')}\n\n`;

    msg += `💳 *FORMA DE PAGAMENTO:*\n`;
    const isCash = selectedPayment.toLowerCase().includes('dinheiro');
    const isPix = selectedPayment.toLowerCase().includes('pix');

    if (isPix) {
        msg += `⚡ *PIX (Chave: ${CLIENT_CONFIG.phoneFormatted} - Valor: R$ ${finalTotal.toFixed(2).replace('.', ',')})*\n`;
        msg += `_Anexando o comprovante em seguida!_\n`;
    } else if (isCash) {
        msg += `💵 *Dinheiro* ${cashChange ? `(Troco para R$ ${cashChange})` : '(Sem troco)'}\n`;
    } else {
        msg += `💳 *Cartão de Crédito/Débito (Levar maquininha)*\n`;
    }

    msg += `\n_Pedido gerado pelo Canal Oficial da Panazzolo Pastelaria_`;

    const url = `https://wa.me/${CLIENT_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
}
window.sendWhatsAppOrder = sendWhatsAppOrder;
window.submitOrderWhatsApp = sendWhatsAppOrder;
