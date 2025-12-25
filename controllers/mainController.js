exports.home = (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Express MVC Server",
  });
};

exports.about = (req, res) => {
  res.json({
    success: true,
    message: "This is a simple Express.js backend using MVC pattern",
  });
};

exports.contact = (req, res) => {
  res.json({
    success: true,
    message: "Contact us at contact@example.com",
  });
};

exports.getTime = (req, res) => {
  res.json({
    success: true,
    currentTime: new Date().toLocaleTimeString(),
  });
};

exports.echoData = (req, res) => {
  const data = req.body;

  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({
      success: false,
      message: "Request body cannot be empty",
    });
  }

  res.json({
    success: true,
    receivedData: data,
  });
};
