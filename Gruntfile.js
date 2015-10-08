'use strict';

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-jsonlint');
  grunt.loadNpmTasks('grunt-xml-validator');

  grunt.initConfig({

    jsonlint: {
      sample: {
        src: [ '*.json' ]
      }
    },

    xml_validator: {
      your_target: {
        src: [ '*.xml' ]
      },
    },

  });

  // Default task.
  grunt.registerTask('default', ['jsonlint', 'xml_validator']);

  // Travis CI task.
  grunt.registerTask('travis', ['jsonlint', 'xml_validator']);

};
