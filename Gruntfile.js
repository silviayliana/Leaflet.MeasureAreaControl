module.exports = function(grunt) {

	grunt.initConfig({
		
		bowerInstall: {
		  target: {
	      src: 'example/index.html', // point to your HTML file
		  }
		},
		
  	browserSync: {
 		 files: {
		    src : [
		      'example/css/*.css',
		      'example/js/*.js',
		      'example/*.html'
		    ],
		  }
		},

		cssmin: {
		  minify: {
		    src: 'src/*.css',
		    dest: 'dist/styles.min.css'
		  }
		},		

		jshint: {
      all: ['src/*.js'] 
    },

	  uglify: {
	    options: {
	      mangle: false
	    },
	    my_target: {
	    	files: {
	     	 'dist/L.MeasureAreaControl.min.js': [ 'src/*.js' ]
	    	}
	    }
		},
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-bower-install');
  grunt.loadNpmTasks('grunt-browser-sync');

  //default
  grunt.registerTask('default', ['browserSync']);

  //install
	grunt.registerTask('install', ['bowerInstall']);

	//debugging
  grunt.registerTask('debug', ['jshint']);

  //build javascript
	grunt.registerTask('build', ['jshint', 'uglify', 'cssmin']);
};