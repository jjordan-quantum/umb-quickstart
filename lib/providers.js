exports.Providers = (function() {
    const fs = require('fs')
    const providers = JSON.parse(fs.readFileSync('./providers.json'));
    return {
        getProviders: _ => providers
    }
})();
