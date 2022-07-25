import dao from "../dao/postDao.js"

export default class postCtrl{
    static async apiPost(req, res, next){
        try{
            const name = req.body.name
            const type = req.body.type
            const tags = req.body.tags
            const year = req.body.year
            const img = req.body.img
            const imgdesc = req.body.imgdesc
            const bodytext = req.body.bodytext

            const postResponse = await dao.addPost(
                name,
                type,
                tags,
                year,
                img,
                imgdesc,
                bodytext
            )
            res.json(postResponse)
            
        }catch(e){
            res.status(500).json({error: e.message})
        }
    }
    static async apiUpdatePost(req,res,next){
        try{
            const id = req.body._id
            const name = req.body.name
            const type = req.body.type
            const tags = req.body.tags
            const year = req.body.year
            const img = req.body.img
            const imgdesc = req.body.imgdesc
            const bodytext = req.body.bodytext

            const postResponse = await dao.updatePost(
                id,
                name,
                type,
                tags,
                year,
                img,
                imgdesc,
                bodytext
            )
            res.json({ status: "success" })
        }catch(e){
            res.status(500).json({error: e.message})
        }
    }
    static async apiDeletePost(req,res,next){
        try{

            const postResponse = await dao.deletePost(
                req.body._id
            )

            res.json({status:"success"})

        }catch(e){
            res.status(500).json({error: e.message})
        }
    }
}