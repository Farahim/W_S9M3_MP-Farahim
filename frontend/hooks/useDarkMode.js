import {useLocalStorage} from "./useLocalStorage";

export function useDarkMode () {
    const [dark, setdark] = useLocalStorage('darkmode', false)
    return [dark, setdark]
}