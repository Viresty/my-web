import Header from './../components/header'
import List from './../components/list'

const img1 = {url: 'https://lh3.googleusercontent.com/zNw_zwGhjcN44ck-gtjwI49rcPXlxrhTVgu8scL78A1CLLK53lb8F-JLKhEH6j3wMqK_b4KMmpMOf8dSuXhxeZfP39rU3Vw8g6BTXAa3Iwrankb-OQBu5k0GWNTjfuLVL8MYTAzar3OP4iX_EnW6-oenQVZ4FEReZB1RULqPGDxebpzyuIU-mFPiHHRIjMisSZxASYMDqv4bKq9GEmp4zx5lhpdlLnjsJtw-2oI3AYZREyMUfrpVqf_uGO-0P42hS-FA-KBGLpoNEBRZ-OVzQPp_3RQQPkg-51yS9aSlvGiY8OjJQ4zJX7r5x82xelUStlWb10iTsgtXL1K1o2VIItHasqxdZfgf_94Jx5-g4xdWpjdPTCCjRPsYKDRJzQA1Cs6Cpr0jicDgcPeeu8yCUF_OAGiEHIh3EIXdghaA7qnpAYRpT0gFojPY6svMt0G_LcJLXbTniXN1qu0RIB7pmEsPlCbXQmL4Gu67XR3n8LoQitPxBPEqSokuYZiDWICdB20okeHJ3ad457aRKLtrEJdH2uyJhAEmyivVchSjaZZ6oWJ1jyriJ2g2u72R1kM16VJkabtS-6bggzunIe9qAf1ViVRB6nRnz6C2CED4cGBewyrP8r-eq_T_BRIpI0NhpJW5LUnKHhAyr9rtqwkmnOdlCmTYYemI1iJ3gYqRCqkNFlM1YvkNXRhznCVhNSVJnQysGJzcb3ecptPfv_4QyeR8nqnDNVvMI9jTFfLIXunOWnVUv-sSw9ZVKpXzuFtzXN4Uh6F6mhjLzzLd17IvwCO4frhDB8d-IPA=w1300-h732-no?authuser=0', alt: 'a'}

const list_of_test = [img1, img1, img1, img1]

const Home = () => {
  return (
    <div className='container'>
      <Header />
      <div className='container' id="body-container">
        <div className="content">
            <img src="
                https://lh3.googleusercontent.com/zNw_zwGhjcN44ck-gtjwI49rcPXlxrhTVgu8scL78A1CLLK53lb8F-JLKhEH6j3wMqK_b4KMmpMOf8dSuXhxeZfP39rU3Vw8g6BTXAa3Iwrankb-OQBu5k0GWNTjfuLVL8MYTAzar3OP4iX_EnW6-oenQVZ4FEReZB1RULqPGDxebpzyuIU-mFPiHHRIjMisSZxASYMDqv4bKq9GEmp4zx5lhpdlLnjsJtw-2oI3AYZREyMUfrpVqf_uGO-0P42hS-FA-KBGLpoNEBRZ-OVzQPp_3RQQPkg-51yS9aSlvGiY8OjJQ4zJX7r5x82xelUStlWb10iTsgtXL1K1o2VIItHasqxdZfgf_94Jx5-g4xdWpjdPTCCjRPsYKDRJzQA1Cs6Cpr0jicDgcPeeu8yCUF_OAGiEHIh3EIXdghaA7qnpAYRpT0gFojPY6svMt0G_LcJLXbTniXN1qu0RIB7pmEsPlCbXQmL4Gu67XR3n8LoQitPxBPEqSokuYZiDWICdB20okeHJ3ad457aRKLtrEJdH2uyJhAEmyivVchSjaZZ6oWJ1jyriJ2g2u72R1kM16VJkabtS-6bggzunIe9qAf1ViVRB6nRnz6C2CED4cGBewyrP8r-eq_T_BRIpI0NhpJW5LUnKHhAyr9rtqwkmnOdlCmTYYemI1iJ3gYqRCqkNFlM1YvkNXRhznCVhNSVJnQysGJzcb3ecptPfv_4QyeR8nqnDNVvMI9jTFfLIXunOWnVUv-sSw9ZVKpXzuFtzXN4Uh6F6mhjLzzLd17IvwCO4frhDB8d-IPA=w1300-h732-no?authuser=0
                "
                alt="Girl in a jacket"></img>
        </div>
        <div className='content'>
            <List ListItems={list_of_test} />
        </div>
      </div>
    </div>
  );
}

export default Home;