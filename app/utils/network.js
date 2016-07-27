/**
 * Created by hkc on 16/7/26.
 */

let toQueryString = (obj)=>{
    return obj?Object.keys(obj).sort().map((key)=>{
        var val = obj[key]
        return key+'='val
    }).join('&') :''
}
let _http = async (url = '',method = 'GET',data = null,host ='',token ='',contentType = 'application/x-www-form-urlencoded')=>{
    url = host + url
    let headers = {
        'Accept':'application/json',
        'Content-Type':contentType
    }
    if(token) headers.token = token
    let htmlHead = {
        method:method,
        headers:headers
    }
    if(data){
        if(method !=='GET') htmlHead.body = toQueryString(data)
        if(method ==='GET') url = url +'?' + toQueryString(data)
    }
    try{
        let response = await fetch(url,htmlHead)
        return response && response.json() || {}
    }catch (error){
        return error
    }

}




export get = async (url,data,host,token)=>{
    return _http(url,'GET',data,host,token)
}
export post = async (url,data,host,token)=>{
    return _http(url,'POST',data,host,token)
}
export put = async (url,data,host,token)=>{
    return _http(url,'PUT',data,host,token)
}
export del = async (url,data,host,token)=>{
    return _http(url,'DELETE',data,host,token)
}
export file = async (url,data,host,token)=>{
    return _http(url,'FILE',data,host,token)
}