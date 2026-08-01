exports.handler = async function () {
  try {
    const response = await fetch(
  "https://script.google.com/macros/s/AKfycby6r82DZwbbx4gfuIQiMoquDG3PzRY5a3xuzyeSqKPl8VtZawR4v1pfSrylw_JwApdqfg/exec",
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
