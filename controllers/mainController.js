// Home
exports.home = (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Express MVC Server",
  });
};

// About
exports.about = (req, res) => {
  res.json({
    success: true,
    message: "This is a simple Express.js backend using MVC pattern",
  });
};

// Contact
exports.contact = (req, res) => {
  res.json({
    success: true,
    message: "Contact us at contact@example.com",
  });
};

// Dynamic time
exports.getTime = (req, res) => {
  res.json({
    success: true,
    currentTime: new Date().toLocaleTimeString(),
  });
};

// POST – Echo JSON data
exports.echoData = (req, res) => {
  const data = req.body;

  // Simple validation
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
