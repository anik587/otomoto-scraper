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
            let pageCount = parseData(data, 'pageSize');
            /**
            * As otomoto doesn't give way all adresses,
            * So we have follow this approach 
            */
            if(!response) {
                const parsedUrl = new URL(url);
                const currentPage = parseInt(parsedUrl.searchParams.get('page'));
                if (!isNaN(currentPage)) {
                    const nextPage = currentPage + 1;
                    console.log(nextPage)
                    if (pageCount >= nextPage){
                        parsedUrl.searchParams.set('page', nextPage);
                        console.log(parsedUrl.pathname);
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
            let data;
            do {
                data = await getHtml(url);
                retry_counter++;
            } while (data === undefined && retry_counter < max_retry);
    
            let response = parseData(data, 'fetchNextUrl');
            let pageCount = parseData(data, 'pageSize');
            /**
            * As otomoto doesn't give way all adresses,
            * So we have follow this approach 
            */
            if(!response) {
                const parsedUrl = new URL(url);
                const currentPage = parseInt(parsedUrl.searchParams.get('page'));
                if (!isNaN(currentPage)) {
                    const nextPage = currentPage + 1;
                    console.log(nextPage)
                    if (pageCount >= nextPage){
                        parsedUrl.searchParams.set('page', nextPage);
                        console.log(parsedUrl.pathname);
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
export const fetchAllItems = async(url,
    retry_counter,
    max_retry) => {
    try {
        let data;
        let responseData = [];
        do {
            data = await getHtml(url);
            retry_counter++;
        } while (data === undefined && retry_counter < max_retry);
        let response = parseData(data, 'fetchAllItems');
        response = `https://www.otomoto.pl${response}`;  
        responseData.push(response);
        console.log(responseData);
        return responseData;   
    } catch (error) {
        throw new Error;
    } 
}