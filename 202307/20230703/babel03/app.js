class App extends React.Component{
    render(){
        return(
            <ul>
                <li>
                    hello list 01
                </li>
            </ul>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App/>);