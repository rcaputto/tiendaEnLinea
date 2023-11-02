import { Carousel } from 'flowbite-react';
import '../Styles/Calesita.css'

export default function Calesita ({imagen1, imagen2, imagen3}){

    return (
        <>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src={imagen1} alt="..." />
        <img src={imagen2} alt="..." />
        <img src={imagen3} alt="..." />
        
      </Carousel>
    </div>
 </>
    )
}