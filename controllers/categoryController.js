

exports.getAllCategories = (req, res) => {
    res.send("All categories will be dispayed here!");
    res.end();
};

exports.getCategoryById = (req, res) => {
    const { id } = req.params;
    res.send(`This is the page for category with id: ${id}`);
    res.end();
}