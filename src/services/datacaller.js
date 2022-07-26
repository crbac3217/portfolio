import Http from "../http-common.js"

class getBlogData {
    getAll(page = 0){
        return Http.get(`?page=${page}`)
    }

    get(id){
        return Http.get(`/id/${id}`)
    }

    findType(type){
        return Http.get(`?type=${type}`)
    }
    
    post(data){
        return Http.post("/post", data)
    }
    
    edit(data){
        return Http.put("/post", data)
    }

    delete(id){
        return Http.delete("/post", id)
    }
}

export default new getBlogData();