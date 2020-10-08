const analyticsData = require('../data/analytics.json');
const updatedAnalytics = require('../data/updatedAnalytics.json');
module.exports = {
  getAnalytics: async (req, res) => {
    return res.status(200).json({
      message: 'all ok',
      status: true,
      data: { analytics: analyticsData },
    });
  },
  getUpdatedAnalytics: async (req, res) => {
    io.sockets.emit('updatedAnalytics', {
      message: 'all ok',
      status: true,
      data: { analytics: updatedAnalytics },
    });
    return res.status(200).json({ message: 'all ok' });
  },
};
