import List from './../components/list'
import './../css/list-card.css';
import {useEffect} from 'react';

const img1 = {url: 'https://lh3.googleusercontent.com/P4ykYEiECRHmKODC78UbeczuCi-s3d0dMWm14T8CWMmiI3m9aZkQIENSh9JfbCRmHeMdpbevh76dX7xt3jzRPrwBkA6kal1_JkpKbMRzC0XNwR4cxkeb56hHqdc_J0pgTI3MW84SPg2Ppp3g_7A0p6qjW1L7pXlI6cP-F6nYJs8lInfW66InGjs5dUOyOkORuaq7CRN9pKcOB-vUyIHA2HFGq5hKnfwAVTpA8P_Y90YU8MUDx0N5bJH37hyaiTneuKbJykPXEZ9QfiD0vFFKApXjESo1UK2ElljB43Tax8Dzeg_bMTlPbFfud7RXYl6stp8X86Jq9epsxUXJHcaYNjrQhqOBoZwR_3-9MM4f5LXD3p_FQRigDW8nb7flKmSinPh26e8mW6txVoRC0BDrRJJhRrquSCAKU6AqRKc4p1R9_xg8XsQgf81MrbT-kqFQYAXJzQnsFZ8Tys-3glljTI0THmEz3BonIG_Sg_X1eZp-3X31VpY9QxMjxoy00UY-HWg9V7Vwf6u5ay-7i1EorRR9EhOKtqou2PouyEtQVt2KQhx5-bXQ8rAiXHPCtr5GBtMUB4jINitlG4pFiZUYKRrGZM6d3_B2j9aHzk5ClovWAeN85LawDyRbOnX8vjbYAgpqtNGuy1gXHHFuvTitd4p21BdEKK-eIkmFtx699sjKqRUQsb0RV5_wopLFv4Zklkck65czO5dDLbWKiyv8cGa3n2U3ekCmSwyClz2UGoEVQLswNNZIYP-HRlmEeoXk5VBn_s5a5hiIbPy9qfJREvB6SxR9rQ6nyek=w1200-h604-no?authuser=0',
                alt: 'a'}

const list_of_test = [img1, img1, img1, img1, img1, img1, img1, img1, img1, img1, img1]

const Home = () => {

    useEffect(() => {
        document.getElementById('HomeNavLinkItem').classList.add('actived-link');
        return () => {
            document.getElementById('HomeNavLinkItem').classList.remove('actived-link');
        }
    }, []);

    return (
        <div className='container'>
            <div id='home-banner'>
                <div className='overlay-img'></div>
                <div className='page-title'>
                    <h1>Home</h1>
                </div>
            </div>
        <div className='container home-layout' id="body-container">
            <div className="content">
                <h1 class="content-title">Fight against other players and gain honor win.</h1>
                <p class="content-detail">Draw card, equip weapon, cast spell and be the last ones survive.</p>
                <img className='banner' src={img1.url}
                    alt="Girl in a jacket"></img>
            </div>
            <div className='content'>
                <h1 className='content-title'>Diversity tactics, diverse roles</h1>
                <p class="content-detail">Each role has different stat, abilities and strong ultimate skills.</p>
                <List ListItems={list_of_test}/>
            </div>
        </div>
        </div>
  );
}

export default Home;