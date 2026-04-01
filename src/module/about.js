class About {
  constructor() {
    this.content = document.querySelector("#content");
    
  }

 
  about() {
    // Clear existing content
    this.content.innerHTML = "";

    const container = document.createElement("div");
    container.className = "about-page";

    // Title
    const title = document.createElement("h1");
    title.textContent = "About Us";
    container.appendChild(title);

    // Intro section
    const intro = document.createElement("div");
    intro.className = "intro";
    intro.innerHTML = `
      <p>Welcome to <strong>Quero Resto bar</strong> – where authentic flavors meet a warm, inviting atmosphere. 
      We believe that food is more than just sustenance; it's an experience to be shared with friends, family, and community.</p>
    `;
    container.appendChild(intro);

    // Two‑column: Story & Values
    const storyValues = document.createElement("div");
    storyValues.className = "grid-2col";

    // Story card
    const storyCard = document.createElement("div");
    storyCard.className = "info-card";
    storyCard.innerHTML = `
      <h2>Our Story</h2>
      <p>Founded in 2020, Quero Resto bar was born from a passion for local cuisine and a desire to create a space that feels like home. 
      What started as a small family dream has grown into a beloved neighborhood spot, known for our creative dishes, friendly service, and vibrant energy.</p>
      <p>We source ingredients from local farmers and artisans, ensuring every plate is fresh, seasonal, and full of character. Our kitchen blends traditional recipes with modern twists, offering something for every palate.</p>
    `;
    storyValues.appendChild(storyCard);

    // Values card
    const valuesCard = document.createElement("div");
    valuesCard.className = "info-card";
    valuesCard.innerHTML = `
      <h2>Our Values</h2>
      <ul class="values-list">
        <li><i class="fas fa-heart"></i> Passion for quality ingredients</li>
        <li><i class="fas fa-hand-peace"></i> Warm, welcoming service</li>
        <li><i class="fas fa-leaf"></i> Sustainability & community support</li>
        <li><i class="fas fa-wine-bottle"></i> Creativity in every dish</li>
      </ul>
      <p>We’re not just a restaurant; we’re a gathering place where memories are made. Come as you are, leave with a smile.</p>
    `;
    storyValues.appendChild(valuesCard);

    container.appendChild(storyValues);

    // Contact & Hours section
    const contactHours = document.createElement("div");
    contactHours.className = "contact-hours";

    // Contact card
    const contactCard = document.createElement("div");
    contactCard.className = "contact-card";
    contactCard.innerHTML = `
      <h2>Contact</h2>
      <div class="contact-details">
        <div class="contact-item">
          <i class="fas fa-map-marker-alt"></i>
          <span>Rua das Flores, 123, 4050-262 Porto, Portugal</span>
        </div>
        <div class="contact-item">
          <i class="fas fa-phone"></i>
          <span>+351 22 123 4567</span>
        </div>
        <div class="contact-item">
          <i class="fas fa-envelope"></i>
          <span>hello@querorestobar.pt</span>
        </div>
        <div class="contact-item">
          <i class="fab fa-instagram"></i>
          <span>@querorestobar</span>
        </div>
      </div>
    `;
    contactHours.appendChild(contactCard);

    // Hours card
    const hoursCard = document.createElement("div");
    hoursCard.className = "hours-card";
    hoursCard.innerHTML = `
      <h2>Opening Hours</h2>
      <ul class="hours-list">
        <li><span class="day">Monday – Friday</span><span class="time">11:30 – 15:00 | 18:00 – 23:00</span></li>
        <li><span class="day">Saturday – Sunday</span><span class="time">11:30 – 23:30</span></li>
        <li><span class="day">Holidays</span><span class="time">11:30 – 23:00</span></li>
      </ul>
    `;
    contactHours.appendChild(hoursCard);

    container.appendChild(contactHours);

    // Map placeholder (you can replace with actual Google Maps embed)
    const mapPlaceholder = document.createElement("div");
    mapPlaceholder.className = "map-placeholder";
    mapPlaceholder.innerHTML = `
      <div>
        <i class="fas fa-map-marked-alt"></i><br>
        Find us here – Rua das Flores, 123, Porto
      </div>
    `;
    container.appendChild(mapPlaceholder);

    this.content.appendChild(container);
  }
}

export default About;