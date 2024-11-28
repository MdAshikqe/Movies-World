
export type TMovie = {
    title:string;
    description:string;
    releaseDate: Date;
    genre:string;
    slug:string;
    viewCount:number;
    totalRating:number;
    isDeleted?:boolean;
}