const { i18n } = require("./next-i18next.config");

module.exports = {
    i18n,
    env: {
        HCAPTCHA: process.env.HCAPTCHA,
    },
};
