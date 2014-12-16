module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
        scripts: {
          files: ['*.js','*.css','index.html','*/*']
        },
        options: {
          livereload: true,
          spawn: false
        }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', "watch");
}