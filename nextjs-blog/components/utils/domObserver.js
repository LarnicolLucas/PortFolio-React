const createObserver = (dom_target, options, fn) => {

    const observer = new IntersectionObserver(fn, options);
    observer.observe(dom_target);
    return function cleanObserver(){observer.disconnect()}
}

export default createObserver