



 const createUserhandler =(req, res)=>{
    console.log("user created successfully");
    res.send("user created successfully");
}


 const userLoginHandler =(req, res)=>{
    console.log("user login successfully");
    res.send("user login successfully")
};

 const userUpdateHandler =(req, res)=>{
    console.log("user update successfully")
    res.send("user update successfully")
};

 const userDeleteHandler =(req, res)=>{
    console.log("user delete successfully")
    res.send("user delete successfully")
}



module.exports = {createUserhandler, userUpdateHandler, userLoginHandler, userDeleteHandler};