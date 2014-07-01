matchdep = require 'matchdep'
module.exports = (grunt) ->
    matchdep.filterDev('grunt-*').forEach grunt.loadNpmTasks
    grunt.initConfig
        pkg: grunt.file.readJSON 'package.json'
        browserify:
            compile:
                files: './lib/sheql.js': ['./index.js']
                options: transform: ['coffeeify']