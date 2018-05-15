let opts = process.argv.slice(2);

// http://nightwatchjs.org/gettingstarted#settings-file
module.exports = {
    src_folders: ['./specs'],
    output_folder: './reports',
    // custom_assertions_path: ['./custom-assertions'],
    page_objects_path: './pages',

    selenium: {
        // start Selenium from nightwatch
        start_process: true,
        server_path: require('selenium-server').path,
        port: 4444,
    },

    test_settings: {
        default: {
            selenium_port: '4444',
            selenium_host: 'localhost',
            silent: true,
            screenshots: {
                enabled: true,
                on_failure: true,
                on_error: true,
                path: './reports/screenshots'
            }
        },

        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        },

        chromeHeadless: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                chromeOptions: {
                    args: ['headless', 'no-sandbox', 'window-size=1280,1080']
                }
            }
        }
    }
};
