const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const teamsAlbumEl = document.querySelector('.teams_album')

teamsAlbumEl.innerHTML = `
  <div class="col p-0 m-0">
      <div class="card bg-black text-white">
          <div class="row align-items-center">
              <div class="col">
                  <img src="./assets/${teamMembers[0].img}" alt="">
              </div>
              <div class="col p-2">
                  <h5>${(teamMembers[0].name).toUpperCase()}</h5>
                  <p>${teamMembers[0].role}</p>
                  <a href="">${teamMembers[0].email}</a>
              </div>
          </div>
      </div>
  </div>
  `;