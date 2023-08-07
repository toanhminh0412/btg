'use client';

import { useEffect } from "react";

export default function PopUp() {
    useEffect(() => {
        setTimeout(() => {
            alert("We don't provide any visas at BTG Immigration");
        }, 60000);
    }, []);

    return <div className="hidden"></div>;
}