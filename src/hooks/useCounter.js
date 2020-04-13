import createPersistedState from 'use-persisted-state'

const useCounterState = createPersistedState('count')

const useCounter = () => {
  const [count, setCount] = useCounterState()

  //   return {
  //     count,
  //     increment: () => setCount(currentCount => currentCount + 1),
  //   }
  return [count, setCount]
}

export default useCounter
