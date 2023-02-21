import { ApolloServer } from 'apollo-server'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql';
import { AppointmentsResolver } from './resolvers/appointment-resolver';

import path from 'node:path'

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [
            AppointmentsResolver
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql') // If this is argumment is not passed, then the file will be create in memory
    })

    const server = new ApolloServer({schema})

    const { url } = await server.listen();

    console.log(`🚀 HTTP SERVER IS RUNNING ON ${url}`)
}

bootstrap()



