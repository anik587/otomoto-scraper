import requestPromise from 'request-promise';
export const getHtml = async(url) => {
    const options = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'
        },
        uri: url,
    };
    const response = await requestPromise(options)
        .then(function (data) {
            return data;
        })
        .catch(function (err) {
            return err;
        });
    return response;
}