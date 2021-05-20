import {useEffect, useState} from 'react'

export default function matchesQuery(query){

    const [matches, setMatches] = useState(true);

    useEffect(() => {
        const mediaMatch = window.matchMedia(`(min-width: ${query}px)`);
        mediaMatch.addEventListener('change', (e)=> setMatches(e.matches));
        return () => mediaMatch.removeEventListener('change', (e)=> setMatches(e.matches));
    });

    return matches
}