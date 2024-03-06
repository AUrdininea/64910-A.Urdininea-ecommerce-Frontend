import Feature from '../../Layout/Feature/Feature'
import Banner from '../../Layout/Banner/Banner';
import {ProductCardsContainer} from '../../components/ProductCardsContainer/ProductCardsContainer';

export default function Home() {
    return (
        <>
      

            <Banner />


            <main className="main-container   index">

                <h1 className="main-title"> GUITARRAS PREMIUM</h1>
                <div className="line"></div>

           

               
                
            <ProductCardsContainer /> 
               

               


         

            <Feature />
            </main>
      </>
    )
}
