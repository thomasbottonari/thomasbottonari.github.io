module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: [
        'build'
      ]
    },
    copy: {
      prod: {
        files: [
          {expand: true, src: ['fonts/*'], dest: 'build/', filter: 'isFile'},
          {expand: true, src: ['libs/**'], dest: 'build/'},
          {expand: true, src: ['images/**'], dest: 'build/'},
          {expand: true, src: ['*.html'], dest: 'build/', filter: 'isFile'},
        ],
      },
      csslibs: {
        files: [
          {expand: true, src: ['css/lib/*.css'], dest: 'build/', filter: 'isFile'}
        ]
      }
    },
    jshint: {
      prod: [
        '/pages/*.js',
        'Gruntfile.js' ]
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      prod: {
        files: {
//          'build/js/app/gallery.js': 'js/app/gallery.js'
        }
      }
    },
    less: {
      dev: {
        options: {
        },
        files: {
          "css/index.css": "css/index.less",
          "css/indexLarge.css": "css/indexLarge.less",
        }
      },
      prod: {
        options: {
        },
        files: {
            "build/css/index.css": "css/index.less",
            "build/css/indexLarge.css": "css/indexLarge.less",
        }
      }
    },
    cssmin: {
      prod: {
        expand: true,
        cwd: 'build/css',
        src: ['*.css'],
        dest: 'build/css'
      }
    },
//    responsive_images: {
//      options: {
//        newFilesOnly: true,
//        sizes: [{
//          name: "medium",
//          width: 1024
//        }, {
//          name: "thumb",
//          width: 190
//        }],
//        rename: false
//      },
//      files: {
//        expand: true,
//        src: ['**.{JPG,jpg,PNG,png}'],
//        cwd: 'images/gallery/',
//        custom_dest: 'images/gallery/{%= name %}/'
//      }
//    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
//  grunt.loadNpmTasks('grunt-responsive-images');

  // Development task(s).
  grunt.registerTask('debug', [
    'jshint:prod',
    'less:dev'
  ]);
  // Production task(s).
  grunt.registerTask('release', [
    'clean:build',
//    'responsive_images',
    'copy:prod',
    'jshint:prod', 
    'uglify:prod', 
    'less:prod', 
    'cssmin:prod',
    'copy:csslibs'
  ]);
};