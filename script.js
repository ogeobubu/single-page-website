const data = [
  (service = [
    {
      url: "fa fa-users fa-3x",
      h3: "Client Friendliness",
      p:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis beatae, cumque mollitia laudantium fugiat perspiciatis saepe. Delectus praesentium numquam quas?",
    },
    {
      url: "fa fa-balance-scale fa-3x",
      h3: "Quench The Fire",
      p:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis beatae, cumque mollitia laudantium fugiat perspiciatis saepe. Delectus praesentium numquam quas?",
    },
    {
      url: "fa fa-search-plus fa-3x",
      h3: "Research",
      p:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis beatae, cumque mollitia laudantium fugiat perspiciatis saepe. Delectus praesentium numquam quas?",
    },
    {
      url: "fa fa-users fa-3x",
      h3: "Global Research...",
      p:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis beatae, cumque mollitia laudantium fugiat perspiciatis saepe. Delectus praesentium numquam quas?",
    },
  ]),
  (project = [
    {
      h3: "Project 1",
      p:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, mollitia voluptas dolore reprehenderit nulla consectetur ipsa accusantium facilis! Cumque, voluptate!",
      link: "#",
    },
    {
      h3: "Project 2",
      p:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, mollitia voluptas dolore reprehenderit nulla consectetur ipsa accusantium facilis! Cumque, voluptate!",
      link: "#",
    },
    {
      h3: "Project 3",
      p:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, mollitia voluptas dolore reprehenderit nulla consectetur ipsa accusantium facilis! Cumque, voluptate!",
      link: "#",
    },
    {
      h3: "Project 4",
      p:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, mollitia voluptas dolore reprehenderit nulla consectetur ipsa accusantium facilis! Cumque, voluptate!",
      link: "#",
    },
    {
      h3: "Project 5",
      p:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, mollitia voluptas dolore reprehenderit nulla consectetur ipsa accusantium facilis! Cumque, voluptate!",
      link: "#",
    },
    {
      h3: "Project 6",
      p:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, mollitia voluptas dolore reprehenderit nulla consectetur ipsa accusantium facilis! Cumque, voluptate!",
      link: "#",
    },
  ]),
];

console.log(data);

let gridServices = document.querySelector(".grid-services");

const serviceDetails = data[0].map((item) => {
  return `<div class="service">
            <figure class="img-box">
                <i class='${item.url}'></i>
            </figure>
            <div class="content">
                <h3>${item.h3}</h3>
                <p>${item.p}</p>
            </div>
        </div>
  `;
});

gridServices.innerHTML = serviceDetails.join("\n");

let gridProjects = document.querySelector(".grid-projects");

const projectDetails = data[1].map((item) => {
  return `<div class="project">
                <div class="content">
                    <h3>${item.h3}</h3>
                    <p>${item.p}</p>
                    <a class="btn" href='${item.link}'>Learn More</a>
                </div>
            </div>
            `;
});

gridProjects.innerHTML = projectDetails.join("\n");

window.onload = () => {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      document.querySelector("header").classList.add("is-scrolling");
    } else {
      document.querySelector("header").classList.remove("is-scrolling");
    }
  });
};
