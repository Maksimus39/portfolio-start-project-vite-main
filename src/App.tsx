import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Works} from "./layout/works/Works.tsx";
import {Testimony} from "./layout/sections/testimony/Testimony.tsx";
import {Contact} from "./components/contact/Contact.tsx";
import {Slogan} from "./components/slogan/Slogan.tsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
            <Slogan/>
        </div>
    )
}

export default App

