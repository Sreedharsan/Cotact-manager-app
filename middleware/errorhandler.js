const {constants} = require("../constants")
const errorhandler = (err, req, res,next) => {
    const statusCode = res.statusCode? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({title:"Validation failed" ,
            message: err.message, 
            stackrace: err.stack
        });
            
        case constants.NOT_FOUND:
            res.json({title:"not found!" ,
            message: err.message,
            stackrace: err.stack
        });
           
        case constants.UNAUTHORIZED:
            res.json({title:"unauthorized!" ,
            message: err.message,
            stackrace: err.stack
        });
           
        case constants.FORBIDDEN:
            res.json({title:"Forbidden!" ,
            message: err.message,
            stackrace: err.stack
        });

        case constants.SERVER_ERROR:
            res.json({title:"Server error!" ,
            message: err.message,
            stackrace: err.stack
        });
        
        default:
            console.log("No Error!");
            break;
           
    }
    
};

module.exports = errorhandler;

