const BlogModel = require("../models/blogModel.js");

exports.home = async (req, res) => {
    try {
        const data = await BlogModel.find({});
        // console.log(data)
        res.render("index", { blogs: data });
    } catch (error) {
        console.log(error)
    }
}

exports.blogForm = (req, res) => {
    res.render("blogForm");
}

exports.addBlog = async (req, res) => {
    try {
        // console.log(req.body)
        const { path } = req.file;
        const blogData = new BlogModel({ ...req.body, blogImage: path });
        await blogData.save();
        res.redirect("/");
    } catch (error) {
        console.log(error)
    }

}