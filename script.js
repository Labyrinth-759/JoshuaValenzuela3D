document.getElementById("nav").innerHTML =
`<h1 id="greeting">Hi!</h1>` +
`<h2>Welcome!</h2>` +
`<button class="btn" id="learn-more">Learn More</button>`;

// Nav
const navSection = {
  link: [
    { name: "Home", href: "#hero" , cname: "hero-nav"},
    { name:"About", href: "#about" , cname: "about-nav"},
    { name: "Skills", href: "#skill", cname: "skill-nav" },
    { name: "Projects", href: "#project", cname:"project-nav" },
    { name: "Contact", href: "#contact", cname: "contact-nav" },
  ],
  img: "/images/1.png",
  btn: "Learn More"
};

// Header
const heroSection = {
  img: "/images/photo.png",
  title: "I'm",
  name: "Joshua Valenzuela",
  about: "I'm a passionate software development student with a strong interest in building efficient, and user-friendly applications...",
  greeting: "Hello, Welcome",
  btn: "Learn More",
  btn2: "Add background"
};

// About
const aboutSection = {
  h2: "About",
  colortext: "Me",
  about:"I'm a third year student taking Bachelor of Science in Information Technology in Marinduque State University. Throughout my studies, I have developed a strong foundation in programming, and application development.In my spare I enjoy gaming, watching anime.",
  img: "/images/img.png",
  btn: "Learn More"
}

// Skill
const skillSection = {
  h2: "My",
  colortext: "Skills",
  intro : "Here are some of Languages I'm familiar and have expirience with.",
  skills: [
    {
      name: "HTML",
      img: "/images/Html.png",
      p: "Started my journey in learning HTML back in 2nd year college when we started to create practice website"
    },
    {
      name: "CSS",
      img: "/images/Css.png",
      p: "In my second year of college, I started using CSS to style and enhance the visual aspects of web projects.",
    },
    {
      name: "JAVASCRIPT", 
      img: "/images/javascript.png",
      p: "In my third year of college, I began using JavaScript to bring interactivity and dynamic functionality to my web projects."
    },
    {
      name: "PYTHON",
      img: "/images/pythonl.png",
      p: "In my first year of college, I started learning Python, which became my introduction to programming. Its simplicity and versatility made it easy to grasp foundational concepts like variables, loops, and functions."
    }
  ]
}

// Projects

const projectSection = {
  Title: "My",
  textColor: "Projects",
  projects :[
    {
      name: "World's Hardest Game",
      img:"/images/Worlds Hardest Game.png",
    },
    {
      name: "Landing Page",
      img:"/images/Landing Page Activity.png",
    },
    {
      name: "Recipe Page",
      img:"/images/Recipe Page.png",
    },
    {
      name: "Portfolio",
      img:"/images/Portfolio.png"
    }
  ]
}

// Contact
const contactSection = {
  Title:"Contact",
  textColor: "Me",
  desc: "Whether you have a project idea, need technical support, or just want to connect, feel free to reach out! Let's create something amazing together.",
  location: [
    {
      name:"Address",
      value: "Mahunig, Gasan, Marinduque"
    },
    {
      name:"Phone",
      value:"09083705595"
    },
    {
      name:"E-mail",
      value:"valenzuelajoshua759@gmail.com"
    }
  ],
}

// Footer
const footerSection = {
  Title: "Joshua Salcedo Valenzuela | BSI/T 3D",
  link:[
    {
      img:"/images/facebook-brands-solid.png",
      href:"https://web.facebook.com/auhsoj.salcedo"
    },
    {
      img: "/images/github-brands-solid.png",
      href:"https://github.com/Labyrinth-759"
    },
    {
      img:"/images/instagram-brands-solid.png",
      href:"https://www.instagram.com/slnt_sky/"
    }
  ]
}


// Navigation 
const start = document.getElementById("nav");

document.getElementById("learn-more").addEventListener("click", displayNav);

