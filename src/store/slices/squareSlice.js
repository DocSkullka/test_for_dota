import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  squares: [],
};

export const squareSlice = createSlice({
  name: "square",
  initialState,
  reducers: {
    addSquare: (state) => {
      const newSquare = {
        className: 'square',
        key: Math.random().toString(36).substr(2, 9),
        style: {
          backgroundColor: '#' + Math.floor((Math.random() * 16777215) + 1).toString(16),
          border: '2px solid white',
          width: '20vw',
          height: '20vw',
          animation: 'slide-in 0.5s forwards',
        },
        content: null,
      };

      state.squares.push(newSquare);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(removeSquareAsync.fulfilled, (state) => {
      // Удалить последний квадрат
      if (state.squares.length > 0) {
        state.squares.pop();
      }
    })
    .addCase(removeSquareAsync.pending, (state) => {
      // Включить анимацию slide-out для последнего квадрата
      if (state.squares.length > 0) {
        const lastSquare = state.squares[state.squares.length - 1];
        lastSquare.style.animation = 'slide-out 0.5s forwards';
      }
    });
  },
});

export const removeSquareAsync = createAsyncThunk('square/removeSquare', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 550);
  });
});

export const {addSquare} = squareSlice.actions

export default squareSlice.reducer
