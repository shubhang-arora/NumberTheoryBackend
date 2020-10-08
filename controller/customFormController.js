const customForm = require('../data/customForm.json');
module.exports = {
  getForm: async (req, res) => {
    return res.status(200).json({
      message: 'all ok',
      status: true,
      data: { form: customForm },
    });
  },
};
