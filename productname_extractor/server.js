const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/extract', (req, res) => {
    const data = req.body.data;

    const result = searchForKeysAndData(data, 'eVar42');
    const dataList = result.map(pair => pair.value);

    res.json(dataList);
});

function searchForKeysAndData(inputString, keyToSearch) {
    const resultList = [];

    const pattern = new RegExp(`${keyToSearch}\\s*=\\s*([^,]+)`, 'g');
    let match;

    while ((match = pattern.exec(inputString)) !== null) {
        const value = match[1].trim();
        resultList.push({ key: keyToSearch, value });
    }

    return resultList;
}

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
