
class Cinema {
    cinemaName: string;
    private _moviePrice;
    readonly studentDiscount: number;
    readonly teacherDiscount: number;

    constructor(cinemaname:string,movieprice:number) {
        this.cinemaName = cinemaname;
        this.moviePrice = movieprice;
        this.studentDiscount = Math.round(Math.random() * (20 - 10)) + 10;
        this.teacherDiscount = Math.round(Math.random() * (10 - 5)) + 5;

    }
    set moviePrice(movieprice: number) {
        this._moviePrice = movieprice >= 30 && movieprice <= 200 ? movieprice : 40;
    }
    get moviePrice() {
        return this._moviePrice;
    }

}