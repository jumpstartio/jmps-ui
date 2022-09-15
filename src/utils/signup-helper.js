export const hasSpecialCharacters = (password) => {
  let isSpecialChar = 0
  for (let i = 0; i < password.length; i++) {
    const code = password.charCodeAt(i)
    if ((code >= 32 && code <= 47) || (code >= 58 && code <= 64) || (code >= 91 && code <= 96) || (code >= 123 && code <= 126)) {
      isSpecialChar++
    }
  }
  return isSpecialChar > 0
}

export const hasNumericCharacters = (password) => {
  let isNumber = 0
  for (let i = 0; i < password.length; i++) {
    const code = password.charCodeAt(i)
    if (code >= 48 && code <= 57) {
      isNumber++
    }
  }
  return isNumber > 0
}

export const hasUpperCaseCharacters = (password) => {
  let isUpperCase = 0
  for (let i = 0; i < password.length; i++) {
    const code = password.charCodeAt(i)
    if (code >= 65 && code <= 90) {
      isUpperCase++
    }
  }
  return isUpperCase > 0
}
