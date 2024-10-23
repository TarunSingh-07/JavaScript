document.querySelector(".card img").setAttribute("src" , `${data.avatar_url}`);
document.querySelector("h4").innerHTML = `${data.name} , Followers : ${data.followers}`;
document.querySelector("h4").style.fontWeight = `bold`;
document.querySelector("p").innerHTML = `${data.bio}  ${data.blog}`

