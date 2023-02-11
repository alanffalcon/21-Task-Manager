const {CustomAPIError} = require('../errors/custom-error')

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError){
        return res.status(err.status).json({ msg: err.message })
    }
    return res.status(500).json({ msg: 'Something went wrong, try again alan' })

    //return res.status(500).json({ msg: 'Something went wrong, try again alan'})
    //return res.status(500).json({ msg: err})
}

module.exports = errorHandlerMiddleware