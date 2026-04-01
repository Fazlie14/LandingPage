import BruschettaClassica from "../image/Bruschetta_Classica.jpg"
import Calamari_Fritti from "../image/Calamari_Fritti.jpg"
import Caprese_Salad from "../image/Caprese_Salad.jpg"
import Risotto_ai_Funghi from "../image/Risotto_ai_Funghi.jpg"
import Grilled_Sea_Bass from "../image/Grilled_Sea_Bass.jpg"
import Picanha_Steak from "../image/Picanha_Steak.jpg"
import Vegetarian_Pasta from "../image/Vegetarian_Pasta.jpg"
import Tiramisù from "../image/Tiramisù.jpg"
import Panna_Cotta from "../image/Panna_Cotta.jpg"
import House_Red_Wine from "../image/House_Red_Wine.jpg"
import Signature_Cocktail from "../image/Signature_Cocktail.jpg"




class Menu {
  constructor() {
    this.content = document.querySelector("#content");
    
  }

  

  menu() {
    // Clear previous content (optional, for SPA behavior)
    this.content.innerHTML = "";

    const container = document.createElement("div");
    container.className = "menu-page";

    // Main title
    const title = document.createElement("h1");
    title.textContent = "Our Menu";
    container.appendChild(title);

    // Subtitle
    const subtitle = document.createElement("p");
    subtitle.className = "menu-subtitle";
    subtitle.textContent = "Discover the flavors that make Quero Resto bar special";
    container.appendChild(subtitle);

    // Menu data
    const menuData = [
      {
        category: "Starters",
        items: [
          { name: "Bruschetta Classica",image:BruschettaClassica,  price: "€8", description: "Toasted bread with fresh tomatoes, garlic, basil, and extra virgin olive oil.", icon: "fa-bread-slice" },
          { name: "Calamari Fritti",image:Calamari_Fritti, price: "€12", description: "Lightly fried squid served with lemon aioli.", icon: "fa-fish" },
          { name: "Caprese Salad",image:Caprese_Salad, price: "€9", description: "Buffalo mozzarella, heirloom tomatoes, basil, and balsamic glaze.", icon: "fa-salad" }
        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Risotto ai Funghi",image:Risotto_ai_Funghi, price: "€16", description: "Creamy arborio rice with wild mushrooms and truffle oil.", icon: "fa-mushroom" },
          { name: "Grilled Sea Bass",image:Grilled_Sea_Bass, price: "€22", description: "Fresh sea bass fillet with lemon butter sauce and seasonal vegetables.", icon: "fa-fish" },
          { name: "Picanha Steak",image:Picanha_Steak, price: "€24", description: "Grilled Brazilian picanha served with chimichurri and crispy potatoes.", icon: "fa-drumstick-bite" },
          { name: "Vegetarian Pasta",image:Vegetarian_Pasta,price: "€14", description: "Penne with roasted vegetables, pesto, and parmesan shavings.", icon: "fa-leaf" }
        ]
      },
      {
        category: "Desserts & Drinks",
        items: [
          { name: "Tiramisù",image:Tiramisù, price: "€6", description: "Classic Italian dessert with mascarpone and espresso.", icon: "fa-mug-hot" },
          { name: "Panna Cotta",image:Panna_Cotta, price: "€5", description: "Vanilla panna cotta with berry coulis.", icon: "fa-ice-cream" },
          { name: "House Red Wine",image:House_Red_Wine, price: "€4/glass", description: "Smooth, full‑bodied red from the Douro region.", icon: "fa-wine-glass-alt" },
          { name: "Signature Cocktail",image:Signature_Cocktail, price: "€9", description: "Quero’s special blend of rum, passion fruit, and lime.", icon: "fa-cocktail" }
        ]
      }
    ];

    // Build each category section
    menuData.forEach(cat => {
      const section = document.createElement("div");
      section.className = "menu-category";

      const categoryTitle = document.createElement("h2");
      categoryTitle.textContent = cat.category;
      section.appendChild(categoryTitle);

      const grid = document.createElement("div");
      grid.className = "menu-grid";

      cat.items.forEach(item => {
        const card = document.createElement("div");
        card.className = "menu-card";

        const cardContent = document.createElement("div");
        cardContent.className = "card-content";

        const header = document.createElement("div");
        header.className = "card-header";

        const nameSpan = document.createElement("span");
        nameSpan.className = "item-name";
        nameSpan.textContent = item.name;

        const image = document.createElement("img");
        image.src = item.image;
        image.alt = "Bruschetta Classica"
        image.className = "card-header"


        const priceSpan = document.createElement("span");
        priceSpan.className = "item-price";
        priceSpan.textContent = item.price;

        header.appendChild(nameSpan);
        header.appendChild(image);
        header.appendChild(priceSpan);

        const desc = document.createElement("p");
        desc.className = "item-description";
        desc.textContent = item.description;

        const iconSpan = document.createElement("span");
        iconSpan.className = "item-icon";
        iconSpan.innerHTML = `<i class="fas ${item.icon}"></i> ${item.name}`;

        cardContent.appendChild(header);
        cardContent.appendChild(desc);
        cardContent.appendChild(iconSpan);
        card.appendChild(cardContent);
        grid.appendChild(card);
      });

      section.appendChild(grid);
      container.appendChild(section);
    });

    this.content.appendChild(container);
  }
}

export default Menu;