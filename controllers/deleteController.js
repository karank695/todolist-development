module.exports.delete = (req, res) => {
    console.log('hi');
    let ids = req.params.id.split(" ");
    console.log(ids)
    console.log(ids.length);
    res.send('back');
}