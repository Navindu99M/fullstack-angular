var userService = require('./userService');

var getDataConntrollerfn = async (req, res) =>
{ try{
    var empolyee = await userService.getDataFromDBService();
    res.send({ "status": true, "data": empolyees });
}catch{

}
}

var createUserControllerFn = async (req, res) => 
{
    try{
    var status = await userService.createUserDBService(req.body);

        res.send({ "status": true, "message": "User created successfully" });
    }catch(e){
        res.send({ "status": false, "message": "Error creating user" });
    }
}

module.exports = { getDataConntrollerfn, createUserControllerFn};



/*(async () => {
    try {
        const user = await empolyee('');
        console.log(user);
    } catch (error) {
        console.log(error);
    }
})();*/