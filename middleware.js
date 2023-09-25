import { resSend } from './utils/index.js'

export const validate = (req, res, next)=> {
    if(!req?.body?.url)
        return resSend(400, 'Bad Request', [], req, res);
    req.url = req.body.url;
    next();
}