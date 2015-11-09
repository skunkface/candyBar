module.exports = function(grunt) {
  grunt.initConfig({
    cssmin: {
      target: {
        files: {
          'candyBar.min.css': ['candyBar.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
};
