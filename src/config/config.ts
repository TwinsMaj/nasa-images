import dotenv from 'dotenv';

dotenv.config();

const SERVER_PORT = process.env.PORT ? Number(process.env.PORT) : 1337;
const IMAGE_API = String(process.env.NASA_IMG_API);

const devConfig = {
	imagesUrl: IMAGE_API,
	server: {
		port: SERVER_PORT,
	},
};

const testConfig = {
	imagesUrl: '',
	server: {
		port: 8888,
	},
};

export const config = process.env.NODE_ENV === 'test' ? testConfig : devConfig;
