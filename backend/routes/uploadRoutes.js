import express from 'express'
import path from 'path'
import multer from 'multer'
import sharp from 'sharp'
import {nanoid} from 'nanoid'

const router = express.Router()

const storage = multer.memoryStorage()

function checkFileType(file, cb, filetypes) {
    const extname = filetypes.test(path.extname(file.originalname).toLocaleLowerCase())
    const mimetype = filetypes.test(file.mimetype)
    
    if (mimetype && extname)
    {
        return cb(null, true)
    }
    else
    {
        return cb('Solo se permite la subida de imagenes.')
    }
}

const uploadImages = multer({
    storage,
    fileFilter: function(req, file, cb){
        const filetypes = /jpg|jpeg|png/
        checkFileType(file, cb, filetypes)
    }
})

router.post('/images', uploadImages.array('images', 5), async (req, res) => {
  try {
    const filepaths = []
    const height = req.body.height || 800
    const width = req.body.width || 800
    for (let i = 0; i < req.files.length; i++) {
      const picture = req.files[i];
      const picname = `pic-${nanoid(5)}-${Date.now()}.webp`
      await sharp(picture.buffer)
                .resize(Number(height),Number(width), { fit: 'inside'})
                .toFile(`${process.cwd()}/public/img/${picname}`)
      filepaths.push(`/public/img/${picname}`)
    }
    res.status(201).json({imgpaths: filepaths})
  } catch (error) {
    console.log(error);
    res.status(400).json({error: 'Error al subir el archivo.'});
  }
})

export default router