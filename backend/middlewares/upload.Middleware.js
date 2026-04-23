import multer from 'multer'

const storage = multer.diskStorage({}) //temporary storage

const upload  = multer({
  storage,
  limits : {fileSize : 2*1024*1024} //2mb max
})


export default upload;