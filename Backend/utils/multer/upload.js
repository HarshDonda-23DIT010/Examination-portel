// upload.js
import multer from 'multer';
const storage = multer.memoryStorage(); // store in memory (or use diskStorage)
const upload = multer({ storage });

export default upload;
