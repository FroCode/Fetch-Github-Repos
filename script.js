let theInput = document.querySelector(".get-repos input")
let getButton = document.querySelector(".get-button")
let reposData = document.querySelector(".show-data")
getButton.onclick = function () {
    getRepos()
}

function getRepos() {
    console.log("Function Get Repos ")
    if (theInput.value == "") {
        reposData.innerHTML = "<span>PLease Write GitHub Username.</span>"
    }
    else {
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
            .then((response) =>  response.json())
            .then((repositories) => {
                reposData.innerHTML = "";
                repositories.forEach(repo => {
                    let mainDiv = document.createElement("div")
                    let repoName = document.createTextNode(repo.name)
                    let repoUrl = document.createElement("a")
                    // create repo text
                    let theUrlText = document.createTextNode("Visit")
                    repoUrl.appendChild(theUrlText)
                    repoUrl.href = `https:/github.com/FroCode/${repo.name}`
                    repoUrl.setAttribute('target', '_blank')
                    mainDiv.appendChild(repoUrl)
                    mainDiv.appendChild(repoName)
                    reposData.appendChild(mainDiv)
                })
            })

    }
}