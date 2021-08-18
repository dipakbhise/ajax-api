function fetch () {


const xhr = new XMLHttpRequest();

xhr.open("GET", "https://newsapi.org/v2/everything?q=Apple&from=2021-08-11&sortBy=popularity&apiKey=ca5366c5ddb84bb482fc26b7261fdc8b", true);

xhr.onload = ()=>{
    console.log(xhr.responseText);
    let json = JSON.parse(xhr.responseText);
    console.log(json)

    let article = json.articles;

    // for (const element of article) {

    //     let elm = document.getElementById("title");

    //     let h2 = document.createElement("h2");


    //     elm.appendChild(h2).innerHTML= element.title;

    // }

    let list = document.getElementById("list");
    let authors = document.getElementById("authlist");
    str = "";
    auth = "";

    article.map((elm, index)=>{

        str = str + elm.title + "<br>";

        console.log(str)

        list.innerHTML = str;

        auth = auth + `author is ${elm.author}` + "<br>";

        authors.innerHTML = ` ${auth}`;

        
    })

    

    

}

xhr.send();


}