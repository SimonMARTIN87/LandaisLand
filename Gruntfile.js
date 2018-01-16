module.exports = function (grunt) {
	grunt.initConfig({
		concurrent: {
	        dev: [
	            'nodemon:dev',
	            'watch'
	        ],
	        options: {
	            logConcurrentOutput: true
	        }
	    },
		modernizr: {
			dist:{
				"crawl": false,
			"customTests": [],
			"dest": "deploy/js/vendor/modernizr-custom.js",
			"tests": [
				"csstransforms"
			],
			"options": [
				"setClasses"
			],
			"uglify": true
			}
		},
		browserify: {
			main: {
				src: 'source/js/main.js',
				dest: 'deploy/js/main.js'
			}
		},
		cssmin: {
			options: {
				mergeIntoShorthands: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'deploy/css/main.css': ['source/css/*']
				}
			}
		},
		copy: {
			js: {
				expand:true,
				cwd: 'source/js/vendor/',
				src: '*',
				dest: 'deploy/js/vendor/'
			}
		},
		watch: {
	     	scripts: {
	        	files: "source/js/*.js",
	        	tasks: ["modernizr:dist","browserify"],
				options: {
					livereload: true,
				}
	      	},
	      	styles: {
	        	files: "source/css/*.css",
	        	tasks: ["cssmin"]
	      	}
	    },
	    nodemon: {
			dev: {
				script: 'index.js'
			}
		}
	});

	//grunt.loadTasks('../../tasks');
	grunt.loadNpmTasks("grunt-modernizr");
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.registerTask('default', ['copy','cssmin','modernizr:dist','browserify','concurrent']);

};