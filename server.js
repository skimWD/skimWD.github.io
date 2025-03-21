const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/log-click', (req, res) => {
    const { imageId, timestamp } = req.body;
    console.log(`Image Clicked: ${imageId}, Time: ${new Date(timestamp).toLocaleString()}`);
    res.status(200).send({ message: 'Data logged successfully' });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
