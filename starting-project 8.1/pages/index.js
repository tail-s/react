import Head from 'next/head';
import { MongoClient } from 'mongodb';

// import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { Fragment } from 'react';

// const DUMMY_MEETUPS = [
//     {
//         id: 'm1',
//         title: 'A First Meetup',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Some address 5, 12345 Some City',
//         description: 'This is a first meetup!'
//     },
//     {
//         id: 'm2',
//         title: 'A Second Meetup',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Some address 10, 12345 Some City',
//         description: 'This is a second meetup!'
//     },
// ];

function HomePage(props) {
    // const [loadedMeetups, setLoadedMeetups] = useState([]);
    // useEffect(() => {
    //     // send a http request and fetch data
    //     setLoadedMeetups(DUMMY_MEETUPS);
    // }, [])

    return (
        <Fragment>
            <Head></Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
        
    );
};

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     // fetch data from an API

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// }

export async function getStaticProps() {
    // fetch data from an API
    const client = await MongoClient.connect('mongodb+srv://ssafyonly:thwls123@cluster0.nsjxpnc.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetups => ({
                title: meetups.title,
                address: meetups.address,
                image: meetups.image,
                id: meetups._id.toString()
            }))
        },
        revalidate: 1
    };
}

export default HomePage;