export const getRestaurantsInformation = async (setData: Function, queryParam ?: string) : Promise<void> => {
    const filterUrl = queryParam ? queryParam : "";
    const baseUrl = 'https://data.kingcounty.gov/resource/f29f-zza5.json'
    const url = baseUrl + filterUrl;
    try {
        const apiResponse = await fetch(
            url,
            {
                method: "GET",
                headers: {
                    "X-App-Token": "zmIDCCJs6fS6MGxIjiZLauIQE",
                    "Content-Type": "application/json"
                },
            }
        );
        const json = await apiResponse.json();
        setData(json);
    } catch (error) {
        setData([]);
    }

}