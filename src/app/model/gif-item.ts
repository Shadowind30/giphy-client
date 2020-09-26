export interface GiphyResponse {
	data: GifItem[];
}

interface GifImages {
	original: {
		url: string;
	}
}

interface GifUser {
	avatar_url: string;
	display_name: string;
}

export interface GifItem {
	title: string;
	id: string;
	url: string;
	images: GifImages;
	user: GifUser;
	source?: string;
	profileUrl?: string;
}
