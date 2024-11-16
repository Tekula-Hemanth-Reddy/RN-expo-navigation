import * as React from "react";
import { Alert } from "react-native";

interface Istate {
    error: any;
    hasError: boolean;
    errorInfo: null;
}


interface Iprops {
    children?: any;
}
export default class ErrorBoundary extends React.Component<Iprops, Istate> {
    constructor(props: Iprops | Readonly<Iprops>) {
        super(props);
        this.state = { error: null, errorInfo: null, hasError: false };
    }

    static getDerivedStateFromError(error: any) {
        return {
            hasError: true
        }
    }
    componentDidCatch(error: any, errorInfo: any) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    alert(error: string | undefined) {
        Alert.alert(
            "",
            error,
            [
                {
                    text: "close",
                    onPress: () => { this.callChilder() },
                },
            ],
            { cancelable: true }
        );
    }

    callChilder() {
        this.setState({
            hasError: false
        })
    }
    render() {

        if (this.state.hasError) {
            this.alert(this.state.error?.toString());
            return this.props.children;
        }
        else { return this.props.children; }
    }

}