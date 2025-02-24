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

popularAlbumTeamsMember(teamsAlbumEl, teamMembers)

function popularAlbumTeamsMember(albumEl, teamMembers) {
  for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];

    albumEl.innerHTML += generateCardMember(member)

  }
}

function generateCardMember(obj) {
  const { name, role, img, email } = obj

  const card =
    `
  <div class="col">
      <div class="card bg-black text-white">
          <div class="row align-items-center">
              <div class="col-4">
                  <img src="./assets/${img}" alt="">
              </div>
              <div class="col-8 p-2 ">
                  <h5 class="fw-bolder">${name.toUpperCase()}</h5>
                  <p class="fs-6">${role}</p>
                  <a class="fs-6 text-decoration-none" href="">${email}</a>
              </div>
          </div>
      </div>
  </div>
  `

  return card
}