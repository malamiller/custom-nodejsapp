const express = ("express");

const app = express ();

//define port
const port=5010;

app.get("/", (req, res) => {

res.json({message:'Root Page'})

})

//get example

app.get("/get-data", (req, res) => {

res.json({message:'Get JSON Example'})
    
})

//run the application
app.listen(port, () => {
    console.log(`running at port ${port}`);
});