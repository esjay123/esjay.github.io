import { useState, useEffect, useRef } from "react";
import './SimpleNavigation.css';
import Logo from './Logo';
import _ from 'lodash';

let prevScrollY = 0;

export default function SimpleNavgation() {
    const [isOnPageTop, setOnPageTop] = useState(true);
    const ref = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const height = _.get(ref, 'current.clientHeight', null);
            const goingUp = currentScrollY < prevScrollY;
            if (goingUp && currentScrollY < height) {
                setOnPageTop(true);
            } else {
                setOnPageTop(false);
            }
            prevScrollY = currentScrollY;
        };
    
        window.addEventListener("scroll", handleScroll, { passive: true });
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, [isOnPageTop]);
    

    return (
        <nav className={isOnPageTop ? "onTop" : "onBottom"} ref={ref}>
            <Logo />
        </nav>
    )
}
