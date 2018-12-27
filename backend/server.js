const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
const cors = require('cors')
//const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const assert = require('assert');
const app = express();

app.use(cors());

app.use(bodyParser.json())
const mongo_url = 'mongodb://localhost:27017';
const database = 'formationet';


// mongoose.connect('mongodb://localhost/contactdb');
// let db = mongoose.connection;

MongoClient.connect(mongo_url, (err, client) => {
    assert.equal(err, null, 'Failed connection to data base..')
    const db = client.db(database);



    app.put('/modifycontact/:id', (req, res,next) => { 
 db.collection('contacts').findOneAndUpdate({_id:ObjectID(req.params.id)},{$set:req.body},(err, data) => {
            if (err) res.send(err);
            else res.send('ok')
        })

    })

    app.delete('/deletecontact/:name', function (req, res) {
        var nameTo = req.params.name;
        db.collection('contacts').findOneAndDelete({ name: nameTo }, (err, results) =>{
            if (err) res.send('erreur')
            else results.send("ok")
        });
      
      });

// Delete Centre
      app.delete('/centres/:cName', (req, res) => {
        let cName = req.params.cName;
        db.collection('centres').findOneAndDelete({ "_id" : ObjectID(cName) }, (err, data) => {
            if (err) res.send('error');
            else res.send(data)

        })

    })



 


    app.get('/centres', (req,res) => {
        let array = []
        db.collection('centres').find().toArray((err,data) => {
            if (err) res.send(array);
            else res.send(data);
        })

    })


    app.post('/centres', (req, res) => {
        let newCentre = req.body;
        db.collection('centres').insertOne(newCentre, (err, data) => {
            if (err) res.send('error');
            else res.send(data)

        })

    })



//     app.get('/products/:id', (req, res) => {
//         let idProductToFind = ObjectID(req.params.id);
//         db.collection('produits').findOne({_id :idProductToFind},(err, data) => {
//             if (err) res.send('errrrrrur add ');
//             else res.send(data)

//         })

//     })



//     app.put('/modify_product/:id', (req, res) => {
//         let id = ObjectID(req.params.id);
//         let newProduct = req.body;
//         console.log({...newProduct})
//  db.collection('produits').findOneAndUpdate({_id:id},{$set:newProduct},(err, data) => {
//             if (err) res.send(err);
//             else res.send('ok')

//         })

//     })

    // app.delete('/product_delete/:name', (req, res) => {
    //     let productToRemove = req.params.name
    //     tab = tab.filter(el => el.name !== productToRemove)
    //     res.send(tab)
    //     db.collection('produits').insertOne(newProduct, (err, data) => {
    //         if (err) res.send('');
    //         else res.send(data)

    //     })
    //     db.collection('produits').deleteOne(productToRemove,(req,res)=>{

    //     })

    // })
})



// app.put('/modify_product', (req,res) =>{
//  let modifiedProduct = req.body ; 
//  tab = tab.map(e => e.name === modifiedProduct.name ? e = modifiedProduct :e )
//  res.send(tab);

// })


// app.post('/add_product',(req,res)=>{
// let newProduct = req.body;
// tab.push(newProduct)
// res.send(tab);
// }

// )

// app.delete('/product_delete/:name',(req,res) => {
//    let productToRemove = req.params.name
//    tab = tab.filter(el => el.name!==productToRemove)
//    res.send(tab)
// })

// app.get('/products',(req,res)=>{
//     res.send(tab);
// })
// app.get('/product/:name',(req,res)=>{
//     let productname = req.params.name
//     let productToFetch = tab.filter(el => el.name===productname)
//     res.send(productToFetch);
// })



app.listen(3000, (err) => {
    if (err) console.log(err);
    else console.log('server is runing on port 3000');

})