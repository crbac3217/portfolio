import blogDAO from "../dao/dao.js";

export default class blogCtrl{
    static async apiGetBlogs(req, res, next){
        const blogsPerPage = req.query.blogsPerPage ? parseInt(req.query.blogsPerPage, 10) : 5
        const page = req.query.page ? parseInt(req.query.page, 10) : 0

        let filters = {}

        if(req.query.name){
            filters.name = req.query.name
        } else if(req.query.tags){
            filters.tags = [req.query.tags]
        } else if(req.query.type){
            filters.type = req.query.type
        }

        const {blogdataList, totalNumPosts} = await blogDAO.getBlogData({
            filters,
            page,
            blogsPerPage
        })

        let response = {
            blogdatas: blogdataList,
            page: page,
            filters:filters,
            per_page: blogsPerPage,
            totalNum: totalNumPosts
        }
        res.json(response)
    }
}