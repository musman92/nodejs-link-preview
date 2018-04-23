const express = require('express')
var request = require('request');
var cheerio = require('cheerio');
const Regex = require('./Regex.js');
const Media = require('./Media.js');
const Helper = require('./Helper.js');
const app = express();

app.get('/preview-link', (req, res) => {

    let url = req.query.url ? req.query.url : '';
    let match = Regex.URL_REGEX.exec(url);

    if (Regex.URL_REGEX.test(url)) {
        let returnRes = {
            canonicalUrl: Helper.canonicalPage(url),
            title: '',
            url: url,
            description: '',
            image: '',
            video: '',
        }

        if (Helper.isImage(url)) {
            returnRes.image = url
            res.send(returnRes)
        } else {
            request(url, function (error, response, body) {
                if (!error) {
                    var $ = cheerio.load(body)

                    var header = $('header').html();
                    returnRes.title = $('title').text();
                    var content = $('body').text();
                    // var freeArticles = $('.central-featured-lang.lang1 a small').text()
                    
                    // returnRes.keywords = $('meta[name="keywords"]').attr('content') || '';
                    let og_title = $('meta[property="og:title"]').attr('content');
                    if( og_title ) {
                        returnRes.title = og_title
                    }

                    //desc
                    returnRes.description = $('meta[name="description"]').attr('content') || '';
                    let og_description = $('meta[property="og:description"]').attr('content');
                    if (og_description) {
                        returnRes.description = og_description
                    }
                    let og_url = $('meta[property="og:url"]').attr('content');
                    //managing images
                    let og_image = $('meta[property="og:image"]').attr('content');
                    if (og_image) {
                        returnRes.image = og_image;
                    }

                    //check for media stuff
                    returnRes.video = Media.getMedia(url);
                } else {
                    returnRes.error = error
                }
                res.send(returnRes)
            });
        }
    }
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))