const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var mongojs = require('mongojs');
const uuid = require('uuid/v4');
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));

var db = mongojs('mongodb://localhost:27017/shopping', [])


const port = 8000;
app.listen(port, () => {
    console.log('We are live on ' + port);
});

app.get('/', function (req, res) {

})



app.get('/verify', function (req, res) {
    console.log(req.query.userid);
    db.register.findAndModify({
        query: { _id: mongojs.ObjectId(req.query.userid) },
        update: {
            $set: {
                verify: "true"
            }
        }
    }, function (err, doc) {
        res.json(doc);
    })
})



app.get('/cart', function (req, res) {
    console.log(req.query.email);
    db.cart.find({ email: req.query.email }, function (err, doc) {
        res.json(doc);
    })
})



app.post('/login', function (req, res) {
    var genid = uuid();
    var tokenObj = {};
    tokenObj.email = req.body.email;
    tokenObj.uuid = genid;
    try {

        db.register.findOne({ email: req.body.email, verify: "true" }, function (err, user) {
            if (!user) {
                res.json("Not Registerd User");
            } else if (user.password != req.body.password) {
                res.json("Wrong Password");
            } else {
                console.log("login success");
                    res.json(tokenObj);
            }
        })
    }
    catch (ex) {
        console.error(ex)
        res.status(420).json(getResponse(false, 'Could not find a related key'))
    }
});

app.post("/cart", function (req, res) {
    console.log(req.body);
    db.cart.insert(req.body, function (err, docs) {
        res.json(docs);
    })
})





app.post('/register', function (req, res) {

    try {
        db.register.findOne({ email: req.body.email }, function (err, docs) {
            console.log(docs);
            if (docs == null) {
                db.register.insert(req.body, function (err, docs) {

                    var email = '<b>Please click to activate your account http://localhost:4200/verify/' + docs._id;
                    require('gmail-send')({
                        user: 'ravitechprocompsoft@gmail.com',           // Your GMail account used to send emails
                        pass: 'jobseeder@123',           // Application-specific password
                        to: req.body.email,           // Send to yourself
                        subject: 'ping',
                        text: email,  // Plain text
                    })({});


                    res.json(docs);
                })
            }
            else {

                res.json("Already exists")

            }

        })
    }
    catch (ex) {
        console.error(ex)
        res.status(404).json(getResponse(false, 'Could not find a related key'))
    }

});