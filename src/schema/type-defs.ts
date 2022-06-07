import { GraphQLBoolean, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';

export const Image = new GraphQLObjectType({
	name: 'Image',
	fields: {
		href: { type: GraphQLString },
		description: { type: GraphQLString },
		title: { type: GraphQLString },
	},
});

export const Response = new GraphQLObjectType({
	name: 'Response',
	fields: {
		isPagesLeft: { type: GraphQLBoolean },
		currentPage: { type: GraphQLInt },
		images: { type: new GraphQLList(Image) },
	},
});
