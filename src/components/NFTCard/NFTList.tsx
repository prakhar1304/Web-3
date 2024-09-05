import React from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NFTCard from './NFTCard'; // Your custom NFT card component

// Define the type for each NFT item
interface NFTItem {
  id: string;
  name: string;
  category: string;
  price: string; // or 'number' depending on your data type
  imagelink_square: string;
}

// Define the props type for NFTList
interface NFTListProps {
  nftData: NFTItem[]; // Array of NFT items
}

const NFTList: React.FC<NFTListProps> = ({ nftData }) => {
  const navigation = useNavigation();

  const viewInAR = (nftItem: NFTItem) => {
    // navigation.navigate('ARViewer', {
    //   id: nftItem.id,
    //   name: nftItem.name,
    //   image: nftItem.imagelink_square,
    // });
  };

  return (
    <FlatList
      horizontal
      ListEmptyComponent={
        <View style={styles.EmptyListContainer}>
          <Text style={styles.CategoryText}>No NFTs Available</Text>
        </View>
      }
      showsHorizontalScrollIndicator={false}
      data={nftData}
      contentContainerStyle={styles.FlatListContainer}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            // navigation.push('Details', {
            //   id: item.id,
            //   name: item.name,
            //   category: item.category,
            //   price: item.price,
            // });
          }}>
          <NFTCard
            id={item.id}
            name={item.name}
            category={item.category}
            price={item.price}
            image={item.imagelink_square}
            buttonPressHandler={() => viewInAR(item)}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default NFTList;

const styles = StyleSheet.create({
  EmptyListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  CategoryText: {
    fontSize: 18,
    color: '#888',
  },
  FlatListContainer: {
    paddingHorizontal: 10,
  },
});