import restaurantImage from "../image/Quero-resto-bar.png";



class Home {
  constructor() {
    this.content = document.querySelector("#content");
      // add custom CSS once
  }

 
  home() {
    // Clear previous content (optional)
    this.content.innerHTML = "";
    const div = document.createElement('div');
    div.className = 'home-page';

    // Hero section
    const hero = document.createElement('div');
    hero.className = 'hero';
    hero.innerHTML = `
      <h1>Quero‑Resto bar</h1>
      <p>Authentic flavor in every dish | Welcoming atmosphere | Passion for gastronomy</p>
    `;

    // Description section
    const description = document.createElement('div');
    description.className = 'description';
    description.innerHTML = `
      <div>
        <h2>Our Story</h2>
        <p>
        Founded in 2020, Quero‑Resto bar was born from the desire to bring the best of local cuisine to a relaxed and personality-filled space. We work with fresh ingredients and recipes that honor tradition with a contemporary touch.
        </p>
      </div>
     
    `;
    const image = document.createElement('img');
    image.src = restaurantImage;
    image.alt = "Our Restaurant Image";
    image.className = "image-placeholder"

    description.append(image)


    // Opening hours
    const hours = document.createElement('div');
    hours.className = 'hours';
    hours.innerHTML = `
      <h2>Openning Hours</h2>
      <div class="hours-grid">
        <div>
          <p>Monday to Friday</p>
          <p>11:30 – 15:00 | 18:00 – 23:00</p>
        </div>
        <div>
          <p>Saturday to Sunday</p>
          <p>11:30 – 23:30</p>
        </div>
      </div>
    `;

  

    div.append(hero, description, hours);
    this.content.appendChild(div);
  }
}

export default Home;