exports.handler = async function () {
  try {
    const response = await fetch(
  "https://script.google.com/macros/s/AKfycbz8QUcg9I5DIqAHyN2Vx0t_xODRPZApqtc3bQJm3PSaUn9vuG7-1Q1pNlzISBkBPmM4NA/exec",
  {
    redirect: "follow"
  }
);

    const data = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: data
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message
      })
    };
  }
};
