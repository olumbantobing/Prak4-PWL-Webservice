import Head from "../component/head";
import Contact from "../component/contact";
import Portofolio from "../component/portofolio";
import { Link } from 'react-scroll'
import Skill from "../component/skill";
function Home() {
    return (
        <div>
            <Head />
            <Skill />
            <Portofolio />
            <Contact />
        </div >
    );
}

export default Home;