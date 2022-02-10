let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=12b5c11b9ffb4ff6bd813c8080d0e3c6"
console.log("Working fine")



req = new XMLHttpRequest();

req.onload = function () {
    if (req.status == 200) {
        console.log("Successfull ")
        let articles = JSON.parse(req.responseText)["articles"]
        console.log(articles)
        let newsHtml = ""
        articles.forEach(
            function (element) {
                console.log(element.title)
                newsHtml += `<div class="newsBox">
                <div class="newsimg">
                    <img src="${element.urlToImage}" alt="some img">
                </div>
                <div class="newstitle">
                    ${element.title}

                </div>
                <div class="newsdes">
                    ${element.description}<a href="${element.url}">Continue Reading</a>
                  

                </div>
            </div>`

            }
        )


        let newscontainer = document.getElementById('newscontainer');
        newscontainer.innerHTML=newsHtml


    }
    else {
        console.log("Failed REquest")
    }
}

req.open('GET', url, true)
req.send()


