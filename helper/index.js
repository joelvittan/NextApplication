export const noTokenGetRequest = async (url) => {
  const response = await fetch(url);
  return response;
};
