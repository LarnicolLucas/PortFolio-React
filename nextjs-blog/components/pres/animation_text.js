import gsap from 'gsap'

const animation = (element, in_out) => {

    const randomCo = (min, max)=> Math.ceil((Math.random() * (max - min)) + min);

    const anim_params_in = {x: 0, opacity: 1, duration: 0.3, ease: "power4.out"};
    const anim_params_out = {x: 1000, opacity: 0, duration: 0.3};

    if(in_out === true) return gsap.to(element, anim_params_in)
    return gsap.to(element, anim_params_out)
}

export default animation