import { ImageList } from '../types';

export const isNextLink = (links: Array<Record<string, any>>): boolean => {
	return links.findIndex((link) => link.rel === 'next') !== -1;
};

export const transformData = (responseItems: any): ImageList => {
	const transformed = responseItems.map((image: any) => {
		const { links = [{}], data } = image;
		const { href = '' } = links[0];
		const { title, description } = data[0];

		return { href, description, title };
	});

	return transformed;
};
