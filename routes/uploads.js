import express from "express";
import multer from "multer";

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/portadas/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + ".jpg");
  },
});

var upload = multer({
  storage: storage,
});
const router = express.Router();

router.post("/uploads", upload.single("image"), function (req, res, next) {
  console.log(req.file);
});

module.exports = router;
