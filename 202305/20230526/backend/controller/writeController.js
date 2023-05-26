const { User, Post } = require('../models');

exports.Write = async (req, res) => {
    try {
        console.log("컨트롤까지는옴");
        const { title, content } = req.body;
        const { acc_decoded } = req;
        console.log(acc_decoded);
        await Post.create({
            title,
            content,
            user_id: acc_decoded.name
        })

    } catch (error) {
        console.log(error);

    }

    res.redirect("http://127.0.0.1:5500/202305/20230526/frontend/main.html");

}

exports.readall = async (req, res) => {
    try {
        // console.log("dd");
        // let ads=await Post.findAll();
        // console.log(ads);
        Post.findAll().then(posts => {
            // Convert the retrieved posts to JSON format
            const jsonData = posts.map(post => post.toJSON());

            // Send the JSON response
            console.log("컨트롤러",jsonData);
            res.json(jsonData);
        }).catch(error => {
                // Handle any errors that occur during the query
                console.error(error);
                res.status(500).json({ error: 'Internal server error' });
            });
        // res.json(data2);
    } catch (error) {
        console.log(error);
    }
}