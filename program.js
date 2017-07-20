
////ASYNCH I/0
// var fs=require('fs');
// fs.readFile(process.argv[2], 'utf8', function(err, data){
//     console.log(data.split('\n').length-1);
// });


////FILTER ASYNC I/0
// fs.readdir(process.argv[2], function(err, list){
//     if(err) {
//         console.log(err);
//     } else {
//         for(var i=0; i<list.length; i++) {
//             if(path.extname(list[i])=='.'+process.argv[3]) {
//                 console.log(list[i]);
//             }
//         }
//     }        
// })


// //module
var program_module=require('./program_module.js');


program_module(process.argv[2], process.argv[3], function(err, data){
    if(err){
        console.log(err);
    }
    for (var i=0; i<data.length; i++){
        console.log(data[i]);
    }
});

