var customer = require('../model/customer');
exports.CreateCustomer = function (req, res) {
    var entry = new customer
        ({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            avatr: req.body.avatr
        })
    entry.save();
    res.render('/')
};
exports.getCustomer = function (req, res) {
    res.render('getCustomer', { title: "new Customer" })
}
