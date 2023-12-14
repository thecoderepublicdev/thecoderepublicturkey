import { useEffect } from "react"

function isMobile() {
    useEffect(() => {
        window.addEventListener('resize', () => {
            return (window.innerWidth < 768 || window.innerWidth === 768)
        });
    }, []);
}

export {
    isMobile
}