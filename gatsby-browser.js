import "./src/styles/global.css";

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const currentPosition = getSavedScrollPosition(location);
  console.log(currentPosition, location.pathname);

  // window.scrollTo(...(currentPosition || [0, 0]));

  return true;
};
