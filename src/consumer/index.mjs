import { kafka } from "../connection/index.mjs";

const consumer = kafka.consumer({ groupId: 'test' })
await consumer.subscribe({ topic: 'test'})

await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
        console.log({
            value: message.value.toString()
        })
    }
})
