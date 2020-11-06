import React from 'react';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
} from 'react-native';

import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';


// ATOM
const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});

//SELECTOR
const charCountState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
        const text = get(textState);

        return text.length;
    },
});

function CharacterCount() {
    //Note: 'useRecoilValue' is only used for reading, not writing.
    const count = useRecoilValue(charCountState);
    return (
        <View style={styles.CharacterCountcontainer}>
            <Text style={styles.CharacterCountText}>Character Count: {count}</Text>
        </View>
    )
}

function TextInputField() {
    //Note: 'useRecoilState' is used for writing with hook.
    const [text, setText] = useRecoilState(textState);

    const onChange = (e: any) => {
        setText(e);
    };

    return (
        <View>
            <TextInput style={styles.textInputContainer} value={text} onChangeText={onChange}></TextInput>
            <View style={{ backgroundColor: '#adb5bd' }}>
                <Text style={styles.echoContaier}>
                    Echo: {text}
                </Text>
            </View>
        </View>
    );
}

// COMPONENT
export default function CharacterCounter() {
    return (
        <View style={{ backgroundColor: '#ced4da' }}>
            <View style={{ display: 'flex', alignItems: 'stretch', flexDirection: 'column', marginTop:'20%' }}>
                <TextInputField />
                <CharacterCount />
            </View>
        </View>
    );
}

// STYLES
const styles = StyleSheet.create({
    textInputContainer: {
        display: "flex",
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#343a40',
        borderColor: 'black',
        borderWidth: 2
    },
    echoContaier: {
        display: 'flex',
        fontSize: 30,
        backgroundColor: '#adb5bd',
        margin: 10,
        justifyContent: 'center',
        textAlign: 'center',
        borderColor: '#adb5bd',
    },
    CharacterCountcontainer: {
        display: 'flex',
        backgroundColor: '#ced4da',
        height: '100%'
    },
    CharacterCountText: {
        display: 'flex',
        fontSize: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        textAlign: 'center'
    },
})