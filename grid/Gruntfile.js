module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            grid: { src: 'src/grid.css', dest: 'dist/grid.min.css' },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask(
        'default', ['cssmin:grid','cssmin:grid']);
};
