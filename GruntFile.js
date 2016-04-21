module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.initConfig({
        config: {
            name: "bootstrap-screensize"
        },
        uglify: {
            dist: {
                files: {
                    "dist/<%= config.name %>.min.js": "src/<%= config.name %>.js"
                }
            }
        }
    });

    grunt.registerTask("default", ["uglify"]);

};