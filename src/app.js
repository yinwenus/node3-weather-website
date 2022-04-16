const path =require('path')
const express=require('express')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

const app=express()

const publicpath=path.join(__dirname, '../public')
app.use(express.static(publicpath))

const viewsPath= path.join(__dirname, '../templates/views')
app.set('view engine', 'hbs')
app.set('views', viewsPath)

const partialPath= path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialPath)
 

app.get('', (req, res)=>{
    res.render('index', {
        title: 'Passion Garden',
        name: 'catherine',
        company: 'passion garden'

    })
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About',
        name: 'catherine',
        company: 'passion garden'


    })
})

app.get('/help', (req, res)=>{
    res.render('help', {
        title: 'Help',
        name: 'yin',
        company: 'passion garden'
    })
})

app.get('/weather', (req, res)=>{

    if (!req.query.address) {
        return res.send({
            error: 'you must provide a address'
        })
    }

    geocode (req.query.address, (error, {latitude, longtitude, location}={})=>{
        if(error){
             return res.send({
                 
                Error:  error})
        }
         
        forecast(latitude, longtitude, (error, forecastdata)=>{
        if(error){
            return res.send({
                 
                Error:  error})
        } else{
            res.send({
                location: location,
                Data: forecastdata,
                address: req.query.address
            })
        }
        })
    })
})




app.get('/help/*', (req, res)=>{

    res.render('404page', {
        title: '404 Error',
        name: 'yin',
        company: 'passion garden',
        error: 'help page can not be found'
    })
})

app.get('*', (req, res)=>{

    res.render('404page', {
        title: '404 Error',
        name: 'yin',
        company: 'passion garden',
        error: 'page can not be found'
    })
})




app.listen(3000, ()=>{console.log('server is on.......')
})