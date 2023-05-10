import { useCallback, useEffect, useState } from 'react'
//영화 목록 좌/우 커서 이동 시 자동 스크롤
const clamp = (x, min, max) => Math.min(Math.max(x, min), max)
const between = (x, from, to) => x > from && x < to
export const useAutoScroll = ({
  containerRef,
  skip = false,
  threshold = 50,
  maxSpeed = 70
}) => {
  const [scrollingFactorX, setScrollingFactorX] = useState(0)
  const [direction, setDirection] = useState()
  const containerNode = containerRef.current
  useEffect(() => {
    if (!skip) {
      const intervalId = setInterval(() => {
        const delta = clamp(scrollingFactorX, -maxSpeed, maxSpeed)
        containerNode.scrollLeft += delta
      }, 10)
      return () => {
        clearInterval(intervalId)
      }
    }
  }, [containerNode, skip, scrollingFactorX, maxSpeed])
  const onMove = useCallback(
    event => {
      const { clientX, movementX } = event
      setDirection(prevDirection => {
        if (movementX > 0) {
          return 'right'
        } else if (movementX < 0) {
          return 'left'
        } else {
          return prevDirection
        }
      })
      if (containerNode && !skip) {
        const { x, width } = containerNode.getBoundingClientRect()
        const containerRight = x
        const containerLeft = x + width
        if (
          between(clientX, -Infinity, containerRight + threshold) &&
          direction === 'left'
        ) {
          const delta = containerRight + threshold - clientX
          setScrollingFactorX(delta * -1)
        } else if (
          between(clientX, containerLeft - threshold, Infinity) &&
          direction === 'right'
        ) {
          const delta = containerLeft - threshold - clientX
          setScrollingFactorX(delta * -1)
        } else {
          setScrollingFactorX(0)
        }
      }
    },
    [containerNode, skip, threshold, direction]
  )
  useEffect(() => {
    if (!skip) {
      document.body.addEventListener('mousemove', onMove)
      return () => {
        document.body.removeEventListener('mousemove', onMove)
      }
    }
  }, [onMove, skip])
  useEffect(() => {
    if (skip) {
      setDirection(undefined)
    }
  }, [skip])
}
