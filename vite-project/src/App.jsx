import { TwitterFollowCard } from "./TwitterFollowCard";

export function App (){ 
    return(
        <section className="App">
        <TwitterFollowCard userName="mekanicas">
            Bruno Miceli
        </TwitterFollowCard>/
        <TwitterFollowCard userName="midudev">  
            Miguel Ángel Duran
        </TwitterFollowCard>/
        </section>
    )
}