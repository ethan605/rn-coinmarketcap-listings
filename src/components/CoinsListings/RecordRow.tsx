import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Models
import ListingRecord from 'src/models/ListingRecord';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    borderBottomColor: 'lightgray',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  order: {
    width: 40,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    color: 'darkblue',
    fontSize: 18,
  },
  subTitle: {
    color: 'darkblue',
    fontSize: 15,
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
  },
  currency: {
    fontWeight: 'bold',
  },
  up: {
    color: 'dodgerblue',
  },
  down: {
    color: 'red',
  },
  pricesContainer: {
    alignItems: 'flex-end',
  },
});

interface Props {
  item: ListingRecord;
  index: number;
}

const RecordRow: React.SFC<Props> = ({ index, item }) => (
  <View style={styles.container}>
    <Text style={styles.order}>{`${index + 1}.`}</Text>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.subTitle}>{`(${item.symbol})`}</Text>
    </View>
    <View style={styles.pricesContainer}>
      <Text style={styles.text}>
        {'Cir. Supply: '}
        <Text style={styles.currency}>{item.formattedCirculatingSuply}</Text>
      </Text>
      <Text style={styles.text}>
        {'Price: '}
        <Text style={styles.currency}>{item.USD.formattedPrice}</Text>
      </Text>
      <Text style={styles.text}>
        {'Change (24H): '}
        <Text style={[styles.currency, (item.USD.percentChange24h || 0) < 0 ? styles.down : styles.up]}>
          {item.USD.formattedChange24h}
        </Text>
      </Text>
    </View>
  </View>
);

export default RecordRow;
