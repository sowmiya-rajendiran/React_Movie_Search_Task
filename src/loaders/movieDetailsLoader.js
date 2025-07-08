import Instance from "../instances/instance";

const movieDetailsLoader = async ({ request }) => {
    const id = new URL(request.url).searchParams.get("id");

    if (!id) {
        throw new Response("Movie ID not provided", { status: 400 });
    }

    try{
        const response = await Instance.get('', {
            params: { i: id, plot: 'full' }
        });

        return response.data;
    }
    catch (error) {
        return {};
    }
}

export default movieDetailsLoader;
