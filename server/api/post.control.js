import dao from "../dao/postDao.js"

export default class postCtrl{
    static async apiPost(req, res, next){
        try{
            const name = req.body.title
            const type = req.body.type
            const tags = req.body.tags
            const year = req.body.year
            const img = req.body.img
            const imgdesc = req.body.imgdesc
            const bodytext = req.body.text

            const postResponse = await dao.addPost(
                name,
                type,
                tags,
                year,
                img,
                imgdesc,
                bodytext
            )
            res.json({status:'success'})
            
        }catch(e){
            res.status(500).json({error: e.message})
        }
    }
    static async apiUpdatePost(req,res,next){
        try{
            const name = req.body.title
            const type = req.body.type
            const tags = req.body.tags
            const year = req.body.year
            const img = req.body.img
            const imgdesc = req.body.imgdesc
            const bodytext = req.body.text

            const postResponse = await dao.updatePost(
                //may be lagging here haha
                req.body._id,
                name,
                type,
                tags,
                year,
                img,
                imgdesc,
                bodytext
            )
            var {error} = postResponse
            if(error){
                res.status(400).json({error})
            }
            if(postResponse.modificationCount === 0){
                throw new Error
                ("ermm idk what it is but yea you messed up")
            }
        }catch(e){
            res.status(500).json({error: e.message})
        }
    }
    static async apiDeletePost(req,res,next){
        try{
            const postid = req.query._id

            const postResponse = await dao.deletePost(
                postid
            )

            res.json({status:"success"})

        }catch(e){
            res.status(500).json({error: e.message})
        }
    }
}