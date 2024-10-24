import Episode from './Episodeclass';
import Actor from "./Actorclass";
console.log(Episode,Actor);

class Series {
    _title: string; 
    _description: string; 
    _startYear: number;
    _endYear: number; 
    _episodes: Episode[]; 

    constructor(title: string, description: string, startYear: number, endYear: number, episodes: Episode[]){
        this._title = title;
        this._description = description; 
        this._startYear = startYear; 
        this._endYear = endYear; 
        this._episodes = episodes
    }
}
const actor1 = new Actor("Necati", "Abay", new Date("01-10-1986"),"Male");
const actor2 = new Actor("Daniel", "Griezmann", new Date("01.01.1995"),"Male");
const actor3 = new Actor("Gonca", "Abay", new Date("01-02-1997"),"Female");
const episode1 = new Episode("Whatup", 90, "a lost place in antarktis", [actor1, actor2]);
const episode2 = new Episode("back in desert", 85, "will he find his way back home after losing everything", [actor2, actor3]);
const episode3 = new Episode("prison break", 120, "breaking out of the prison with michael scorfield", [actor3, actor2]);
const series1 = new Series("Lost in Translation", "american in china experience a new cultur", 1989, 2009, [episode1, episode2, episode3]);
const series2 = new Series("hextor and canibale", "a corruption scandal in the vatican", 1938, 3000, [episode1,episode2]);
const series3 = new Series("Lammbock", "how a lawyear can mess up his life", 1966, 1986, [episode1,episode2,episode3]);

function printSeriesInfo(series: Series):void {
    console.log(`Title: ${series._title}`);
    console.log(`Description: ${series._description}`);
    console.log(`Start Year: ${series._startYear}`);
    console.log(`End Year: ${series._endYear}`);
    console.log(`Number of Episodes: ${series._episodes.length}`);

}
printSeriesInfo(series1);



















export default Series;