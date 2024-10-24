import Episode from "./Episodeclass";
import Actor from "./Actorclass";
console.log(Episode,Actor);


// definition of classes 
class Series {
    _title: string; 
    _description: string; 
    _startYear: number;
    _endYear: number; 
    _episodes: string; 

    constructor(title: string, description: string, startYear: number, endYear: number, episodes: string){
        this._title = title;
        this._description = description; 
        this._startYear = startYear; 
        this._endYear = endYear; 
        this._episodes = episodes
    }
}

export default Series;