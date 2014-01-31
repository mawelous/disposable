module.exports = function( grunt ) {

	grunt.initConfig({
		pkg: grunt.file.readJSON( 'package.json' ),
		disposable: {
			db: 'source/database/all.json',
			tplDir: 'tasks/templates/',
			dest: 'build/<%= pkg.name %>'
		}
	});

	function disposable(tplFile, extension) {
		var tplFilepath = grunt.config('disposable.tplDir') + tplFile;

		var destFilepath = grunt.config('disposable.dest') + '.' + extension;

		var tplFile = grunt.file.read(tplFilepath);

		var db = grunt.file.readJSON(grunt.config('disposable.db'));

		var data = {
			db: JSON.stringify(db.hosts)
		};

		var processedFile = grunt.template.process(tplFile, {data: data});

		grunt.file.write(destFilepath, processedFile);
	}

	grunt.registerTask( 'regex', 'Create Regex Pattern', function(){

	});

	grunt.registerTask( 'php', 'Create PHP Tool', function(){
		grunt.log.writeln('Creating PHP Tool...');

		disposable('php.tpl', 'php');
	});

	grunt.registerTask( 'js', 'Create Javascript Tool', function(){
		grunt.log.writeln('Creating JS Tool...');

		disposable('js.tpl', 'js');
	});

	grunt.registerTask('default', ['php', 'js']);
};