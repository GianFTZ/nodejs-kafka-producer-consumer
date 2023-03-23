import { Kafka } from "kafkajs";

export const kafka = new Kafka({
    clientId: 'broker',
    brokers: ['localhost:9092']
})