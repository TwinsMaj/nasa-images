import { graphql, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import { fetchImages } from './resolvers';
import { Response } from './type-defs';

const rootType = new GraphQLObjectType({
	name: 'NASASearchQuery',
	fields: {
		search: {
			type: Response,
			args: {
				q: { type: new GraphQLNonNull(GraphQLString) },
				from: { type: GraphQLInt },
			},
			resolve: fetchImages,
		},
	},
});

export const rootSchema = new GraphQLSchema({ query: rootType });
