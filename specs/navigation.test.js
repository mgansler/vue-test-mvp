module.exports = {
    before: function(browser) {
        browser
            .url('http://localhost:8080/')
            .waitForElementVisible('#app', 1000)
    },

    after: function(browser) {
        browser.end()
    },

    '/a link is present': function (client) {
        client.page.navigation().section.navList.expect.element('@aLink').to.be.visible.before(1000)
    },

    '/b link is present': function (client) {
        client.page.navigation().section.navList.expect.element('@bLink').to.be.visible.before(1000)
    },

    '/c link is present': function (client) {
        client.page.navigation().section.navList.expect.element('@cLink').to.be.visible.before(1000)
    }
}
