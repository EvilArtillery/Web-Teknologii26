function func(){
    let div = document.createElement('div');
    div.className = 'form';
    div.innerHTML = "<img src=\"images/DnD-Emblem.png\" alt=\"Loho\" width=\"160\" height=\"90\">";
    let title = document.getElementById("news-title");
    div.innerHTML += title.innerText;
    div.innerHTML += "<textarea readonly name=\"news-text\" id=\"news-text\" cols=\"40\" rows=\"10\" style=\"border: 2px solid black; background-color: antiquewhite;\"></textarea> <br>"
    let now = new Date();
    div.innerHTML += now;
    div.innerHTML += "<br> Author: Anon"
    document.body.append(div);
}