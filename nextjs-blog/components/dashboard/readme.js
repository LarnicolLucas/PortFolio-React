const object = {
    intro : `In this page, i would like to show a SPA with simple read request from API.`,
    detail : 'Somes (fakes) users are register in DB with informations like their age or dev skills.',

    front : 'Front : we use a trending glassmorphism UI backdoor-filter CSS propretie (not compatible to firefox) on dynamic react components. Of course this page is responsive thanks to css media query and a personal react component using window.matchMedia. No CSS framework is use, layout are only made with CSS grids and flexbox. Semantic HTML is prefered for improve SEO.',

    back : 'Back : The framework NextJs provide our environment backend. The API request is handle by a component wich is connect to a MongoDB Atlas server. Each select of user by the client, trigger the API request GET and return a simple json format. Then, React Components consume it.'
}

export default object