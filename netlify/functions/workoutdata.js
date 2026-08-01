exports.handler = async function () {
  try {
    const response = await fetch(
  "https://script.google.com/macros/s/AKfycbyZHAAxeBNF9R3jmyszGFtY4PopkhxLgLqjyUvAc37ypxe-43vSJj2NJogczc5OowHRmQ/exec",
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
