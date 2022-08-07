// The following code as modified from what is provided in the Cloudinary documentation
var cloudinaryWidget = cloudinary.createUploadWidget(
  {
    cloudName: "parkour-review",
    uploadPreset: "parkour",
  },
  (err, result) => {
    if (!err && result && result.event === "success") {
      console.log("Image widget working! Image info is here: ", result.info);
    }
  }
);

document.getElementById("upload_widget").addEventListener(
  "click",
  function () {
    cloudinaryWidget.open();
  },
  false
);
