import { useAtom } from 'jotai';
import { admin } from '@/lib/utils';

const useAdmin = () => {
  const [isAdmin, setIsAdmin] = useAtom(admin);
  return { isAdmin, setIsAdmin };
};

export default useAdmin;
