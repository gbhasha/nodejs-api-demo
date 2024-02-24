const express = require('express');
const app = express();

const PORT = 8081;

app.use(express.json());

app.get('/', (req,res) => {
    res.send('Hello NODE API...')
})
// Books management service

app.get('/books',(req, res)=>{
    res.status(200).send({
        id: 123,
        title: 'Hello World',
        author: 'lorem ipsum',
        price: '199.99'
    })
});

app.get('/books/:id',(req, res)=>{
    const {id} = req.params;
    if (id === '123') {
        res.status(200).send({
            id: 123,
            title: 'Hello World',
            author: 'lorem ipsum',
            price: '199.99'
        })
    } else {
        res.status(404).send({
            message: `Books not found for id ; ${id}`
        })
    }

    
});

app.post('/books',(req, res)=>{
    const payload = req.body;
    if(!payload || Object.keys(payload).length <= 0) {
        res.status(418).send({message: 'send the book details in body'});
    } else {
        res.status(200).send({message: `books stored in db for id : ${payload?.id}`});
    }

});

app.put('/books/:id', (req, res) => {
    const {id} = req.params;
    const payload = req.body;

    if(!payload || Object.keys(payload).length <= 0) {
        res.status(418).send({message: 'send the book details in body'});
    } else {
        res.status(200).send({message: `books updated in db for id : ${id}`});
    }   
})

app.delete('/books/:id', (req, res) => {
    const {id} = req.params;
    res.status(200).send({message: `books deleted in db for id : ${id}`});
})


// Orders Management Service


app.get('/orders',(req, res)=>{
    res.status(200).send({
        id: 11123,
        cus_name: 'Will Smith',
        book_id: 123,
        order_status: 'completed'
    })
});

app.get('/orders/:id',(req, res)=>{
    const {id} = req.params;
    if (id === '11123') {
        res.status(200).send({
            id: 11123,
            cus_name: 'Will Smith',
            book_id: 123,
            order_status: 'completed'
        })
    } else {
        res.status(404).send({
            message: `orders not found for id ; ${id}`
        })
    }

    
});

app.post('/orders',(req, res)=>{
    const payload = req.body;
    if(!payload || Object.keys(payload).length <= 0) {
        res.status(418).send({message: 'send the orders details in body'});
    } else {
        res.status(200).send({message: `orders stored in db for id : ${payload?.id}`});
    }

});

app.put('/orders/:id', (req, res) => {
    const {id} = req.params;
    const payload = req.body;

    if(!payload || Object.keys(payload).length <= 0) {
        res.status(418).send({message: 'send the orders details in body'});
    } else {
        res.status(200).send({message: `orders updated in db for id : ${id}`});
    }   
})

app.delete('/orders/:id', (req, res) => {
    const {id} = req.params;
    res.status(200).send({message: `orders deleted in db for id : ${id}`});
})




app.listen(PORT,
    () => console.log(`listening on PORT: ${PORT}`));