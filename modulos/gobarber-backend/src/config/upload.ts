import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const directoryUpload = path.resolve(__dirname, '..', '..', 'upload');

export default {
  directoryUpload,
  storage: multer.diskStorage({
    destination: directoryUpload,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('HEX');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