function displayNav() {
      start.innerHTML = "";

    const navContainer = document.createElement("div");
    navContainer.className = "nav-container";

    const logoContainer = document.createElement("div");
    logoContainer.className = "logo-container";

    const img = document.createElement("img");
    img.className = "Logo";
    img.src = navSection.img;
    img.alt = "Logo";
    img.title = "My Logo";
    logoContainer.appendChild(img); 

    const linksContainer = document.createElement("div");
    linksContainer.className = "links-container";

    navSection.link.forEach((navigation) => {
        const x = document.createElement("a");
        x.href = navigation.href;
        x.textContent = navigation.name;
        x.className = navigation.cname;
        linksContainer.appendChild(x); 
    });

    
    navContainer.appendChild(logoContainer);
    navContainer.appendChild(linksContainer);

   
    start.appendChild(navContainer);

    // "Add" button
    const btn = document.createElement("button");
    btn.className = "btn-add";
    btn.textContent = navSection.btn;
    btn.id = "btn-add";
    btn.style.marginLeft = "20px"; 
    start.appendChild(btn);

    btn.addEventListener("click", displayHeader);
}

// Header
const h = document.getElementById("hero");

function displayHeader() {
    h.innerHTML = "";

    const btn = document.getElementById("btn-add");
    if (btn) btn.remove();

    const container = document.createElement("div");
    container.className = "content-container";

    const I = document.createElement("div");
    I.className = "image-container";

    const img = document.createElement("img");
    img.className = "self";
    img.src = heroSection.img;
    img.alt = "Photo";
    img.title = "Joshua";
    I.appendChild(img); 
    container.appendChild(I);

    const textContainer = document.createElement("div");
    textContainer.className = "text-container";

    const greeting = document.createElement("h3");
    greeting.textContent = heroSection.greeting;
    textContainer.appendChild(greeting);

    const title = document.createElement("h1");
    title.innerHTML = `${heroSection.title} <span class="highlight-text">${heroSection.name}</span>`;
    textContainer.appendChild(title);

    const about = document.createElement("p");
    about.textContent = heroSection.about;
    textContainer.appendChild(about);

    const b = document.createElement("button");
    b.className = "a-btn";
    b.id = "learn-skill";
    b.textContent = heroSection.btn;
    textContainer.appendChild(b);

    b.addEventListener("click", function () {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    });

    const x = document.createElement("button");
    x.textContent = heroSection.btn2;
    x.id = "add-background";
    textContainer.appendChild(x);

    x.addEventListener("click", function () {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "style2.css";
        document.head.appendChild(link);

        displayAbout();        
    });

    container.appendChild(textContainer); 

    h.appendChild(container);
}


// About
const a = document.getElementById("about");
a.className = "about-section";

function displayAbout() {
    a.innerHTML = "";

    const btn = document.getElementById("add-background");
    if (btn) btn.remove();

    const div1 = document.createElement("div");
    div1.className = "about-card";

    const title = document.createElement("h1");
    title.innerHTML = `${aboutSection.h2} <span>${aboutSection.colortext}</span>`;
    div1.appendChild(title);

    const aboutText = document.createElement("p");
    aboutText.textContent = aboutSection.about;
    div1.appendChild(aboutText);

    const btn2 = document.createElement("button");
    btn2.className = "a-btn";
    btn2.id = "learn-skill";
    btn2.textContent = aboutSection.btn;
    div1.appendChild(btn2);
    a.appendChild(div1);

    const div2 = document.createElement("div");
    div2.className = "image-card"

    const img = document.createElement("img")
    img.src = aboutSection.img;
    img.alt = "Image";
    img.className = "Image";
    img.title = "Joshua";
    div2.appendChild(img);
    a.appendChild(img);
 
    btn2.addEventListener("click", function(){
      displaySkill();
 
      const skillSection = document.getElementById("skill");
      if (skillSection) {
          skillSection.scrollIntoView({ behavior: "smooth" });
      }

    })
}

