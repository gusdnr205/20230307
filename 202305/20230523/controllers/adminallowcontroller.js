const { where } = require("sequelize");
const {User,post,admin}=require("../models");

exports.viewnotallowuser= async()=>{
    try {
        const data=await User.findAll({where:{membership:0}});
        return data;
    } catch (error) {
        console.log("viewnotallowuser",error);
        
    }
}
exports.upgrademembership=async(id,membership_rank)=>{
    try {
        const user=await User.findOne({where:{id:id}})
        console.log(user)
        if (user) {
            user.membership = membership_rank;
            await user.save();
            console.log('Membership updated successfully');
          } else {
            console.log('User not found');
          }
    } catch (error) {
        console.log(error);
    }
}
