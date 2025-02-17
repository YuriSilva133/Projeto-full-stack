//npm i mongodb
import { MongoClient } from 'mongodb';

const URI = `mongodb+srv://yuri_Silva:QRvd4g3WlRN7xaB7@cluster0.v0fev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(URI)

export const db = client.db("spotifyAula")
