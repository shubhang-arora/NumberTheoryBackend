let express = require('express');
let router = express.Router();

let analytics_controller = require('../../controller/analyticsController');
let form_controller = require('../../controller/customFormController');

router.get('/analytics', analytics_controller.getAnalytics);
router.get('/analytics/update', analytics_controller.getUpdatedAnalytics);
router.get('/customForm', form_controller.getForm);

module.exports = router;
