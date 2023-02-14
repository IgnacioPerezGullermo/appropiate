import React from 'react';
import { PropiertyCard } from '../components/DisplayPropierty/Components/PropiertyCard.jsx';

export const DisplayPropierty = () => {
  let data = [
    {
      "id": "42ff45fd-7b27-4af7-8241-6eba92804781",
      "price": "2000",
      "region": "Metropolitana",
      commune: "Santiago",
      "bedr": "2",
      "bath": "1",
      "storage": "SI",
      "parking": "SI",
      "caprate": "3,3",
      "totalarea": "20000",
      "deliverytype": "Primer Semestre 2023",
      "inmob": "Copahue",
      "projectname": "Los pajaritos",
      "stock": "true",
      "createdAt": "2023-02-10T18:17:40.453Z",
      "updatedAt": "2023-02-10T18:17:40.453Z"
    },
    {
      "id": "dddd2d9b-313b-4ec8-9e73-b11e9a5f3c56",
      "price": "20000",
      "region": "Metropolitana",
      commune: "Santiago",
      "bedr": "2",
      "bath": "1",
      "storage": "No",
      "parking": "NO",
      "caprate": "2,4",
      "totalarea": "20000",
      "deliverytype": "Primer Semestre 2023",
      "inmob": "Copahue",
      "projectname": "Los pajaritos",
      "stock": "true",
      "createdAt": "2023-02-10T18:23:09.642Z",
      "updatedAt": "2023-02-10T18:23:09.642Z"
    },
  ]
  return <div> {data.map((prop)=>{

    return (<PropiertyCard 
      bedr={prop.bedr}
      bath={prop.bath}
      price={prop.price}
      commune={prop.commune}
      region={prop.region}
      /*storage={prop.storage}
      parking={prop.parking}*/
      caprate={prop.caprate}
      //totalarea={prop.totalarea}
      //deliverytype={prop.deliverytype}
      />)
  })}</div>;
};
