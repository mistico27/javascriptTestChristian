import netflixData from "./data/netflix-data.mjs";
import singers from "./data/singers.mjs";
export default function A(){

  /*  netflixData.forEach((current)=>{
           console.log("title" + current.title) ;
    })
*/

 //   map

 /*const res=  netflixData.map((tvShow,index)=>{
        return `${index}, ${tvShow.title} - ${tvShow.release_year}`;
    })
return res;

*/

/*const movies =  netflixData.filter((show)=>
        show.type==="Movie"
    ).filter((movies)=>
     movies.release_year>=2020
     ).map((movies)=>`${movies.release_year} --- ${movies.title}`)
return movies;
*/

/*netflixData.find((show)=>
    show.type==='Movie'
)
*/

/*
const text=netflixData.reduce((reducer,show,)=>{
    return ` ${show.release_year} --- ${show.title}`
},'')
*/


const newArray =singers.reduce((singerByCountry, record)=>{
    const conteActual=singerByCountry[record.country] || 0;
    singerByCountry[record.country]=conteActual+1;
    return singerByCountry;
},{})

return newArray;

///zero valor incial de la iteracion


}
      
      
