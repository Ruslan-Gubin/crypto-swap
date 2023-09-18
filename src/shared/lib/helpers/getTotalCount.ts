
export const getTotalCountInBuy = (buyCrypto: number | undefined, sellCrypto: number | undefined, fixed: number) => {
  if (!buyCrypto || !sellCrypto) {
    return 0
  }
  const total = sellCrypto / buyCrypto
  return total.toFixed(fixed) 
}