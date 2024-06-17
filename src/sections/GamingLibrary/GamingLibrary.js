import './GamingLibrary.css'
import { GamingLibraryCard , SectionWrapper, SectionHeader } from '../../components/index';
import GamingLibraryData from '../../Data/GamingLibraryData';

function GamingLibrary() {

    const cards = GamingLibraryData.map(card =>{
        return <GamingLibraryCard key={card.id} image={card.image} title={card.title} category={card.category} date_added={card.date_added} hours_player={card.hours_player} download={card.download} />
    })

    return (
        <>
             <SectionWrapper> 
                 <SectionHeader>
                     Gaming Library
                 </SectionHeader>
     
                 <div className="gaming-library-cards">
                     {cards}
                 </div>
             </SectionWrapper>  
        </>
       )
}

export default GamingLibrary
