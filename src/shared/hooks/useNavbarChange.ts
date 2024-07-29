import {  useAtom } from 'jotai';
import { activeNav } from '@/lib/utils';

const useNavbarChange = () => {
    const [active, setActive] = useAtom(activeNav);
    return {active, setActive}
}

export default useNavbarChange