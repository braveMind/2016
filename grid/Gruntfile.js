module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            grid: { src: 'src/grid.css', dest: 'dist/grid.min.css' },
            normalize: { src: 'src/normalize.css', dest: 'dist/normalize.min.css' }


        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask(
        'default', ['cssmin:grid','cssmin:grid'],['cssmin:normalize','cssmin:normalize']);
};
