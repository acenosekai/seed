/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

  grunt.config.set('copy', {
    dev: {
      files: [{
        expand: true,
        cwd: './assets',
        src: ['**/*.!(coffee|less)'],
        dest: '.tmp/public'
      }, {
        expand: true,
        cwd: './bower_components',
        src: [
          'angular/angular.js',
          'angular-aria/angular-aria.js',
          'angular-animate/angular-animate.js',
          'angular-material/angular-material.js',
          'angular-ui-router/release/angular-ui-router.js',
          //          'angular-messages/angular-messages.js',
          'html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js'

          //LumX dependency

        ],
        flatten: true,
        dest: '.tmp/public/js/dependencies'
      }, {
        expand: true,
        cwd: './bower_components',
        src: [
          'html5-boilerplate/dist/css/normalize.css',
          'html5-boilerplate/dist/css/main.css',
          'mdi/materialdesignicons.css',
          'angular-material/angular-material.min.css',
          'mdi/css/materialdesignicons.min.css',
          'mdi/css/materialdesignicons.min.css.map',
          //          'pure/pure-min.css'

        ],
        flatten: true,
        dest: '.tmp/public/styles'
      }, {
        expand: true,
        cwd: './bower_components',
        src: [
          'mdi/fonts/**'
        ],
        flatten: true,
        dest: '.tmp/public/fonts'
      }]
    },
    build: {
      files: [{
        expand: true,
        cwd: '.tmp/public',
        src: ['**/*'],
        dest: 'www'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
