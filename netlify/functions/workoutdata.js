exports.handler = async function () {
  try {
    const response = await fetch(
  "https://script.google.com/macros/s/AKfycbzBK17r4eWhJe5CvJus8FQBG0klRr9Z_riTf5pnVRTUqwoq1NnLrEQomvycxj9j71kV4Q/exec",
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
