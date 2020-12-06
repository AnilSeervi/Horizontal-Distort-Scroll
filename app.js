const blocks = document.getElementsByClassName("block");
const container = document.getElementsByClassName("container");
const hs = new HorizontalScroll.default({
  blocks: blocks,
  container: container,
  isAnimated: true,
  springEffect: 0.8,
});
