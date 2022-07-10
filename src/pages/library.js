import List from './../components/list'
import './../css/list-card.css';
import {useEffect} from 'react';

const img1 = {url: 'https://lh3.googleusercontent.com/P4ykYEiECRHmKODC78UbeczuCi-s3d0dMWm14T8CWMmiI3m9aZkQIENSh9JfbCRmHeMdpbevh76dX7xt3jzRPrwBkA6kal1_JkpKbMRzC0XNwR4cxkeb56hHqdc_J0pgTI3MW84SPg2Ppp3g_7A0p6qjW1L7pXlI6cP-F6nYJs8lInfW66InGjs5dUOyOkORuaq7CRN9pKcOB-vUyIHA2HFGq5hKnfwAVTpA8P_Y90YU8MUDx0N5bJH37hyaiTneuKbJykPXEZ9QfiD0vFFKApXjESo1UK2ElljB43Tax8Dzeg_bMTlPbFfud7RXYl6stp8X86Jq9epsxUXJHcaYNjrQhqOBoZwR_3-9MM4f5LXD3p_FQRigDW8nb7flKmSinPh26e8mW6txVoRC0BDrRJJhRrquSCAKU6AqRKc4p1R9_xg8XsQgf81MrbT-kqFQYAXJzQnsFZ8Tys-3glljTI0THmEz3BonIG_Sg_X1eZp-3X31VpY9QxMjxoy00UY-HWg9V7Vwf6u5ay-7i1EorRR9EhOKtqou2PouyEtQVt2KQhx5-bXQ8rAiXHPCtr5GBtMUB4jINitlG4pFiZUYKRrGZM6d3_B2j9aHzk5ClovWAeN85LawDyRbOnX8vjbYAgpqtNGuy1gXHHFuvTitd4p21BdEKK-eIkmFtx699sjKqRUQsb0RV5_wopLFv4Zklkck65czO5dDLbWKiyv8cGa3n2U3ekCmSwyClz2UGoEVQLswNNZIYP-HRlmEeoXk5VBn_s5a5hiIbPy9qfJREvB6SxR9rQ6nyek=w1200-h604-no?authuser=0',
                alt: 'a'}

const list_of_test = [img1, img1, img1, img1, img1, img1, img1]

const Library = () => {

    useEffect(() => {
        document.getElementById('LibraryNavLinkItem').classList.add('actived-link');
        return () => {
            document.getElementById('LibraryNavLinkItem').classList.remove('actived-link');
        }
    }, []);

    return (
        <div className='container'>
            <div className='overlay-img'></div>
        <div className='container library-layout' id="body-container">
            <div className='content'>
                <List ListItems={list_of_test} title="Role Card" detail="Stat, abilities and skills each player will have in-game."/>
                <List ListItems={list_of_test} title="Weapon Card" detail="Strong sword, steady shield, ... will support players battle with each other."/>
                <List ListItems={list_of_test} title="Spell Card" detail="Powerful and useful spell will change the game with judicious tactic."/>
            </div>
        </div>
        </div>
  );
}

export default Library;