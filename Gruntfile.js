module.exports = function(grunt) {
  grunt.initConfig({
    cssmin: {
      target: {
        files: {
          'candyBar.min.css': ['candyBar.css']
        }
      }
    },
    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: ['candyBar.css']
      },
      lax: {
        options: {
          import: false
        },
        src: ['candyBar.css']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-csslint');
};
