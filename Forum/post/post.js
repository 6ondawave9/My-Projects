async function post() {
    let text = document.querySelector("#postText").value;

    newPost = "<p class=\"post_login\">"+ curLogin +"</p><p class=\"post_text\">"+ (text).replace(/(\<(\/?[^>]+)>)/g, '') +"</p>";

    postToFetch = {
        "post": newPost
    };
    

    let response = await fetch('http://Forum/post/post.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(postToFetch)
    });

    //let commits = await warmLoad(); ------------------------ Строка не нужна при веб сокет подключении
    
    ws.send('newPost');

    document.querySelector("#postText").value = "";
}

function photoPost() {

    let fileName;
    
    const files = document.querySelector('#myFile').files
    const formData = new FormData()
    formData.append('myFile', files[0])
    
    fetch('/post/photoPost.php', {
    method: 'POST',
    body: formData
    })
    .then(response => response.text())
    .then(data => {
    fileName = data;
    photoPostAsync(fileName);
    })
    .catch(error => {
    console.error(error)
    })


}

async function photoPostAsync(fileName) {

    let text = document.querySelector("#postText").value;

    let newPost = "<p class=\"post_login\">"+ curLogin +"</p><p class=\"post_text\">"+ (text).replace(/(\<(\/?[^>]+)>)/g, '') +"</p><div class=\"post_img\"><img class=\"post_img_img\" src=post\\"+ fileName +"></div>"

    if (fileName.includes("0609Error")) {
        console.log(fileName);
        show(document.querySelector("#info"));
        document.querySelector("#info").value = "Файл неверного формата или его вес более 5 МБ";
        return
    } else {
        hide(document.querySelector("#info"));
        document.querySelector("#info").value = "";
    }

    postToFetch = {
        "post": newPost
    };

    let response = await fetch('http://Forum/post/post.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(postToFetch)
    });

    let commits = await (/*warmLoad(),*/ document.querySelector("#myFile").value = '') //------------------------ Строка не нужна при веб сокет подключении
    
    ws.send('newPost');

    document.querySelector("#postText").value = "";
    document.querySelector("#myFile").value = "";
    document.querySelector('#fileLabel').innerHTML = "Файл";

}

function postCheck() {
    (async () => {
        if (await login_post() != "Error_fake_pass") {
            console.log("access sucsesfully")
            if (document.querySelector("#myFile").value == '' && document.querySelector("#postText").value == '') {
                return 
            } else {
                if (document.querySelector("#myFile").value == '') {
                    console.log("No file post");
                    post();
                } else {
                    console.log("File post");
                    photoPost();
                }
            }
        }
    })()
}
