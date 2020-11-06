import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

// Local imports
import CharacterCounter from './components/CharacterCounter';

export default function App() {
  return (
    <>
      <RecoilRoot>
        <CharacterCounter/>
      </RecoilRoot>
    </>
  );
};
