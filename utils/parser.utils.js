import {load} from 'cheerio';

export const parseData = (data, routes) => {
    const $ = load(data);
    let section;
    switch (routes) {
        case 'fetchNextUrl':
            section = $('.pagination-item__active');
            console.log(section.html())
            const nextPaginationItem =  section.nextAll('li.pagination-item').first();
            return nextPaginationItem.find('a').attr('href');

        case 'fetchItems':
            section = $('.ooa-1000v3p');
            console.log(section.html())

            return section.next('a').first().text();
           
        case 'fetchCounts':
            section = $('div.e15pjc9o0 a').first().text();
            return section.split(' ')[1].replace(/\D/g, '');
           
        case 'fetchItemsDetails':
            
           
        case 'fetchAllPages':
            
           
        case 'fetchAllItems':
            
           
        default:
           
    }
}