import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import blogDAO from "./dao/dao.js";
import postDao from "./dao/postDao.js"

dotenv.config();

const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 3000

MongoClient.connect(
    process.env.ATLAS_URI,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    }
)

.catch(err => {
    console.error(err.stack);
    process.exit(1);
})
.then(async client => {
    await blogDAO.injectDB(client);
    await postDao.injectDB(client);
    app.listen(port, ()=> {
        console.log(`listening on ${port}`);
    })
})