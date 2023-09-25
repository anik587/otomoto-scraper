export const resSend = (
    status,
    message,
    data,
    req,
    res
  ) => {
    console.log(`${req.uri} -- ${status}`);
    res.status(status);
    res.json({
        message: message,
        data: data
    });
    return res.end();
  };