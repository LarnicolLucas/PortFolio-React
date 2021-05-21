import SocialMedia from './socialMedia.js'

export default function Container(props){

    const list= [
        {id: 0, src: "/images/peau-line/socialMedia/facebook.svg", alt: "FaceBook Icon"},
        {id: 1, src: "/images/peau-line/socialMedia/twitter.svg", alt: "Twitter Icon"},
        {id: 2, src: "/images/peau-line/socialMedia/Instagram.svg", alt: "Instagram Icon"},
        {id: 3, src: "/images/peau-line/socialMedia/youtube.svg", alt: "Youtube Icon"}
    ]

    const socialMedias = list.map(el=> <SocialMedia key={el.id} src={el.src} alt={el.alt} />);

    const inlineStyle = {
        display: 'flex',
        margin: '0',
        padding: '0',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20vh',
        marginBottom: '100px'
    }

    return <>
        <section style={inlineStyle}>
            {socialMedias}
        </section>
        
    </>
}