import express from 'express';
import http from 'http';
import { graphqlHTTP } from 'express-graphql';
import { config } from './config/config';
import { rootSchema } from './schema/rootType';
import { apiRules } from './middleware/api-rules';

export const app = express();
const port = config.server.port;

// define API Rules
app.use(apiRules);

// init graphql
app.use(
	'/graphql',
	graphqlHTTP({
		schema: rootSchema,
		graphiql: true,
	}),
);

http.createServer(app).listen(port, () => console.log(`Server is running on port: ${port}`));
