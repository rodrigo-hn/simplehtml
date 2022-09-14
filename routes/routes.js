import { pages } from "../controllers/index.js";

export const router = async (route, data) => {
    let content= document.getElementById('root');
    content.innerHTML = ""
    content.innerText=""
    console.log('route', route)
    switch (route) {
        case '#/':
            return content.appendChild(pages.home());
    
        default:
            break;
    }
}