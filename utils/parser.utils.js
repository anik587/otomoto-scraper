import {load} from 'cheerio';

export const parseData = (data, routes) => {
    const $ = load(data);
    let section;
    let responseData = [];
    let details = {};
    switch (routes) {
        case 'fetchNextUrl':
            section = $('.pagination-item__active');
            const nextPaginationItem =  section.nextAll('li.pagination-item').first().find('a').attr('href');
            return nextPaginationItem;

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
            const offerMetaValues = $('.offer-meta__value').map((_, element) => $(element).text()).get();

            details.ad_id = offerMetaValues[1],
            details.reg_date = offerMetaValues[0],
            details.price = $('.offer-price__number').first().text().trim().replace(/\s+/g, '')


            $('.offer-params__label').each((index, element) => {
            const text = $(element).text().trim();
                if (text === 'Rok produkcji') {
                    details.year_of_production = $(element).next('.offer-params__value').text().trim();
                } else if (text === 'Przebieg') {
                    details.mileage = $(element).next('.offer-params__value').text().trim();
                } else if (text === 'Rodzaj paliwa') {
                    details.fuel_type = $(element).next('.offer-params__value').text().trim();
                } else if (text === 'Marka pojazdu') {
                     details.vehicle_brand = $(element).next('.offer-params__value').text().trim();
                } else if (text === 'Model pojazdu') {
                    details.vehicle_model = $(element).next('.offer-params__value').text().trim();
               }
            });

            return details;
           
        case 'fetchAllPages':
            break;
           
        case 'fetchAllItems':
            const articles = $('article');
            articles.each((index, article) => {
                const dataId = $(article).attr('data-id');
                if (dataId) {
                    details.data_id = $(article).attr('data-id');
                    details.url = $(article).find('a').attr('href');
                    const descriptionText = $(article).find('.ev7e6t88').text().split(' • ');
                    details.price = $(article).find('.ooa-1wb7q8u h3').text() + $(article).find('.ooa-1wb7q8u p').text(); 
                    details.power = descriptionText[1];
                    details.engine = descriptionText[0];
                     $(article).find('dd').each((index, ddElement) => {
                        const dataParameter = $(ddElement).attr('data-parameter');
                        if(dataParameter === 'mileage') {
                            details.milage = $(ddElement).text();
                        } else if(dataParameter === 'fuel_type') {
                            details.fuel_type = $(ddElement).text()
                        } else if(dataParameter === 'engine_capacity') {
                            details.engine_capacity = $(ddElement).text()
                        } else if(dataParameter === 'engine_power') {
                            details.engine_power = $(ddElement).text()
                        } else if(dataParameter === 'year') {
                            details.year = $(ddElement).text()
                        }
                    });
                    responseData.push(details);
                }
        
            });
            return responseData;
           
        default:
           
    }
}