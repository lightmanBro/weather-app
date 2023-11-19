const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const PORT = process.env.PORT || 3000;
//Define the config file for express.
const publicDirectory = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../template/views')
const partialsPath = path.join(__dirname, '../template/partials')


//Setup handlebar's engine and views locator
app.set('view engine', 'hbs');
app.set('views',viewPath);
hbs.registerPartials(partialsPath)

//Setup static directory to serve.
app.use(express.static(publicDirectory))


app.get('',(req, res) => {
        res.render('index',{
        title: 'Weather App',
        name:'Omotoso David'
        })

    })

app.get('/help', (req, res) => {
    res.render('help',
    {title:'Help Page',
    name:'Omotoso David'
    })
  })

app.get('/about', (req, res) => {
    res.render('about',{
    title:'About',
    name:'Omotoso David Okikiola'
    }
    );
})

//In case someone looks for pages on help page that is not available yet...
app.get('/help/*', (req, res) => {
    res.render('error',{
        title:'Unavailable Help Page',
        errorMessage: '404',
        name:'Omotoso David'})
    })
app.get('/weather',(req, res) => {
    const {address} = req.query
    if(!req.query.address){
        return res.send({error:'Please provide an address'})
    }
    res.send({address,
    location:'Lagos',
    forecast:'It will rain soon'
    })

})
app.all('*', (req, res) => {
    res.render('error',{
    title:'Error',
    errorMessage: '404, Not Found',
    name:'Omotoso David'})
})


app.listen(PORT, () => {
console.log('Server is running on port' + PORT)});