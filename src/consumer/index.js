import { kafka } from "../connection";

const consumer = kafka.consumer()
await consumer.subscribe({ topic: 'test' })

await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
        console.log({
            value: message.value.toString()
        })
    }
})