const getHours = (start = 0, end = 23) => {
  let hours = []
  for (let i = start; i <= end; i++) {
    if (i < 10) {
      hours.push({
        label: `0${i}点`,
        value: `0${i}`
      })
    } else {
      hours.push({
        label: `${i}点`,
        value: `${i}`
      })
    }
  }
  return hours
}

const getMins = (step) => {
  let mins = []
  for (let i = 0; i < 60; i += step) {
    if (i < 10) {
      mins.push({
        label: `0${i}分`,
        value: `0${i}`
      })
    } else {
      mins.push({
        label: `${i}分`,
        value: `${i}`
      })
    }
  }
  return mins
}

export {
  getHours,
  getMins
}
