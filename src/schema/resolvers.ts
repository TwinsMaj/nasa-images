import axios from 'axios';
import { config } from '../config/config';
import { RequestPayload } from '../types';
import { isNextLink, transformData } from '../utils';

export const fetchImages = async (_: any, { q, from = 1 }: RequestPayload) => {
	const baseUrl = config.imagesUrl;
	const apiUrl = `${baseUrl}?q=${q}&page=${from}`;
	const response = await axios(apiUrl);

	const {
		data: { collection },
	} = response;

	const { items, links = [] } = collection;

	const isPagesLeft = isNextLink(links);
	const images = transformData(items);
	const currentPage = from;

	return { isPagesLeft, images, currentPage };
};
