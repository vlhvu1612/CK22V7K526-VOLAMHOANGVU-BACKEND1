/* eslint-disable no-undef */
class ApiError extends Error {
    constructor(statusCode, messgae){
        super();
        this.statusCode = statusCode;
        this.message = messgae;
    }
}
module.exports = ApiError;