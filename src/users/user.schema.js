const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema(
    {
        // _id:{type:mongoose.Schema.Types.ObjectId,},
        name:{
            type:String
        },
        email:{
            type:String
        },
        password:{
            type:String
        },
        phone:{
            type:Number
        },
        gender:{
            type:String
        },
        profileimage:{
            type:String
        }
    }
)

// module.exports = mongoose.model('User', userSchema);
// module.exports = Product;

const User = mongoose.model("User", UserSchema);
module.exports = User;