const User = require('./user.schema');

// const urlfiled = "upload.single('userprofileimg')";

async function uploadfileuser(fileData,req, res) {
    console.log(fileData);

    await User({
        // id: new mongoose.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.number,
        gender: req.body.gender,
        profileimage:fileData
    })
        .save()
        .then((data) => {
            res.status(201).send({okk:"okk"});
        })
        .catch((err) => {
            res.status(400).send(err);
        });

    //   console.log(req.file);
    //  res.send({"okk":"okk"});
   
}


module.exports = {
    uploadfileuser
};