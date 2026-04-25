 express = require('express');
 app = express();
 api = require('./API'); 
 app.use("/api",api)
 app.listen(7899)

//  output check
// 1)localhost:7899/api
// 2)localhost:7899/api/101
// 3)localhost:7899/api/branch/it
// 4)localhost:7899/api/city/surat 
