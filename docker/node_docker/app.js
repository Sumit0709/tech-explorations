var express = require('express'); 
const fs = require('fs')
const path = require('path')

var app = express();

const PORT = process.env.PORT || 8000; 

app.get('/', async(req, res) => {

    const data = {
        name: "Your Name",
        age: "Your Age"
    }
    const my_data = JSON.stringify(data);
    console.log("JSON DATA :: ", my_data);
    const time = Date.now();
    fs.writeFileSync(path.join(__dirname + `/hosted_vol/json_data_${time}`),my_data);

    console.log("***********FILE CREATED***********")

    return res.status(200).json({
        success: true,
        source: 'Docker container',
        message:{
            ...data,
        }
    })
});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
})
