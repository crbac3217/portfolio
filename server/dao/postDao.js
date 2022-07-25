import mongodb from "mongodb"
const ObjectID = mongodb.ObjectId

let posts

export default class postDao{
    static async injectDB(conn){
        if(posts){
            return
        }
        try{
            posts = await conn.db(process.env.ATLAS_NS).collection("blogdatas")
        }catch(e){
            console.error(`unable to establish connection with the posts?? ${e}`)
        }
    }
    static async addPost(name, type, tags, year, img, imgdesc, bodytext){
        try{
            const post = {
                name: name,
                type: type,
                tags: tags,
                year: year,
                img: img,
                imgdesc: imgdesc,
                bodytext: bodytext
            }
            return await posts.insertOne(post)
        }catch(e){
            console.error(`unable to post : ${e}`)
        }
    }
    static async updatePost(id, name, type, tags, year, img, imgdesc, bodytext){
        try{
            const updateResponse = await posts.updateOne({
                _id: ObjectID(id)
            },{$set:
                {
                name: name,
                type: type,
                tags: tags,
                year: year,
                img: img,
                imgdesc: imgdesc,
                bodytext: bodytext
            }})
            console.log(updateResponse);
        }catch(e){
            console.error(`unable to update post : ${e}`)
        }
    }
    static async deletePost(id){
        try{
            const deleteResponse = await posts.deleteOne({
                _id: ObjectID(id)
            })
            console.log(deleteResponse)

        }catch(e){
            console.error(`unable to delete post : ${e}`)
        }
    }
}