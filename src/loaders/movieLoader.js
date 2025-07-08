import Instance from "../instances/instance";

let movieLoader = async ({request}) =>{
    const url = new URL(request.url).searchParams.get("search");
    const page = parseInt(new URL(request.url).searchParams.get('page')) || 1;
    const type = new URL(request.url).searchParams.get("type") || "";

    try{
        const res = await Instance.get("/",{params : {s : url , page , ...(type && { type })}});
        return{
            movies : res.data.Search || [],
            search : url,
            totalResults: parseInt(res.data.totalResults) || 0,
            page,
            type
        }
        
    }
    catch(error){
        return { movies: [], search: url };
    }
}

export default movieLoader;
