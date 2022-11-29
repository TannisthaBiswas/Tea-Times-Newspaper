const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const url= 'https://www.telegraphindia.com/'


app.get('/', function (req, res) {
    res.json('Newspaper')
})

app.get('/results', (req, res) => {
    axios(url)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.col-3', html).each(function () { 
                const title = $(this).text()
                const url = $(this).find('a').attr('href')
                const imagelink = $(this).find('img').attr('data-src')
                articles.push({
                    title,
                    url,
                    imagelink
                })
            })
            res.json(articles)
        }).catch(err => console.log(err))

        

})





app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))

