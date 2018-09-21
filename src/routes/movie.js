const express = require('express');
const app = express();
const axios = require('axios');
const helper = require('../server/auth/helper');

app.get('/nowplaying',helper.authenticateToken, function(req,res) {
    axios.get(process.env.URL_HOST + 'now_playing?api_key=' + process.env.MOVIE_TOKEN)
    .then(function(response){
        return res.send(response.data);
    })
    .catch(function(error){
        return res.send(error.response.status);
    });
});

app.get('/popularmovie/page=:id', helper.authenticateToken, function(req,res){
    axios.get(process.env.URL_HOST + 'popular?api_key=' + process.env.MOVIE_TOKEN + '&page='+req.params.id)
    .then(function(response){
        return res.send(response.data);
    })
    .catch(function(error){
        return res.send(error.response.status);
    });
});

app.get('/detailmovie/:id', helper.authenticateToken,function(req,res){
    axios.get(process.env.URL_HOST + req.params.id)
    .then(function(response){
        return res.send(response.data);
    })
    .catch(function(error) {
        return res.send(error.response.status);
    });
});

app.get('/toprate',helper.authenticateToken, function(req,res) {
    axios.get(process.env.URL_HOST + 'top_rated?api_key=' + process.env.MOVIE_TOKEN)
    .then(function(response) {
        return res.send(response.data);
    })
    .catch(function(error){
        return res.send(error.response);
    });
});

module.exports = app;