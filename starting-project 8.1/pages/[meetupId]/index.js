import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeedupDetails(props) {
    return (
        <MeetupDetail
            image={props.image}
            title={props.title}
            address={props.address}
            description={props.description}
        />
    );
}

export async function getStaticPaths() {

    const client = await MongoClient.connect('mongodb+srv://ssafyonly:thwls123@cluster0.nsjxpnc.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

    client.close();

    // hardcording
    return {
        fallback: false,
        paths: meetups.map((meetup) => ({ 
            params: { meetupId: meetup._id.toString() },
     }))
        // paths: [
        //     {
        //         params: {
        //             meetupId: 'm1',
        //         } 
        //     },
        //     {
        //         params: {
        //             meetupId: 'm2',
        //         } 
        //     },
        // ]
    }
}

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect('mongodb+srv://ssafyonly:thwls123@cluster0.nsjxpnc.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)})

    return ({
        props: {
            meetupData: selectedMeetup,
            // meetupData: {
            //     image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
            //     id: meetupId,
            //     title: "A First Meetup",
            //     address: "Some Street 5, Some City",
            //     description: "The meetup description"
            // }
        }
    });
}

export default MeedupDetails;