const LinksSocialMedia = {
  github: "Wanderson-A-Timoteo",
  youtube: "channel/UCYnS7pxwA-io-jWU78z1eVQ",
  linkedin: "in/wanderson-a-timoteo",
  instagram: "wanderson_a_timoteo",
  twitch: "wanderson_timoteo"
}

function changeSocialMediaLinks() {

  // Pega children "filhos" do UL definido com id=socialLinks e armazena na variavel li.
  for (let li of socialLinks.children) {

     // Pega o atributo class de cada li e armazena na variavel social
    const social = li.getAttribute('class');

    // Pega children de li na posição 0, href e forma o link para acessar.
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

  }
}

// Chama a função
changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.href = data.login
    })
}

// Chama a função
getGithubProfileInfos()
