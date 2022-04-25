const multer  = require('multer');
const { 
    uploadfileuser
} = require('./user.controller');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
     // cb(null, file.fieldname + '-' + uniqueSuffix)
     cb(null, Date.now()+file.originalname)
    }
  })

  const fileFilter=(req, file, cb)=>{
      if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
          cb(null, true);
      }else{
        cb(null, false);
      }
  }


const upload = multer(
    { 
        storage:storage,
        limits:{
            fileSize: 1024 * 1024 * 50
        },
        fileFilter:fileFilter 
    })


function userRoutes(app){   
    
    app.post("/user-profile-upload",upload.single('userprofileimg'), (req, res) =>{  
        
        const fileData = req.file.path;
        uploadfileuser(fileData,req, res);
        //  console.log(fileData);
        //  res.send({"okk":"okk"});
    });
}

module.exports = {
    userRoutes
}