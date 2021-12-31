import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import dotenv from 'dotenv';
dotenv.config();

const { PORT, NODE_ENV, IMGUR_CLIENT_ID } = process.env;
const dev = NODE_ENV === 'development';

const app = polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			session: () => ({
				IMGUR_CLIENT_ID
			})
		})
	)
	.listen({ host: '0.0.0.0', port: '3000' }, (err) => {
		if (err) console.log('error', err);
	});

export default app.handler;
