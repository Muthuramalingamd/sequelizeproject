var projectModel  = require('../models').project;
const { v4: uuidv4 } = require('uuid');
var customId = require("custom-id");
/*Create new project init */
exports.addProject = (req, res) => {
    req.body.projectId = uuidv4();
    req.body.id = customId({});
projectModel.create(req.body)
    .then(function(data){
       return res.json({
           project_data:data});
    }).catch(function(error){
       return res.json({er:error});
    })
}

/*get existing project based on specific id */
exports.getProjectById = (req, res) => {
    console.log("koo--",req.params);
    projectModel.findAll({where: {"projectId":req.params.projectId}})
    .then(function(data){
       return res.json({
           project_data:data});
    }).catch(function(error){
       return res.json({er:error});
    })
}