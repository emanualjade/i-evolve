const basicController = {};

basicController.get = (req, res) => {
  res.json({
    message: 'welcome to our api',
  });
};

module.exports = basicController;
