import { error } from 'console';
import * as services from './services.js';
import { resSend } from './utils/index.js';

export const fetchNextUrl = async(req, res) => {
    try {
        const url = req?.url;
        const retry_counter = req?.retry_counter;
        const max_retry = req?.max_retry;
        const response = await services.fetchNextUrl(url, 
            retry_counter, 
            max_retry);

        if(response) 
            return resSend(200, 'Successfully Scraped', response, res);

            return resSend(500, 'Something Went Wrong', [], res);
    } catch (error) {
        return resSend(500, 'Internal Server Error', [], res);
    }

}

export const fetchItems = async(req, res) => {
    try {
        const url = req?.url;
        const retry_counter = req?.retry_counter;
        const max_retry = req?.max_retry;
        const response = await services.fetchItems(url, 
            retry_counter, 
            max_retry);

        if(response) 
            return resSend(200, 'Successfully Scraped', response, res);
        
        return resSend(500, 'Something Went Wrong', [], res);
    } catch (error) {
        return resSend(500, 'Internal Server Error', [], res);
    }
}

export const fetchCounts = async(req, res) => {
    try {
        const url = req?.url;
        const retry_counter = req?.retry_counter;
        const max_retry = req?.max_retry;
        const response = await services.fetchCounts(url, 
            retry_counter, 
            max_retry);

        if(response) 
            return resSend(200, 'Successfully Scraped', response, res);

        return resSend(500, 'Something Went Wrong', [], res);
    } catch (error) {
        return resSend(500, 'Internal Server Error', [], res);
    }

}

export const fetchItemsDetails = async(req, res) => {
    try {
        const url = req?.url;
        const retry_counter = req?.retry_counter;
        const max_retry = req?.max_retry;
        const response = await services.fetchItemsDetails(url, 
            retry_counter, 
            max_retry);

        if(response) 
            return resSend(200, 'Successfully Scraped', response, res);

        return resSend(500, 'Something Went Wrong', [], res);
    } catch (error) {
        return resSend(500, 'Internal Server Error', [], res);
    }

}

export const fetchAllPages = async(req, res) => {
    try {
        const url = req?.url;
        const retry_counter = req?.retry_counter;
        const max_retry = req?.max_retry;
        const response = await services.fetchAllPages(url, 
            retry_counter, 
            max_retry);

        if(response) 
            return resSend(200, 'Successfully Scraped', response, res);

        return resSend(500, 'Something Went Wrong', [], res);
    } catch (error) {
        return resSend(500, 'Internal Server Error', [], res);
    }

}

export const fetchAllItems = async(req, res) => {
    try {
        const url = req?.url;
        const retry_counter = req?.retry_counter;
        const max_retry = req?.max_retry;
        const response = await services.fetchAllItems(url, 
            retry_counter, 
            max_retry);

        if(response) 
            return resSend(200, 'Successfully Scraped', response, res);

        return resSend(500, 'Something Went Wrong', [], res);
    } catch (error) {
        return resSend(500, 'Internal Server Error', [error], res);
    }

}