const {InitPostTable, InsertPost, PostList,DeletPost,InitTokenTable,InsertToken,SelectToken,UpdateToken} = require("./postmodels");
const ehdgml = require("./usersmodel");
// PostList()
// InitPostTable()
// InitTokenTable()InsertToken
// InsertToken("asdf","asdf");
// SelectToken()

// InsertPost("제목","내용");
module.exports = {ehdgml,InitPostTable,InsertPost,PostList,DeletPost,InsertToken,UpdateToken,SelectToken};