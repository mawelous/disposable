module.exports = function( grunt ) {

	grunt.initConfig({
		pkg: grunt.file.readJSON( 'package.json' ),
		disposable: {
			db: 'source/database/all.json',
			tplDir: 'tasks/templates/',
			dest: 'build/<%= pkg.name %>'
		}
	});

	grunt.registerTask( 'regex', 'Create Regex Pattern', function(){

	});

	grunt.registerTask( 'php', 'Create PHP Tool', function(){
		grunt.log.writeln('Creating PHP Tool...');

		var tplFilepath = grunt.config('disposable.tplDir') + 'php.tpl';

		var destFilepath = grunt.config('disposable.dest') + '.php';

		var tplFile = grunt.file.read(tplFilepath);

		var db = grunt.file.readJSON(grunt.config('disposable.db'));

		var data = {
			db: JSON.stringify(db.hosts)
		};

		var processedFile = grunt.template.process(tplFile, {data: data});

		grunt.file.write(destFilepath, processedFile);
	});

	grunt.registerTask( 'js', 'Create Vanilla Javascript Tool', function(){

	});

	grunt.registerTask( 'node', 'Create Node.js Tool', function(){

	});

	grunt.registerTask( 'node', 'Create Node.js Tool', function(){

	});

	grunt.registerTask('default', ['php']);
};