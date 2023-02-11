// Le pasamos una funcion como parametro (fn)
const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
        await fn(req, res, next)    
        } 
        catch (error) {
            next(error)
        }
    }
}

module.exports = asyncWrapper