import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        // const { title, image, address, description} = data;

        const client = await MongoClient.connect('mongodb+srv://ssafyonly:thwls123@cluster0.nsjxpnc.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        res.status(201).json({ message: 'Meetup inserted!' });

    }
}

