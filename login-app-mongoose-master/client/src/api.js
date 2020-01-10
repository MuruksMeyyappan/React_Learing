export const registerUser = async payload => {
  const response = await fetch("http://localhost:8080/api/auth/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  const responseBody = await response.json();
  return responseBody;
};
