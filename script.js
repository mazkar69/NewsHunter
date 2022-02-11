// let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=12b5c11b9ffb4ff6bd813c8080d0e3c6"         //Tech News
// let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=12b5c11b9ffb4ff6bd813c8080d0e3c6"                   //India breaking news
// let url="https://newsapi.org/v2/top-headlines?sources=the-hindu&apiKey=12b5c11b9ffb4ff6bd813c8080d0e3c6"         //bbc-news
// let url="https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=12b5c11b9ffb4ff6bd813c8080d0e3c6"         //bbc-news
//let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=12b5c11b9ffb4ff6bd813c8080d0e3c6"       //Bussiness
console.log("Working fine")



let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=12b5c11b9ffb4ff6bd813c8080d0e3c6"  
    console.log("function called");
    req = new XMLHttpRequest();

    req.onload = function () {
        if (req.status == 200) {
            console.log("Successfull ")
            let articles = JSON.parse(req.responseText)["articles"]

            let newsHtml = ""
            articles.forEach(
                function (element) {

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
            newscontainer.innerHTML = newsHtml


        }
        else {
            console.log("Failed REquest")
        }
    }

    req.open('GET', url, true)
    req.send()



function techwalafun() {
    let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=12b5c11b9ffb4ff6bd813c8080d0e3c6"  
    console.log("function called");
    req = new XMLHttpRequest();

    req.onload = function () {
        if (req.status == 200) {
            console.log("Successfull ")
            let articles = JSON.parse(req.responseText)["articles"]

            let newsHtml = ""
            articles.forEach(
                function (element) {

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
            newscontainer.innerHTML = newsHtml


        }
        else {
            console.log("Failed REquest")
        }
    }

    req.open('GET', url, true)
    req.send()

}

function businesswalafun() {
    let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=12b5c11b9ffb4ff6bd813c8080d0e3c6"
    console.log("function called");
    req = new XMLHttpRequest();

    req.onload = function () {
        if (req.status == 200) {
            console.log("Successfull ")
            let articles = JSON.parse(req.responseText)["articles"]

            let newsHtml = ""
            articles.forEach(
                function (element) {

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
            newscontainer.innerHTML = newsHtml


        }
        else {
            console.log("Failed REquest")
        }
    }

    req.open('GET', url, true)
    req.send()


}
function indiawalafun() {
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=12b5c11b9ffb4ff6bd813c8080d0e3c6"  
    console.log("function called");
    req = new XMLHttpRequest();

    req.onload = function () {
        if (req.status == 200) {
            console.log("Successfull ")
            let articles = JSON.parse(req.responseText)["articles"]

            let newsHtml = ""
            articles.forEach(
                function (element) {

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
            newscontainer.innerHTML = newsHtml


        }
        else {
            console.log("Failed REquest")
        }
    }

    req.open('GET', url, true)
    req.send()


}

function otherawalafun() {
    let url="https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=12b5c11b9ffb4ff6bd813c8080d0e3c6"  
    console.log("function called");
    req = new XMLHttpRequest();

    req.onload = function () {
        if (req.status == 200) {
            console.log("Successfull ")
            let articles = JSON.parse(req.responseText)["articles"]

            let newsHtml = ""
            articles.forEach(
                function (element) {

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
            newscontainer.innerHTML = newsHtml


        }
        else {
            console.log("Failed REquest")
        }
    }

    req.open('GET', url, true)
    req.send()


}