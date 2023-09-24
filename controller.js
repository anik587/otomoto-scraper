import { getHtml } from './utils/request.utils.js';
import { parseData } from './utils/parser.utils.js';

export const getNextUrl = (req, res) => {
    if(!req?.body?.url) {
        res.status(400).send({
            message: 'Failed! url required',
        })
    }
    const url = req.body.url;
    const data = getHtml(url);
    const nextPaginationItem = parseData(data);
    if(nextPaginationItem) {
        res.status(200).send({
            message: 'Welcome to the beginning of nothingness.',
            data: `https://www.otomoto.pl/${nextPaginationItem}`
        });    
    }
    const parsedUrl = new URL(url);
    const currentPage = parseInt(parsedUrl.searchParams.get('page'));
  
    if (!isNaN(currentPage)) {
      const nextPage = currentPage + 1;
      parsedUrl.searchParams.set('page', nextPage);
      res.status(200).send({
        message: 'Welcome to the beginning of nothingness.',
        data: `${parsedUrl.pathname}${parsedUrl.search}`
    }); 
    }

}