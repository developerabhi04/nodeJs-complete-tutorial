const http = require('http');
const fs = require("fs");
const requests = require("requests");



const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
    temperature = temperature.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    // temperature = temperature.replace("{%tempstatus%}", orgVal.sys.weather[0].main);
    return temperature;   

}


const server = http.createServer((req, res) => {
    if(req.url == "/"){
        requests("http://api.openweathermap.org/data/2.5/weather?q=Ranchi&appid=e1a8bef725b7f4b56e03b655b93423b8")

        .on("data", (chunk) => {
            const objData = JSON.parse(chunk)
            const arrData = [objData]
            // console.log(arrData[0].main.temp);
            // multiple array map 
            const realTimeData = arrData.map((val) => replaceVal(homeFile, val)).join("");
                // console.log(val.main);
                
                res.write(realTimeData)
                // console.log(realTimeData);
           
        })
        .on("end",  (err) => {
            if (err) return console.log("connection closed due to error", err);

            // console.log("end");
            res.end();
        });
    } else {
        res.end();
    }
});

server.listen(8000, () => {
    console.log("server is running in 8000");
})
