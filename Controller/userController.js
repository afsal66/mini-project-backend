const userModel = require("../Model/userModel");
const jwt = require('jsonwebtoken');

const createToken = (userId) => {
    const token = jwt.sign({ userId }, "JWT", { expiresIn: "48h" });
    return token;
};

module.exports.signup = async (req, res, next) => {
    console.log(req.body, "@@@@@@@@@@@@@@@@@@@@@@@@")
    const { email, password, username } = req.body;
    try {
        const emailExists = await userModel.findOne({ email: email })
        if (emailExists) {
            return res.json({
                message: 'Email  already exists',
                status: false,
            });
        }
        const newUser = new userModel({
            username: username,
            email: email,
            password: password,
        });
        const userDetails = await newUser.save();
        const token = createToken(userModel._id);
        return res.json({
            message: "Account  created successfully",
            status: false,
            token,

        });
    } catch (error) {
        console.log(error);
        return res.json({
            message: "internal server in sugn up",
            status: false,
        })
    }
};




module.exports.Login = async (req, res, next) => {
    console.log(req.body, "@@@@@@@@@@@@@@@@@@@@@@");
    const { email, password } = req.body;
  
    try {
      const user = await userModel.findOne({ email: email });
  
      if (user) {
        const passwordMatches = await bcrypt.compare(password, user.password);
  
        if (passwordMatches) {
            return res.json({message:"login successfully",status:false})
        } else {
            return res.json({message:"incorrect password",status:false})
        }
      } else {
        return res.json({message:"Account Not found",status:false})
      }
    } catch (error) {
      console.log(error);
      
    }
  };
