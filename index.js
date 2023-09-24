import express from 'express';
import bodyParser from 'body-parser';
import {load} from 'cheerio';
import requestPromise from 'request-promise';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.post('/fetch-url', (req, res) => {
    console.log(req.body)
    const options = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'
        },
        uri: req.body.url,
    };

    requestPromise(options)
        .then(function (data) {
            const $ = load(data);
            const links = $('.pagination-item__active');
            console.log(links.html())
            const nextPaginationItem = links.nextAll('li.pagination-item').first();
            res.status(200).send({
                message: 'Welcome to the beginning of nothingness.',
                data: `https://www.otomoto.pl/${nextPaginationItem.find('a').attr('href')}`
            })
        })
        .catch(function (err) {
            console.log(err)
            res.status(500).send({
                message: 'Failed Welcome to the beginning of nothingness.',
            })
        });
});

const port = parseInt(process.env.port, 10) || 3000;
app.set('port', port);
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});