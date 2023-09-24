import { getHtml, parseData, resSend } from './utils/index.js';

export const getNextUrl = async(req, res) => {
    try {
        if(!req?.body?.url)
            return resSend(400, 'Bad Request', [], res);
        
        const url = req.body.url;
        const data = await getHtml(url);
        const nextPaginationItem = parseData(data);
        if(nextPaginationItem) 
            return resSend(200, 'Successfully Scraped', `https://www.otomoto.pl${nextPaginationItem}`, res);
        
        /**
         * As otomoto doesn't give way all adresses,
         * So we have follow this approach 
         */
        const parsedUrl = new URL(url);
        const currentPage = parseInt(parsedUrl.searchParams.get('page'));
      
        if (!isNaN(currentPage)) {
          const nextPage = currentPage + 1;
          parsedUrl.searchParams.set('page', nextPage);
          return resSend(200, 'Successfully Scraped', `https://www.otomoto.pl${parsedUrl.pathname}${parsedUrl.search}`, res);
        }
        return resSend(500, 'Something Went Wrong', [], res);
    } catch (error) {
        return resSend(500, 'Internal Server Error', [], res);
    }

}