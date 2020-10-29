var request = require('request');

exports.getTodoById = function(id){

  const REST_API_URL = `https://jsonplaceholder.typicode.com/todos/${id}`;

  return new Promise( (resolve, reject) => {
    request.get(REST_API_URL, (err, res, data) => {
      if(err){
        return reject(err);
      }else{
        resolve(JSON.parse(data));
      }
    })
  })
}