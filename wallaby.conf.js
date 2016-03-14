var wallabyWebpack = require('wallaby-webpack');
var webpackConfig = require('./webpack.config.js');
var babel = require('babel-core');

webpackConfig.module.loaders = webpackConfig.module.loaders.filter(function(l){
    return l.loader !== 'babel';
});
webpackConfig.entryPatterns = ['src/index.js', 'beforeEachTest.js', 'src/**/*.spec.js'];

module.exports = function (wallaby) {
    return {
        debug: true,
        files: [
            {pattern: 'beforeEachTest.js', load: false},
            {pattern: 'src/**/*.js', load: false},
            {pattern: 'src/**/*.spec.js', ignore:true}
        ],
        tests: [
            {pattern: 'src/**/*.spec.js', load: false}
        ],
        compilers: {
            '**/*.js': wallaby.compilers.babel({
                babel: babel,
                sourceMap: true,
                presets: ['es2015']
            })
        },
        postprocessor: wallabyWebpack(webpackConfig),
        env: {
            type: 'browser',
            runner: 'node_modules/phantomjs2-ext/lib/phantom/bin/phantomjs.exe',
            params: {runner: '--web-security=false'}
        },
        testFramework: 'jasmine',
        bootstrap: function () {
            window.__moduleBundler.loadTests();
        }
    }
};