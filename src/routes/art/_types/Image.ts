export type ImgurObject = {
	id: string;
	title: string;
	link: string;
	is_album: boolean;
	description: string;
	tags: string[];
	thumbnail?: string;
	width?: string;
	height?: string;
};

export type Image = ImgurObject & {
	animated: boolean;
	mp4?: string;
	gifv?: string;
	is_album?: false;
	type: string;
};

export type Album = ImgurObject & {
	cover: string;
	images: Image[];
	is_album: true;
};

export type ImgurResponse = {
	data: Array<Image | Album>;
};

export function isAlbum(o: Image | Album): o is Album {
	return (o as Album).is_album;
}
