exports.handler = async function () {
  try {
    const response = await fetch(
  "https://script.google.com/macros/s/AKfycby2coR77Xd4C2REbI0JXFzju7IBIo0P1IGK3dw2fOYTp1DuyvukIuwEjtA2k1EBtwmIkw/exec",
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
