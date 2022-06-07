export type Image = {
	href: string;
	desciption: string;
	title: string;
};

export type ImageList = Image[];

export type RequestPayload = {
	q: string;
	from: number;
};
