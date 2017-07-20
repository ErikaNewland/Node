// function filt(directory, extension, callback) {
//    return callback(err, data);
// };

// function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         for(var i=0; i<list.length; i++) {
//             if(path.extname(data[i])=='.'+extension) {
//                 console.log(data[i]);
//             }
//         }
//     }
// }


// module.exports=function(directory, extension, callback){
//     console.log("inside module.exports function")
//     var fs=require('fs');
//     var path=require('path')
//     out=fs.readdir(directory, function(err, list){
//         console.log("inside fs callback function")
//         if(err) {
//             return err;
//         } else {
//             var output= list.filter(function(filename){
//                 return path.extname(filename)=='.'+extension;
//             })
//             // for(var i=0; i<list.length; i++) {
//             //     if(path.extname(list[i])=='.'+extension) {
//             //         console.log(list[i]);
//             //     }
//             //}
//         }
//         console.log(output)
//         return output      
//     })
//     console.log("outside of fs function")
//     //console.log("out", out)

    
//     //return callback(null, out);
// }

module.exports = function (dir, ext, callback) {
    var fs=require('fs');
    var path=require('path')
    fs.readdir(dir, function (err, data) {
        if (err) {
            return callback(err)
        }
        var array=data.filter(function(filename){
            return path.extname(filename)=='.'+ext;
        })
        return callback(null, array)
    });  
}