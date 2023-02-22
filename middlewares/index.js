const checkBodyTitle = (req, res, next) => {
    console.log('fn 1');
    if(req.body.title !== "test1" ) {
        return res.status(500).json({message: "Error body title"})
    }
    return next();
}

const checkQueryData = (req, res, next) => {
    console.log('fn 2');
    if(req.query.data !== "ciao" ) {
        return res.status(500).json({message: "Error query data"})
    }
    return next();
}

module.exports = {
    checkBodyTitle,
    checkQueryData
}