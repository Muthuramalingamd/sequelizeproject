const router = require('express').Router();

var ProjectController  = require('../controller/project_request');

/*Create new project init API */
router.post('/', (req, res) => {
    return ProjectController.addProject(req, res);
});

/*get project  by id API */
router.get('/:projectId?', (req, res) => {
    return ProjectController.getProjectById(req, res);
});
module.exports = router;
