// TODO use package error or make error class
export default function errorHandler(err, req, res, next) {
    return res.send(err)
}