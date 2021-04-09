const createObserver = (dom_target, options, fnIn, fnOut) => {

    const intersectionFunction = (entries, observer) => {
        //no Functional
        entries.forEach((el,i) => {
            if(el.intersectionRatio > observer.thresholds[i]) return fnIn()
            return fnOut()
        })
    };

    const observer = new IntersectionObserver(intersectionFunction, options);
    observer.observe(dom_target);
    return function cleanObserver(){observer.disconnect()}
}

export default createObserver