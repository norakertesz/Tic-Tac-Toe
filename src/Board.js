import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Board = ({ board, onPress }) => {
  return (
    <View style={styles.boardContainer}>
      <View style={styles.board}>
        {board.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, cellIndex) => (
              <TouchableOpacity
                key={cellIndex}
                style={[
                  styles.cell,
                  {
                    borderTopWidth: rowIndex === 0 ? 0 : 1,
                    borderLeftWidth: cellIndex === 0 ? 0 : 1,
                  },
                ]}
                onPress={() => onPress(rowIndex, cellIndex)}
              >
                <Text style={styles.cellText}>{cell}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Board;

const styles = StyleSheet.create({
  boardContainer: {
    marginTop: 30,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  
  },
  board: {
    borderWidth: 1,
    borderColor: '#000',
   
  },
  row: {
    flexDirection: 'row',
    
  },
  cell: {
    width: 110,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
  },
  cellText: {
    fontSize: 36,
    fontFamily:'papyrus',
  },
});
