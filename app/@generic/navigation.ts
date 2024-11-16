import { CommonActions } from '@react-navigation/native';
import { useNavigation, useRouter } from "expo-router";
import { useContext } from 'react';
import { links } from './navigation-links';

//send object by stringify'ing it JSON.STRINGIFY()
//cannot pass url because it might alter route
export function useInnNavigation() {
    const router = useRouter();
    const nav = useNavigation();

    const goBack = () => {
        if (canGoBack())
            router.back();
        else
            // go to some specific place
            router.replace('')
    }

    const canGoBack = () => {
        return router.canGoBack();
    }

    //** examples */
    // const first = () => {
    //     router.replace({
    //         pathname: 'route path', // TODO: Add Home Screen Path
    //         params: {}
    //     })
    // }

    // const second = () => {
    //     router.push(
    //         {
    //             pathname: 'route path',
    //             params: {}
    //         }
    //     );
    // }

    // const third = () => {
    //     nav.dispatch(
    //         CommonActions.reset({
    //             index: 0,
    //             routes: [
    //                 { name: 'route path' }
    //             ],
    //         })
    //     );
    // }

    return {
        goBack, canGoBack
    };
}