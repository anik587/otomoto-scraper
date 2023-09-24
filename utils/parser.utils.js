import {load} from 'cheerio';

export const parseData = (data) => {
    const $ = load(data);
    const links = $('.pagination-item__active');
    console.log(links.html())
    const nextPaginationItem =  links.nextAll('li.pagination-item').first();
    return nextPaginationItem.find('a').attr('href');
}