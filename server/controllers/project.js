const sharp = require('sharp');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

const uploadProjectImage = async (req, res) => {
  try {
    const file = req.file;
    const croppedImage = await sharp(file.path)
      .resize(450, 350) // Crop to required ratio
      .toBuffer();
    
    // Save croppedImage to cloud storage or file system
    // Return image URL
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};