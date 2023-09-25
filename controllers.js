import { getHtml, parseData, resSend } from './utils/index.js';

export const fetchNextUrl = async(req, res) => {
    try {
        const url = req.url;
        const data = await getHtml(url);
        const nextPaginationItem = parseData(data, 'fetchNextUrl');
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

export const fetchItems = async(req, res) => {
    try {
        const url = req.url;
        const data = await getHtml(url); 
        const response = parseData(data, 'fetchItems');
        if(response) 
            return resSend(200, 'Successfully Scraped', response, res);
        
        return resSend(500, 'Something Went Wrong', [], res);

    } catch (error) {
        return resSend(500, 'Internal Server Error', [], res);
    }

}

export const fetchCounts = async(req, res) => {
    try {
        const url = req.url;
        const data = await getHtml(url);
        const response = parseData(data, 'fetchCounts');
        if(response) 
            return resSend(200, 'Successfully Scraped', response, res);

        return resSend(500, 'Something Went Wrong', [], res);
    } catch (error) {
        return resSend(500, 'Internal Server Error', [], res);
    }

}

export const fetchItemsDetails = async(req, res) => {
    try {
        const url = req.url;
        const data = await getHtml(url);
        const response = parseData(data, 'fetchItemsDetails');
        if(response) 
            return resSend(200, 'Successfully Scraped', response, res);
        
        return resSend(500, 'Something Went Wrong', [], res);
    } catch (error) {
        return resSend(500, 'Internal Server Error', [], res);
    }

}

export const fetchAllPages = async(req, res) => {
    try {
        const url = req.url;
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

export const fetchAllItems = async(req, res) => {
    try {
        const url = req.url;
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