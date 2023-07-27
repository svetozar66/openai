import "../styles/global.css"

export default function App(props){
    return(
        <div>
            <h1>AI Email generator</h1> 
            <props.Component></props.Component>
        </div>
    )
}