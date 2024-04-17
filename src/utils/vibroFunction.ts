const isMobile = () => {
  const nav = navigator.userAgent.toLowerCase();
  return (
      nav.match(/iphone/i) || nav.match(/ipod/i) || nav.match(/ipad/i) || nav.match(/android/i)
  );
};

export function vibrate() {
  if (window.navigator.vibrate) {
    isMobile() && window.navigator.vibrate(100);
  } 
}