// Skills 
function displaySkill() {
  skill.innerHTML = ""; 

  const titleContainer = document.createElement("div");
  titleContainer.className = "title-container";

  const title = document.createElement("h1");
  title.innerHTML = `${skillSection.h2} <span>${skillSection.colortext}</span>`;
  titleContainer.appendChild(title);

  skill.appendChild(titleContainer);

  const intro = document.createElement("p");
  intro.textContent = skillSection.intro;
  intro.className = "intro-text";
  skill.appendChild(intro);

  const skillsContainer = document.createElement("div");
  skillsContainer.className = "skills-container";

  skillSection.skills.forEach((skillData) => {
    const skillDiv = document.createElement("div");
    skillDiv.className = "skill-item";

    if (skillData.img) {
      const skillImage = document.createElement("img");
      skillImage.src = skillData.img;
      skillImage.alt = skillData.name || "Skill Image";
      skillImage.className = "skill-image";
      skillDiv.appendChild(skillImage);
    }

    if (skillData.name) {
      const skillName = document.createElement("h4");
      skillName.textContent = skillData.name;
      skillName.className = "skill-name";
      skillDiv.appendChild(skillName);
    }

    const skillDescription = document.createElement("p");
    skillDescription.textContent = skillData.p;
    skillDescription.className = "skill-description";
    skillDiv.appendChild(skillDescription);

    skillsContainer.appendChild(skillDiv); 
  });

  skill.appendChild(skillsContainer); 

  const btn = document.createElement("button");
  btn.textContent = "My Projects";
  btn.id = "My Projects";
  skill.appendChild(btn);

  btn.addEventListener("click", function() {
    displayProject();
    displayContact();
    displayFooter();

    const projectSection = document.getElementById("project");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }


    const existingStyle = document.querySelector('link[href="style2.css"]');
    if (existingStyle) {
      existingStyle.parentNode.removeChild(existingStyle);
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "style3.css";
    document.head.appendChild(link);
  });
}


// Project
const project = document.getElementById("project");
project.className = "project";

function displayProject() {
  project.innerHTML = "";


  // Create a section title
  const title = document.createElement("h1");
  title.innerHTML = `${projectSection.Title} <span> ${projectSection.textColor} </span>`;
  project.appendChild(title);

  const projectContainer = document.createElement("div");
projectContainer.className = "project-container";

  projectSection.projects.forEach((proj) => {
   
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";

    const projectback = document.createElement("div");
    projectback.className = "project-background";

    const img = document.createElement("img");
    img.src = proj.img;
    img.alt = proj.name;
    projectback.appendChild(img);

    projectCard.appendChild(projectback);
    projectContainer.appendChild(projectCard);
  });
   project.appendChild(projectContainer);
}

// Contact
const contact = document.getElementById("contact"); 
contact.className = "contact";

function displayContact() {
  contact.innerHTML = ""; 

  const allContainer = document.createElement("div");
  allContainer.className = "all-container";

  const c = document.createElement("div");
  c.className = "information";
  
  const title = document.createElement("h1");
  title.innerHTML = `${contactSection.Title} <span>${contactSection.textColor}</span>`;
  c.appendChild(title);

  const desc = document.createElement("p");
  desc.textContent = contactSection.desc;
  c.appendChild(desc);

  const locationsContainer = document.createElement("div");
  locationsContainer.className = "locations-container";

  contactSection.location.forEach((loc) => {
    const locationCard = document.createElement("div");
    locationCard.className = "location-card";

    const x = document.createElement("p");
    x.innerHTML = `<span>${loc.name}</span> ${loc.value}`;
    locationCard.appendChild(x);

    c.appendChild(locationCard);
  });
  c.appendChild(locationsContainer);
  allContainer.appendChild(c);

  const b = document.createElement("div");
  b.className = "Box";
  b.innerHTML = `<input type="text" class = "first" placeholder ="Name"></input>
   <textarea type ="text" class = "second s-size" placeholder="Enter Message..."></textarea>
   <button class = "button">Message</button>`;
  allContainer.appendChild(b);

  contact.appendChild(allContainer);
}


// Footer
const footer = document.getElementById("footer"); 
footer.className = "footer";

function displayFooter() {
  footer.innerHTML = ""; 

  const a = document.createElement("div");
  a.className = "footer-container";

  const footerTitle = document.createElement("p");
  footerTitle.textContent = footerSection.Title;
  a.appendChild(footerTitle);

  const linksContainer = document.createElement("div");
  linksContainer.className = "footer-links";

  footerSection.link.forEach((link) => {

    const anchor = document.createElement("a");
    anchor.href = link.href; 
    anchor.target = "_blank"; 
    
    const linkIcon = document.createElement("img");
    linkIcon.src = link.img;
    linkIcon.alt = "Social Media Icon";
    linkIcon.className = "social-icon";
    
    anchor.appendChild(linkIcon);
    
    linksContainer.appendChild(anchor);
  });
  
  a.appendChild(linksContainer);
  footer.appendChild(a);
}