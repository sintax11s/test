export function vibrate() {
  if (window.navigator.vibrate) {
    window.navigator.vibrate(100);
  } 
}