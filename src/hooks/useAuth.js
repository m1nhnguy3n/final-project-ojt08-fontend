import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from '../config/firebase';
import { useLocalStorage } from './useLocalStorage';

export const useAuth = () => {
    const { setItem, removeItem } = useLocalStorage;

    const loginWithGoogle = async () => {
        const userData = await signInWithPopup(auth, provider);
        setItem('accessToken', userData.user.accessToken);
    };

    const logout = async () => {
        try {
            await signOut(auth);
            removeItem('accessToken');
        } catch (error) {
            console.error('Error signing out: ', error);
        }
    };

    return { logout, loginWithGoogle };
};
