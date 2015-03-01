
module.exports = function(grunt) {
    var path = require('path');

    grunt.loadNpmTasks('grunt-contrib-jade');

    var buildDir = require('../buildDir.js')();

    var mainPathInterfix = path.join('src', 'modules') + path.sep;    
    var jadePathInterfix = path.join('jade','views') + path.sep;

    var dest = path.join(buildDir, 'tmp', 'views');
    var rootDest = path.join(buildDir);
    var files = grunt.file.expandMapping([
        path.join('src', 'modules', '**', '*.jade')
        ], dest, {
            rename: function(base, destPath) {
                var res = path.join(base, destPath.replace(/\.jade$/, '.js'));
                res = res.replace(mainPathInterfix, '');
                res = res.replace(jadePathInterfix, '');
                return res;
            }
        });
    var indexFile = [];
    indexFile.push({
        src: 'src/index.jade',
        dest: path.join(buildDir,'index.html')
    });
    grunt.config('jade', {
        devall: {        
            options: {
                amd: true,
                client: true,
                compileDebug: false,
                namespace: 'TEMPLATES',
                processName: function(filename){  
                    var res = filename.replace(/\.jade$/, '');
                    res = res.replace(mainPathInterfix, '');
                    res = path.join('views',res.replace(jadePathInterfix, '')); 
                    console.log("jade : " + res + " compiled");
                    return res;
                }
            },
            files: files   
        },
        devindex: {        
            options: {
                client: false,
                processName: function(filename){
                    console.log("jade : " + filename + " compiled");
                }
            },
            files: indexFile   
        }
    });
};
