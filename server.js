
const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
if (req.method == "OPTIONS") {
  res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
  return res.status(200).json({});
}

next();
});

app.use(fileUpload());

// Upload Endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/frontend/public/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/public/${file.name}` });
  });
});

app.listen(5000, () => console.log('Server Started...'));
