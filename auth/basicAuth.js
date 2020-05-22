const checkUser = async (req,res,next) => {
  if (req.query.id != 1234) {
    return res.status(401).json("not valid user")
  } 
  next()
};

module.exports = {
  checkUser,
};
