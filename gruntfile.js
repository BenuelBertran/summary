/*jslint node: true */

"use strict";

module.exports = function (grunt) {
  
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-postcss");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-pug");

  grunt.initConfig({

    less: {
      style: {
        files: {
          "dist/css/style.css": "app/styles/style.less"
        }
      }
    },

    postcss: {
      style: {
        options: {
          processors: [
            require("autoprefixer")()
          ]
        },
        src: "dist/css/*.css"
      }
    },
    
    pug: {
      compile: {
        options: {
          pretty: true,
          data: {
            debug: false
          }
        },
        files: {
          "dist/index.html": ["app/pages/*.pug"]
        }
      }
    },
    
    watch: {
      options: {
        spawn: false
      },
      less: {
        files: ["app/styles/**/*.less"],
        tasks: ["less", "postcss"]
      },
      pug: {
        files: ["app/pages/**/*.pug"],
        tasks: ["pug"]
      }
    }
  });

  grunt.registerTask("default", "watch");
};
