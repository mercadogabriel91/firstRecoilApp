import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
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
    const count = useRecoilValue(charCountState);

    // return <>Character Count: {count}</>;
    return <Text>haracter Count: {count}</Text>
}

function TextInputField() {
    const [text, setText] = useRecoilState(textState);

    const onChange = (event: any) => {
        setText(event.target.value);
    };

    return (
        <View>
            <TextInput value={text} onChange={onChange}></TextInput>
            <Text>
                Echo: {text}
            </Text>
        </View>
    );
}

export default function CharacterCounter() {
    return (
        <View>
            <TextInputField />
            <CharacterCount />
        </View>
    );
}