import http from "../http-common.js"

class getBlogData {
    getAll(page = 0){
        return http.get(`?page=${page}`)
    }

    get(id){
        return http.get(`/id/${id}`)
    }

    find(type){
        return http.get(`?type=${type}`)
    }
    
    post(data){
        return http.post("/post", data)
    }
    
    edit(data){
        return http.put("/post", data)
    }

    delete(id){
        return http.delete("/post", id)
    }
}

export default new getBlogData();