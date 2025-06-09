const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


app.get('/',async(req,res)=>{
    try{
        res.json('WELCOME TO WELFARE');

    }catch(err){
        res.status(500).json({Error:err.message});

    }
});



app.get('/donors',async (req,res)=>{
    try {
        const result = await pool.query('select * from donor');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/donations',async(req,res)=>{
    try{
        const result = await pool.query('select * from donations');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message});

    }
});

app.get('/orphanges',async(req,res)=>{
    try{
        const result = await pool.query('select * from orphanages');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message});

    }
});

app.get('/orphans',async(req,res)=>{
    try{
        const result = await pool.query('select * from orphans');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message});

    }
});

app.get('/services',async(req,res)=>{
    try{
        const result = await pool.query('select * from services');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message});

    }
});

app.get('/volunteers',async(req,res)=>{
    try{
        const result = await pool.query('select * from volunteers');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message});

    }
});

app.get('/ambulances',async(req,res)=>{
    try{
        const result = await pool.query('select * from ambulances');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message});

    }
});

app.get('/graveyard',async(req,res)=>{
    try{
        const result = await pool.query('select * from graveyard');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message});

    }
});

app.get('/employees',async(req,res)=>{
    try{
        const result = await pool.query('select * from employees');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message});

    }
});

app.get('/shelters',async(req,res)=>{
    try{
        const result = await pool.query('select * from shelters');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message});

    }
});

app.get('/inventory',async(req,res)=>{
    try{
        const result = await pool.query('select * from inventory');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message});

    }
});

app.post('/donorscreate', async (req, res) => {
  try {
    const { name, contact } = req.body;
    const result = await pool.query(
      'INSERT INTO donor (name, contact) VALUES ($1, $2) RETURNING id',
      [name, contact]
    );
    res.status(201).json({ donor_id: result.rows[0].id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


















const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Connected Sucesfully on PORT ${PORT}`); 
});