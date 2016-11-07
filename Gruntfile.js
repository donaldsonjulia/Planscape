module.exports = function(grunt) {
   grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
       sass: {
           dist: {
               options: {
                   style: 'compressed',
                   loadPath: [
                       'node_modules/bourbon/app/assets/stylesheets',
                       'node_modules/bourbon-neat/app/assets/stylesheets',

                   ]
               },
               files: {
                   'lib/styles/app.min.css': 'src/styles/app.scss'
               }
           }
       },

       uglify: {
           options: {
               preserveComments: false
           },
           my_target: {
               files: {
                   'lib/js/vendor.min.js': ['lib/js/vendor.js']
               }
           }
       },

       concat: {
           options: {
               separator: ';'
           },
           dist: {
               files: {
                   'lib/js/vendor.js': ['src/js/vendor/*.js']
               }
           }
       },

       jshint: {
           all: ['Gruntfile.js', 'src/*.js', 'test/*.js']
       },

       mochaTest: {
           test: {
               options: {
                   reporter: 'spec',
                   captureFile: 'test/results.txt',
                   quiet: false,
                   clearRequireCache: false,
                   noFail: false
               },
               src: ['test/**/*.js']
           }
       },


       watch: {
           css: {
               files: ['src/styles/**/*'],
               tasks: ['sass']
           },

           javascript: {
               files: [
                   'src/js/vendor/*', 'test/*.js'
               ],
               tasks: ['mochaTest', 'jshint', 'concat', 'uglify']
           }

       }
   });

   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-mocha-test');
   grunt.registerTask('default', [
       'sass',
       'watch',
       'concat',
       'uglify',
       'jshint',
       'mochaTest',
   ]);
};
