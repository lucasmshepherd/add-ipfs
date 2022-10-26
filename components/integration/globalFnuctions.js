export const doPlusn1 = () => {

    if (inputValue < transactionLimit) {
      if (mintLimit > 0 && inputValue < mintLimit) {
        setInputValue(inputValue + 1)
      }
    }
  }

export const doMin1 = () => {
    if (inputValue > 1) {
        setInputValue(inputValue - 1)
    }
}