import { getHtml, parseData, resSend } from './utils/index.js';


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
            /**
            * As otomoto doesn't give way all adresses,
            * So we have follow this approach 
            */
            if(!response) {
                const parsedUrl = new URL(url);
                const currentPage = parseInt(parsedUrl.searchParams.get('page'));
                
                if (!isNaN(currentPage)) {
                    const nextPage = currentPage + 1;
                    parsedUrl.searchParams.set('page', nextPage);
                    response = `${parsedUrl.pathname}${parsedUrl.search}`;
                }
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
export const fetchAllPages = (url,
    retry_counter,
    max_retry) => {
    try {
        
        return response;   
    } catch (error) {
        throw new Error;
    } 
}
export const fetchAllItems = (url,
    retry_counter,
    max_retry) => {
    try {
        
        return response;   
    } catch (error) {
        throw new Error;
    } 
}