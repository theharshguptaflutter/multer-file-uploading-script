const multer  = require('multer');
const fs = require('fs');
const { 
   // uploadfileuser
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
        //console.log(req.file.path);
        var realFile = Buffer.from(req.file, "base64");
        fs.writeFileSync(req.body.name, realFile, "utf8")
        //const fileData = req.file.path;
       // console.log(req.body);
       // console.log(fileData);
        console.log(realFile);
       // uploadfileuser(fileData,req, res);     
      //  console.log(fileData);
     //  res.send({"okk":"okk"});
    });

    app.post("/test-image", (req, res) =>{  
       
       // var realFile = Buffer.from(req.body.image).toString('base64');
       // fs.writeFileSync('image.png', realFile, "utf8")
        
       //2nd link//
        // const realFile = fs.readFileSync(req.body.image,"base64");  
        // const buffer = Buffer.from(base64, "base64"); 
        // fs.writeFileSync("new-path.jpg", buffer);
        // console.log(realFile);

        var base64String = req.body.image;
        var fileTitle = req.body.filetitle;
        var realFile = Buffer.from(base64String,"base64");
       
        fs.writeFile(fileTitle, realFile, {encoding:'base64'}, function(err){
            if(err){
                console.log(err);

            }else{
                console.log("New file Uploaded");
            }
        })
      res.send({"okk":"okk"});
      //console.log(realFile);
     // console.log('Limit file size: '+limit);
     
    });
}

module.exports = {
    userRoutes
}