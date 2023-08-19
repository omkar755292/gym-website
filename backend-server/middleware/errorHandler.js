const BAD_REQUEST = 400;
const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
const NOT_FOUND = 404;
const INTERNAL_SERVER_ERROR = 500;

const errorHandler = (err, req, res, next)=>{
    const statusCode = res.statusCode ? statusCode: 500;
    switch (statusCode) {
        case BAD_REQUEST:
            res.json({
                title: "BAD REQUEST",
                message: err.message
            });
            break;
        case UNAUTHORIZED:
            res.json({
                title: "UAUTHORIZED",
                message: err.message
            });
            break;
        case FORBIDDEN:
            res.json({
                title: "FORBIDDEN",
                message: err.message
            });
            break;
        case NOT_FOUND:
            res.json({
                title: "NOT FOUND",
                message: err.message
            });
            break;
        case INTERNAL_SERVER_ERROR:
            res.json({
                title: "INTERNAL SERVER ERROR",
                message: err.message
            });
            break;
    
        default:
            res.json({
                title: "UNKNOWN_ERROR",
                message: "Unkown Error Occur"
            });
            break;
    }
}

module.exports = errorHandler;