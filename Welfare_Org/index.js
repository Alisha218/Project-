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
  const { donor_id, name, contact } = req.body;
  try {
    await pool.query(
      'INSERT INTO donor (donor_id, name, contact) VALUES ($1, $2, $3)',
      [donor_id, name, contact]
    );
    res.status(201).json({ donor_id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/ambulancescreate', async (req, res) => {
  const { ambulance_id, license_plate, status } = req.body;
  try {
    await pool.query(
      'INSERT INTO ambulances (ambulance_id, license_plate, status) VALUES ($1, $2, $3)',
      [ambulance_id, license_plate, status]
    );
    res.status(201).json({ ambulance_id});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/donationscreate', async (req, res) => {
  const {donation_id, donor_id, donation_date,donation_amount} = req.body;
  try {
    await pool.query(
      'INSERT INTO donations (donation_id, donor_id, donation_date,donation_amount) VALUES ($1, $2, $3, $4)',
      [donation_id, donor_id, donation_date,donation_amount]
    );
    res.status(201).json({ donation_id});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/employeescreate', async (req, res) => {
  const {employee_id,name,salary } = req.body;
  try {
    await pool.query(
      'INSERT INTO employees (employee_id,name,salary) VALUES ($1, $2, $3)',
      [employee_id,name,salary]
    );
    res.status(201).json({employee_id});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});





















const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Connected Sucesfully on PORT ${PORT}`); 
});