const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

app.listen(3000);
app.use(bodyParser.json());
app.use(express.static(__dirname));

// 读文件
function read(cb) {
    fs.readFile('./book.json', 'utf8', function (err, data) {
        if (err || data.length === 0) {
            cb([]);
        } else {
            cb(JSON.parse(data));
        }
    });
}

// 写文件
function write(data, cb) {
    fs.writeFile('./book.json', JSON.stringify(data), cb);
}

let sliders = require('./sliders');
app.get('/', function (req, res) {
    res.sendFile('./index.html', {root: __dirname});
});
app.get('/api/sliders', (req, res) => {
    res.send(sliders);
});
app.get('/api/hot', (req, res) => {
    read(books => {
        res.send(books.reverse().slice(0, 6));
    });
});

app.get('/api/book', function (req, res) {
    let id = parseInt(req.query.id);
    if (!isNaN(id)) {
        read(function (books) {
            let book = books.find(item => item.bookId == id) || {};
            res.send(book);
        });
    } else {
        read(function (books) {
            res.json(books.reverse());
        });
    }
});
app.post('/api/book', function (req, res) {
    let book = req.body;
    read(function (books) {
        book.bookId = books.length ? books[books.length - 1].bookId + 1 : 1;
        books.push(book);
        write(books, function () {
            res.json(book);
        });
    });
});
app.delete('/api/book', function (req, res) {
    read(function (books) {
        books = books.filter(item => item.bookId != req.query.id);
        write(books, function () {
            res.json({}); // 删除返回空对象
        });
    });
});
app.put('/api/book', function (req, res) {
    if (req.query.id) {
        let book = req.body;
        read(function (books) {
            books = books.map(item => {
                if (item.bookId == req.query.id) {
                    return book;
                }
                return item;
            });
            write(books, function () {
                res.json(book);
            });
        });
    }
});
app.all('*', function (req, res) {
    res.sendFile('./index.html', {root: __dirname});
});
