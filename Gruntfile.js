module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'src/javascript.js',
        dest: 'build/javascript.min.js'
      }
    },
    htmlmin:{
		dist:{
			options:{
			removeComments: true,
	     	collapseWhitespace: true
			},
			files:{
				 'build/index.html': 'src/index.html',
			}
		}	
	},
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src',//文件路劲
          src: 'style.css',//要压缩的css
          dest: 'build',//压缩以后css路劲
          ext: '.min.css'//
        }]
      }
    }
  });
  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // 默认被执行的任务列表。
  grunt.registerTask('default',['uglify','htmlmin','cssmin']);
};