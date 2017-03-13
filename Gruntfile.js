/**
 * Created by jychoi on 2017. 3. 13..
 */
module.exports = function(grunt) {
    grunt.initConfig({
        jshint:{
            files: ['test.js'],
            options: {
                globals:{
                    jQuery: true
                }
            }
        },
        qunit:{
            files: ['testDoc.html']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');

    grunt.registerTask('travis',['jshint', 'qunit']);
};