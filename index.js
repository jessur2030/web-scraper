const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');


//init and call express
const app = express();


const url = `https://www.washingtonpost.com/`
axios(url).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const articles = [];


  $('.card-text', html).each(function(){
     const title =  $(this).text()
     const url =  $(this).find('a').attr('href')
    // const text = $(this).find('span')
     articles.push({
         title,
         url,
     })

   
  })

  console.log(articles)
}).catch(err => console.error(err))

app.listen(PORT , () => console.log(`server running on PORT ${PORT}`))