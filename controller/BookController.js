

exports.index = async (req, res) => {
    console.log(req.body);
    res.json(req.body)
}