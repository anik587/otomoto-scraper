import { getHtml, parseData } from './utils/index.js';


export const fetchNextUrl = async (url,
    retry_counter,
    max_retry) => {
        try {
            let data;
            do {
                data = await getHtml(url);
                retry_counter++;
            } while (data === undefined && retry_counter < max_retry);
    
            let response = parseData(data, 'fetchNextUrl');
            let pageCount = parseData(data, 'pageSize');
            /**
            * As otomoto doesn't give way all adresses,
            * So we have followed this approach 
            * For scraping
            */
            if(!response) {
                const parsedUrl = new URL(url);
                const currentPage = parseInt(parsedUrl.searchParams.get('page'));
                if (!isNaN(currentPage)) {
                    const nextPage = currentPage + 1;
                    if (pageCount >= nextPage){
                        parsedUrl.searchParams.set('page', nextPage);
                        response = `https://www.otomoto.pl${parsedUrl.pathname}${parsedUrl.search}`;    
                    } else {
                        response = [];
                    }
                    
                }
            } else {
                response = `https://www.otomoto.pl${response}`;  
            }
            return response;   
        } catch (error) {
            throw new Error;
        } 
}
export const fetchItems = async (url,
    retry_counter,
    max_retry) => {
    try {
        let data;
        do {
            data = await getHtml(url);
            retry_counter++;
        } while (data === undefined && retry_counter < max_retry);
        const response = parseData(data, 'fetchItems');
        return response;   
    } catch (error) {
        throw new Error;
    } 

}
export const fetchCounts = async(url,
    retry_counter,
    max_retry) => {
    try {
        let data;
        do {
            data = await getHtml(url);
            retry_counter++;
        } while (data === undefined && retry_counter < max_retry);
        const response = parseData(data, 'fetchCounts');
        return response;   
    } catch (error) {
        throw new Error;
    } 
}
export const fetchItemsDetails = async(url,
    retry_counter,
    max_retry) => {
    try {
        let data;
        do {
            data = await getHtml(url);
            retry_counter++;
        } while (data === undefined && retry_counter < max_retry);
        const response = parseData(data, 'fetchItemsDetails');
        return response;   
    } catch (error) {
        throw new Error;
    } 
}
export const fetchAllPages = async(url,
    retry_counter,
    max_retry) => {
        try {
            let data, new_url, parsedUrl, currentPage, nextPage;
            let responseData = [];
            do {
                data = await getHtml(url);
                retry_counter++;
            } while (data === undefined && retry_counter < max_retry);
    
            let response = parseData(data, 'fetchNextUrl');
            let pageCount = parseInt(parseData(data, 'pageSize'), 10);
            new_url = `https://www.otomoto.pl${response}`;
            responseData.push(new_url);
            /**
            * As otomoto doesn't give way all adresses,
            * So we have follow this approach 
            */

                    do {
                       parsedUrl = new URL(new_url);
                       currentPage = parseInt(parsedUrl.searchParams.get('page'));
                       nextPage = currentPage + 1; 
                       parsedUrl.searchParams.set('page', nextPage);
                       new_url = `https://www.otomoto.pl${parsedUrl.pathname}${parsedUrl.search}`
                       responseData.push(new_url);
                    } while (pageCount >= nextPage);
                    
            return responseData;   
        
        } catch (error) {
            throw new Error;
        }  
}
export const fetchAllItems = async(url,
    retry_counter,
    max_retry) => {
    try {
        let data;
        do {
            data = await getHtml(url);
            retry_counter++;
        } while (data === undefined && retry_counter < max_retry);

        let response = parseData(data, 'fetchAllItems'); 
        return response;   
    } catch (error) {
        throw new Error;
    } 
}