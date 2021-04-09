import gsap from 'gsap'

const animation = (element, in_out) => {

    const randomCo = (min, max)=> Math.ceil((Math.random() * (max - min)) + min);

    const anim_params_in = {x: 0, y: 0, duration: 1.5, ease: "elastic.out(1, 0.3)"};
    const anim_params_out = {x: randomCo(700, -200), y: randomCo(500, 0) , duration: 1};

    if(in_out === true) return gsap.to(element, anim_params_in)
    return gsap.to(element, anim_params_out)
}

export default animation