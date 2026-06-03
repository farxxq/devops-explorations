const express = require('express');
const app = express();

let count = 0;

app.get('/', (req, res)=>{
	count++;
res.send(`<h1>Hello from the new express application</h1><p>count: ${count}</p>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
	console.log(`Server running on port ${PORT}`);
})
