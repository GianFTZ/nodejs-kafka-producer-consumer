import { kafka } from "../connection/index.mjs";

const producer = kafka.producer()

await producer.connect()

await producer.send({
    topic: 'test',
    messages: [
        { value: 'hello from node' }
    ]
})

await producer.disconnect()