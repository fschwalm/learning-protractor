exports.config = {
    multiCapabilities: [{
        'browserName': 'firefox'
    }, {
        'browserName': 'chrome'
    }],
    directConnect: true,
    specs: ['super-calculator/*.js']
};
