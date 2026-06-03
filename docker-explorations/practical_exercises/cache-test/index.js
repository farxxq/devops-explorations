const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send(`<h1>Assalamwalaikum, 👋</h1>
        <p> Welcome to the cache-test server.</p>
        <p>Running in the port ${PORT}</p>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server running in the port: ${PORT}`);
})