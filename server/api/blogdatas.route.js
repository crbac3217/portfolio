import express from "express"
import blogCtrl from "./blogdata.control.js"
import postCtrl from "./post.control.js"

const router = express.Router()

router.route("/").get(blogCtrl.apiGetBlogs);
router.route("/id/:id").get(blogCtrl.apiGetBlogById);

router
.route("/post")
.post(postCtrl.apiPost)
.put(postCtrl.apiUpdatePost)
.delete(postCtrl.apiDeletePost)

export default router;