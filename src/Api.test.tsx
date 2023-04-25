import { getRestaurantsInformation } from "./Api";


describe("getRestaurantsInformation", () => {
  it("should fetch data from the API and set the data using setData function", async () => {
    const mockJson = [
      {
        name: "Restaurant A",
        description: "Some description",
        city: "Seattle",
        zip_code: "98101",
        inspection_result: "Satisfactory",
        inspection_date: "2022-04-20T00:00:00.000",
      },
      {
        name: "Restaurant B",
        description: "Some other description",
        city: "Bellevue",
        zip_code: "98004",
        inspection_result: "Unsatisfactory",
        inspection_date: "2022-04-21T00:00:00.000",
      },
    ];
    const setDataMock = jest.fn();

    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(mockJson),
    })
    ) as unknown as jest.MockedFunction<typeof fetch>;

    await getRestaurantsInformation(setDataMock);

    expect(global.fetch).toHaveBeenCalledWith(
      "https://data.kingcounty.gov/resource/f29f-zza5.json"
    );
    expect(setDataMock).toHaveBeenCalledWith(mockJson);
  });

  it("should set the data to an empty array if there's an error", async () => {
    const setDataMock = jest.fn();

    global.fetch = jest.fn(() => Promise.reject("API is down")) as unknown as jest.MockedFunction<typeof fetch>;

    await getRestaurantsInformation(setDataMock);

    expect(global.fetch).toHaveBeenCalledWith(
      "https://data.kingcounty.gov/resource/f29f-zza5.json"
    );
    expect(setDataMock).toHaveBeenCalledWith([]);
  });

  it("should add query param at url if exists", async () => {
    const setDataMock = jest.fn();

    global.fetch = jest.fn(() => Promise.reject("API is down")) as unknown as jest.MockedFunction<typeof fetch>;

    await getRestaurantsInformation(setDataMock, '?zip_code=98105');

    expect(global.fetch).toHaveBeenCalledWith(
      "https://data.kingcounty.gov/resource/f29f-zza5.json?zip_code=98105"
    );
  });
});
