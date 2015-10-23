exports.config = {
    multiCapabilities: [{
        'browserName': 'chrome'
    }],
    directConnect: true,
    specs: ['super-calculator/*.feature'],


    framework: 'cucumber',

    cucumberOpts: {
        require: 'super-calculator/stepDefinitions.js',
        tags: '@dev',
        format: 'pretty'
    }
};
