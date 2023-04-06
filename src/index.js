import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(<App />, document.querySelector("#root"))
let docTitle =  document.title
window.addEventListener("blur", () => {
    document.title = "Come Back :(";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})