export const isJSON = json => {
  try {
    JSON.parse(json)

    return true
  } catch (e) {
    return false
  }
}

export const compactJSON = json => {
  const string = json.replace(/\n/g, ' ').replace(/\r/g, ' ')
  const result = []

  let flag = false

  for (let d = 0; d < string.length; d++) {
    let i = string.charAt(d)

    if (flag && i === flag) {
      string.charAt(d - 1) !== '\\' && (flag = !1)
    } else if (!flag && (i === '"' || i === "'")) {
      flag = i
    } else if (!flag && (i === ' ' || i === '\t')) {
      i = ''
    }
    result.push(i)
  }

  return result.join('')
}

export const formatJSON = (json, spaces = 2) => {
  const string = json.replace(/\n/g, ' ').replace(/\r/g, ' ')
  const result = []
  let indentLevel = 0
  let flag = false

  for (let f = 0; f < string.length; f++) {
    let g = string.charAt(f)

    if (flag && g === flag) {
      string.charAt(f - 1) !== '\\' && (flag = !1)
    } else if (!flag && (g === '"' || g === "'")) {
      flag = g
    } else if (!flag && (g === ' ' || g === '\t')) {
      g = ''
    } else if (!flag && g === ':') {
      g += ' '
    } else if (!flag && g === ',') {
      g += '\n' + Array(1 + indentLevel * spaces).join(' ')
    } else if (!flag && (g === '[' || g === '{')) {
      indentLevel++
      g += '\n' + Array(1 + indentLevel * spaces).join(' ')
    } else if (!flag && (g === ']' || g === '}')) {
      indentLevel--
      g = '\n' + Array(1 + indentLevel * spaces).join(' ') + g
    }

    result.push(g)
  }
  console.log(result)

  return result.join('')
}
