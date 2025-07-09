const express = require('express');
const router = express.Router();
const { 
  getProjects, 
  addProject, 
  uploadProjectImage 
} = require('../controllers/project');

router.get('/', getProjects);
router.post('/', addProject);
router.post('/upload', upload.single('image'), uploadProjectImage);

module.exports = router;