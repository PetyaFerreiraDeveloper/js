const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/users', (req, res) => {
    const { username, password } = req.body;

    // validate username
    // validate password
    // save user to database

    const validPassword = true;
    if (validPassword) {
        res.send({ message: 'Valid user'});
    } else {
        res.send({error: 'Invaid password'})
    }
})

app.listen(8080, () => console.log('Listening on port 8080'));