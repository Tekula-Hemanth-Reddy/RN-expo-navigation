import { CommonActions } from '@react-navigation/native';
import { useNavigation, useRouter } from "expo-router";
import { useContext } from 'react';
import links from './navigation-links';

//send object by stringify'ing it JSON.STRINGIFY()
//cannot pass url because it might alter route
export default function useRnNavigation() {
    const router = useRouter();
    const nav = useNavigation();

    const goBack = () => {
        if (canGoBack())
            router.back();
        else
            // go to some specific place
            router.replace('')
    }
    const layout = () => {
        router.push(
            {
                pathname: links.LAYOUT,
                params: {}
            }
        );
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
        goBack, canGoBack, layout
    };
}