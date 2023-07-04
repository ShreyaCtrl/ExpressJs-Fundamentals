const authorize = (req, res, next) => {
    const { user } = req.query;
    console.log(user);
    if (user === 'coffee') {
        req.user = { name: 'coffee', superhero: 'krypto' }
        console.log(req);
        res.status(200).send("You are authorized");
        next();
    }
    else {
        // console.log('authorize');
        res.status(401).send('Unauthorized')
        // next();
    }
}

module.exports = authorize;