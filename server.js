let express = require("express")
let mongoose = require('mongoose')
let cors = require('cors')
let path = require('path')
require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ejmaaoq.mongodb.net/LibraryDB`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("connected",()=>{
    console.log("mongodb is connected");
});

const app=express();
app.use(express.json());
app.use(cors());

app.use('/public', express.static('public'));


app.use('/api/users', require("./routes/student_route"))
app.use('/api/books', require("./routes/book_route"))
app.use('/api/issues', require("./routes/issue_route"))

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static('client/build'))

    app.get('*', (req, res) => {

        res.sendFile(path.resolve(__dirname, 'client/build/index.html'))

    })
}

const port=process.env.PORT || 5000;

const server=app.listen(port,()=>{
    console.log("listening on port "+port);
});

app.use((req,res,next)=>{
    setImmediate(()=>{
        next(new Error('Something went wrong'));
    });
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});