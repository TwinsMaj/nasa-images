process.env.NODE_ENV = 'test';

import { app } from '../../index';
import chai from 'chai';
import { StatusCodes } from 'http-status-codes';
import chaiHttp = require('chai-http');
import { NASA_SEARCH_QUERY } from '../queries';

chai.use(chaiHttp);

describe('NASASearchQuery', function () {
	it('should fetch query results', (done) => {
		chai
			.request(app)
			.post('/graphql')
			.send({ query: NASA_SEARCH_QUERY })
			.set('Accept', 'application/json')
			.end((err, res) => {
				expect(res.status).toBe(StatusCodes.OK);
				expect(res.body.data).toHaveProperty('search');
				done();
			});
	});
});
