import posed from 'react-pose'

const AnimationContainer = posed.div({
  enter: {
    transition: {
      y: { duration: 400, ease: 'easeInOut' }
    },
    y: 0,
    opacity: 1,
    delay: 320,
  },
  exit: {
    transition: { duration: 160 },
    opacity: 0.2,
    y: 40,
  }
})

export {
  AnimationContainer
}