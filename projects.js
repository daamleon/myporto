const projectsContainer = document.getElementById("projects-container");
const projects = [
  {
    title: "Portofolio Web Project",
    year: "2024",
    description:
      "My first protofolio websites using basic frontend web development.",
    image: "img/porto.png",
    technologies: ["HTML/CSS", "Tailwind CSS", "JavaScript"],
    projectLink: "https://daamleon.github.io/myporto/",
  },
  {
    title: "Campus Expo Merchandise Design",
    year: "2024",
    description:
      "Create logo and id card designs for expo campus Sman 1 Paciran",
    image: "img/expo.png",
    technologies: ["CorelDraw", "Photoshop"],
    projectLink: "https://example.com",
  },
  {
    title: "Adhigana Project",
    year: "2019",
    description:
      "My several youtube videos project as an content creator team at my high school.",
    image: "img/adhigana.jpg",
    technologies: ["YouTube"],
    projectLink: "https://youtube.com/@adhigana-tv6852?si=01r19nQscqD_GP7o",
  },
  {
    title: "Wibu Project | Kimi No Nawa",
    year: "2019",
    description:
      "Just My Random Project during my outside school activities, You can also check my YouTube Channer for more content :)",
    image: "img/kiminonawa.png",
    technologies: ["After Efects","YouTube"],
    projectLink: "https://youtu.be/sGTqxISlW2g?si=-OiP9lscqPOSqlI-",
  },
  {
    title: "Coming Soon",
    year: "????",
    description:
      "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
    image: "img/kucing.png",
    technologies: ["??", "??", "??"],
    projectLink: "https://example.com",
  },
];

projects.forEach((project) => {
  const projectElement = document.createElement("div");
  projectElement.className =
    "max-w-lg mx-auto p-4 border border-gray-200 rounded-lg bg-white";

  projectElement.innerHTML = `
    <img
      src="${project.image}"
      alt="${project.title}"
      class="w-full h-56 object-cover rounded-lg"
    />
    <h2 class="mt-4 text-xl font-semibold text-gray-900">${project.title}</h2>
    <p class="text-gray-500">${project.year}</p>
    <p class="mt-4 text-gray-700">${project.description}</p>
    <div class="mt-4">
      <strong>Tools:</strong>
      <div class="mt-2 flex flex-wrap gap-2">
        ${project.technologies
          .map(
            (tech) => `
          <span class="px-3 py-1 bg-gray-300 text-gray-900 text-sm font-semibold rounded-full">${tech}</span>
        `
          )
          .join("")}
      </div>
    </div>
    <a
      href="${project.projectLink}"
      class="inline-block mt-4 px-4 py-2 text-white bg-black hover:bg-blue-700 rounded-lg font-semibold transition-colors duration-300"
    >
      See More
    </a>
  `;

  projectsContainer.appendChild(projectElement);
});
