let blogdatas;
let tags;

export default class blogDAO{
    // fetching the correct database and assigning it to the global variable
    static async injectDB(conn){
        if(blogdatas){
            return
        }
    try {
        blogdatas = await conn.db(process.env.ATLAS_NS).collection("blogdatas")
        tags = await conn.db(process.env.ATLAS_NS).collection("tags")
    }catch (e){
        console.error(`seems like we can't find the specific database ${e}`);
    }
    }
    //custom function to filter and fetch data from the database
    static async getBlogData({
        filters = null,
        page = 0,
        blogsPerPage = 5
    } = {})
    {
        let query
        let tagquery
        if(filters){
            if("name" in filters){
                query = { $text: { $search: filters["name"]}}
            }else if ("tags" in filters)
            {
                query = {tags: filters["tags"]}
            }else if ("type" in filters)
            {
                query = {"type": {$eq: filters["type"]}}
            }
            
        }
        let cursor
        let taglist

        try{
            cursor = await blogdatas.find(query)
            taglist = await tags.find(tagquery)
        }catch(e){
            console.error(`couldnt find anything on ${query} or there was an error ${e}`)
            return {blogdataList: [], totalNumPosts: 0}
        }

        const displayCursor = cursor.limit(blogsPerPage).skip(page*blogsPerPage)

        try{
            const blogdataList = await displayCursor.toArray();
            const totalNumPosts = await blogdatas.countDocuments(query)
             return{blogdataList, totalNumPosts}
        }catch(e){
            console.error(
                e
            )
            return {blogdataList: [], totalNumPosts: 0}
        }
    }
}

