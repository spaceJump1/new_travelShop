// определить интерфейс ITours - дополнительно добавить к описанию свойство  img: string
export interface ITours {
    description: string,
    id: string,
    img: string,
    name: string,
    price: string,
    tourOperator: string
}

// let tours: ITours = {
//     description: "From the south to the center of the country",
//     id: "1",
//     img: "ocean.jpg",
//     name: "Mexico",
//     price: "€2,192",
//     tourOperator: "LocalAdventures"
// }
