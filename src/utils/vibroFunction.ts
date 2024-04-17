export function vibrate() {
  if ('vibrate' in navigator) {
    navigator.vibrate(100);
  } 
}