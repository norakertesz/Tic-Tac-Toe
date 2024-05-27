import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Board from "./Board";

const Game = () => {
  const initialBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  const [board, setBoard] = useState(initialBoard);
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    checkWinner();
  }, [board]);

  const handlePress = (rowIndex, cellIndex) => {
    if (board[rowIndex][cellIndex] === '' && !winner) {
      const newBoard = [...board];
      newBoard[rowIndex][cellIndex] = player;
      setBoard(newBoard);
      setPlayer(player === 'X' ? 'O' : 'X');
    }
  };

  const checkWinner = () => {
    for (let index = 0; index < 3; index++) {
      if (
        board[index][0] !== '' &&
        board[index][0] === board[index][1] &&
        board[index][0] === board[index][2]
      ) {
        setWinner(board[index][0]);
        return;
      }
    }

    for (let index = 0; index < 3; index++) {
      if (
        board[0][index] !== '' &&
        board[0][index] === board[1][index] &&
        board[0][index] === board[2][index]
      ) {
        setWinner(board[0][index]);
        return;
      }
    }

    if (
      board[0][0] !== '' &&
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2]
    ) {
      setWinner(board[0][0]);
      return;
    }

    if (
      board[0][2] !== '' &&
      board[0][2] === board[1][1] &&
      board[0][2] === board[2][0]
    ) {
      setWinner(board[0][2]);
      return;
    }

    const isBoardFull = board.every((row) => row.every((cell) => cell !== ''));
    if (isBoardFull) {
      setWinner('It'+"'"+ 's a TIE! Nobody ');    }
  };

  const resetBoard = () => {
    setBoard(initialBoard);
    setPlayer('X');
    setWinner('');
  };



  useEffect(() => {
    console.log("winner:", winner); 
    if (winner) {
      console.log("Show Alert"); 
      setShowAlert(true);
    }
  }, [winner]);

  const handleAlertConfirm = () => {
    setShowAlert(false);
    resetBoard();
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://fontmeme.com/permalink/240527/6685946402df513c14940962a3cb8c31.png' }} 
        style={styles.titleImage}
      />
      <Board board={board} onPress={handlePress} />
      <TouchableOpacity style={styles.resetButton} onPress={resetBoard}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>

      {showAlert && (
        <View style={styles.overlay}>
          <View style={styles.alertContainer}>
            <Text style={styles.alertText}>{`${winner} won!!!`}</Text>
            <TouchableOpacity style={styles.alertButton} onPress={handleAlertConfirm}>
              <Text style={styles.alertButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleImage: {
    width: 300, 
    height: 100,
    resizeMode: 'contain', 
    marginBottom: 30, 
  },
  resetButton: {
    backgroundColor: '#05A8FF',
    paddingTop: 10,
    paddingBottom: 10,
    paddingEnd: 118,
    paddingStart: 118,
    borderRadius: 5,
    marginTop: 30,
  },
  resetButtonText:{
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign:'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertContainer: {
    backgroundColor: '#fff',
    padding: 80,
    borderRadius: 10,
    alignItems: 'center',
  },
  alertText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign:'center',
  },
  alertButton: {
    backgroundColor: '#05A8FF',
    paddingTop: 10,
    paddingBottom: 10,
    paddingEnd: 80,
    paddingStart: 80,
    borderRadius: 5,
    color:'#000',
    textAlign:'center',
  },
  alertButtonText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
});
