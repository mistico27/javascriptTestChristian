const globalErroHandler = (err,req,res,next)=>{

    ///Status
    ///Message
    ///Stack
    const stack=err.stack;
    const message=err.message;
    const status=err.status?err.status:"failed";
    const statusCode=err.statusCode?err.statusCode:500;
    res.status(statusCode).json({
        status,
        message,
        stack
    });    
};


//Not found
const notFoundError=(req,res,next)=>{
    const err= new Error(`Can not find ${req.originalUrl} on the server`);
    next(err);

};

module.exports = {globalErroHandler,notFoundError};