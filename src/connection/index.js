import { Kafka } from "kafkajs";

export const kafka = new Kafka({
    clientId: 'kafka-nodejs-starter',
    brokers: ['kafka1:9092']
})