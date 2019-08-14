/**
 * @format
 */

import React, { PureComponent, ReactElement } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// Locals
import withConnect, { ConnectProps } from './withConnect';

type Props = ConnectProps;

interface State {
  usingHermes: boolean;
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

class PlaceholderScreen extends PureComponent<Props, State> {
  public state = {
    // eslint-disable-next-line no-undef
    usingHermes: typeof HermesInternal === 'object' && HermesInternal !== null,
  };

  public componentDidMount(): void {
    this.props.fetchListingsLatest(0);
    this.props.fetchListingsLatest(1);
    this.props.fetchListingsLatest(2);
    this.props.fetchListingsLatest(3);
  }

  public render(): ReactElement {
    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        <Header />
        {!this.state.usingHermes ? null : (
          <View style={styles.engine}>
            <Text style={styles.footer}>{'Engine: Hermes'}</Text>
          </View>
        )}
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Step One</Text>
            <Text style={styles.sectionDescription}>
              Edit <Text style={styles.highlight}>App.tsx</Text> to change this screen and then come back to see your
              edits.
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>See Your Changes</Text>
            <Text style={styles.sectionDescription}>
              <ReloadInstructions />
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Debug</Text>
            <Text style={styles.sectionDescription}>
              <DebugInstructions />
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Learn More</Text>
            <Text style={styles.sectionDescription}>Read the docs to discover what to do next:</Text>
          </View>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    );
  }
}

export default withConnect(PlaceholderScreen);
