export const resSend = (
    status,
    message,
    data,
    res
  ) => {

    res.status(status);
    res.json({
        message: message,
        data: data
    });
    return res.end();
  };