import { useState } from "react";

export default function useToggle(initialValue: boolean = false): [boolean, () => void, (toogleStatus: boolean) => void] {
    const [toggle, setToggle] = useState(initialValue);

    const handleToggle = () => {
        setToggle(prevToggle => !prevToggle);
    }

    const setToggleStatus = (toggleStatus: boolean) => {
        setToggle(toggleStatus);
    }

    return [toggle, handleToggle, setToggleStatus];
}