const skills = [
  {
    name: "Blender",
    percent: 80,
    icon: "/asset/icon/blender.svg",
    color1: "#F78700",
    color2: "#FFBA68",
    bg: "#fdf0e3"
  },
  {
    name: "JavaScript",
    percent: 85,
    icon: "/asset/icon/js.svg",
    color1: "#F7DF1E",
    color2: "#FFE873",
    bg: "#fffbe5"
  },
  {
    name: "PHP",
    percent: 75,
    icon: "/asset/icon/php.svg",
    color1: "#8993be",
    color2: "#4F5B93",
    bg: "#e5e6f1"
  },
  {
    name: "MySQL",
    percent: 70,
    icon: "/asset/icon/mysql.svg",
    color1: "#3d74ff",
    color2: "#2ea1ff",
    bg: "#e5e6f1"
  }  
  
];



document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("skills-container");
  const template = document.getElementById("skill-template");

  skills.forEach((skill, index) => {
    const clone = template.content.cloneNode(true);

    // Set skill name, percent and icon
    clone.querySelector(".skill-title").textContent = skill.name;
    clone.querySelector(".skill-percent").textContent = skill.percent + "%";

    const icon = clone.querySelector(".skill-icon");
    icon.src = skill.icon;
    icon.alt = skill.name;

    // Assign gradient ID
    const gradientId = `gradient-${index}`;
    const gradient = clone.querySelector("linearGradient");
    gradient.id = gradientId;
    
    // Set gradient colors
    const stops = gradient.querySelectorAll("stop");
    stops[0].setAttribute("stop-color", skill.color1);
    stops[1].setAttribute("stop-color", skill.color2);
    

    // Fill progress bar
    const fill = clone.querySelector(".skill-fill");
    fill.setAttribute("width", `${skill.percent}%`);
    fill.setAttribute("fill", `url(#${gradientId})`);
    /*
    window.onload = function() {
      const target = skill.percent
      const start = 0
      
    };
    */
    
    
//    .skill-fill{
//    transition: width 2s ease;


    

    // Optional: Set background color of track (first rect)
    const bgRect = clone.querySelector("rect");
    if (bgRect && skill.bg) {
      bgRect.setAttribute("fill", skill.bg);
    }
    const glow = clone.querySelector('.skill-bar').children[1];
    glow.style.boxShadow = `0 0 10px ${skill.color2} `;
    

    container.appendChild(clone);
  });
});