const leftPad = (length, num) => {
  let result = `${num}`
  while (result.length < length) {
    result = `0${result}`
  }
  return result
}

const getValuesInPosition = (arr, index) => {
  const values = []
  arr.forEach(x => {
    const valueInPosition = x[index]
    if (values.indexOf(valueInPosition) === -1) {
      values.push(valueInPosition)
    }
  })
  return values
}

export const simpleRange = (min, max) => {
  const numLength = min.length
  const minNum = parseInt(min, 10)
  const maxNum = parseInt(max, 10)

  const valuesFromMinToMax = []
  for (let i = minNum; i < maxNum; i++) {
    valuesFromMinToMax.push(
      leftPad(numLength, i)
    )
  }

  // Assemble the selector based on the various values.
  const values = []
  for (let i = 0; i < numLength; i++) {
    const valuesInPosition = getValuesInPosition(valuesFromMinToMax, i)
    values.push(valuesInPosition)
  }

  console.log(values)


  return [
    '--include 0*',
  ]
}

export const reduceIntSet = (valueSet) => {
  if (valueSet.length === 1) {
    return valueSet[0]
  } else if (valueSet.length === 10) {
    return '?'
  }
  return `[${valueSet.join('')}]`
}
