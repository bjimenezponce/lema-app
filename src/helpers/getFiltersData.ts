const SectorData = async () => {
  const response: Response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/corfo/raw-innova/sector`,
    {
      method: "GET",
      headers: {
        // 'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
        "Content-Type": "application/json",
      },
    }
  );
  const responseJson = await response.json();
  return responseJson;
};

export default SectorData;
