const feedDisplay = document.querySelector('#feed')


fetch('http://localhost:8000/results')
    .then(response => {return response.json()})
    .then(data => {
        data.forEach(article => {
            if(article.url!=undefined && article.imagelink!=undefined){
                var link=`https://www.telegraphindia.com/`  + article.url
                    const articleItemwi = `<div style='color:black'><h4>` +
             article.title + `</h4><img src="` + article.imagelink + `"></div>`  + `<a href="https://www.telegraphindia.com/`+article.url+`">Read More:`+link+`</a>`  
 feedDisplay.insertAdjacentHTML("beforeend", articleItemwi)
            
            }


        })
    })
    .catch(err => console.log(err))

