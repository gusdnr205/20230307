const { where } = require('sequelize');
const { User, Post } = require('../models');

exports.Write = async (req, res) => {
    try {
        console.log("컨트롤까지는옴");
        const { title, content } = req.body;
        // const { acc_decoded } = req;
        // console.log(acc_decoded);
        await Post.create({
            title,
            content,
            // user_id: acc_decoded.name
            user_id: "hahah"
        })

    } catch (error) {
        console.log(error);

    }

    // res.redirect("http://127.0.0.1:5500/202305/20230526/frontend/main.html")
    res.status(200).json({ message: "haha성공" });

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
            console.log("컨트롤러", jsonData);
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

exports.Uppdate = async (req, res) => {
    try {
        const { postId } = req.params;
        const { title, content } = req.body;
        console.log("router", postId, title, content);
        // Update the post with the given postId in your database or storage
        const post = await Post.findOne({
            where: {
                ["id"]: postId
            }
        });
        await post.update({ title, content });
        // Return a success message or updated post data
        res.json({ message: 'Post updated successfully', postId, title, content });
        if (!post) {
            // If post not found, return an error response
            return res.status(404).json({ error: 'Post not found' });
        }


    } catch (error) {
        console.log(error);
    }

}
exports.Delete = async (req, res) => {
    try {

        const { postId } = req.params;
        const post = await Post.findByPk(postId);

        // Delete the post with the given postId from your database or storage
        if (!post) {
            // If post not found, return an error response
            return res.status(404).json({ error: 'Post not found' });
          }
      
          // Delete the post
        await post.destroy();
      
        // Return a success message
        res.json({ message: 'Post deleted successfully', postId });

    } catch (error) {
        console.log(error);
    }
}