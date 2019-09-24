export interface Link {
    type: string;
    url: string;
    suggested_link_text: string;
}

export interface Multimedia {
    type: string;
    src: string;
    width: number;
    height: number;
}

export interface Movie {
    display_title: string;
    mpaa_rating: string;
    critics_pick: number;
    byline: string;
    headline: string;
    summary_short: string;
    publication_date: string;
    opening_date: string;
    date_updated: string;
    link: Link;
    multimedia: Multimedia;
}
