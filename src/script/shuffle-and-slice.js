export default function shuffleAndSlice(arr, difficulty) {
    let cardNum = difficulty === 'easy' ? 10 : difficulty === 'normal' ? 18 : 30;
  
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  
    return arr.slice(0, cardNum);
}