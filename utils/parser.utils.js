import {load} from 'cheerio';

export const parseData = (data, routes) => {
    const $ = load(data);
    let section;
    let responseData = [];
    switch (routes) {
        case 'fetchNextUrl':
            section = $('.pagination-item__active');
            const nextPaginationItem =  section.nextAll('li.pagination-item').first();
            return nextPaginationItem.find('a').attr('href');

        case 'fetchItems':
             
            $('article.ooa-1t80gpj').each((index, element) => {
                const dataId = $(element).attr('data-id');
                const href = $(element).find('a').attr('href');
                responseData.push({
                    "#": index + 1,
                    "id": dataId,
                    "url": href
                });
            });
            return responseData;
           
        case 'fetchCounts':
            section = $('div.e15pjc9o0 a').first().text();
            return section.split(' ')[1].replace(/\D/g, '');
           
        case 'fetchItemsDetails':
            
           
        case 'fetchAllPages':
            
           
        case 'fetchAllItems':
            
           
        default:
           
    }
}