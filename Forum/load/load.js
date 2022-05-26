async function coldLoad() {

    let cont = document.querySelector("#container");

    cont.innerHTML = "";

    let url = 'http://Forum/load/coldLoad.php';
    let response = await fetch(url);

    let commits = await response.json();
    for (let i = 0; i < commits.length; i++) {
        newPost = document.createElement("div");
        newPost.classList.add("post");
        newPost.innerHTML = commits[i].post;
        var theFirstChild = cont.firstChild;
        cont.insertBefore(newPost, theFirstChild);
    }
    
}

async function warmLoad() {

    let cont = document.querySelector("#container");

    let url = 'http://Forum/load/warmLoad.php';
    let response = await fetch(url);

    let commits = await response.json();

    newPost = document.createElement("div");
    newPost.classList.add("post");
    newPost.innerHTML = commits.post;
    var theFirstChild = cont.firstChild;
    cont.insertBefore(newPost, theFirstChild);

}