function detectCapitalUse(word: string): boolean {
  if (word.length <= 100 && word.length >= 1) {
    if (word === word.toUpperCase()) {
      return true;
    }

    if (word === word.toLowerCase()) {
      return true;
    }

    if (
      word.charAt(0) === word.charAt(0).toUpperCase() &&
      word.substring(1) === word.substring(1).toLowerCase()
    ) {
      return true;
    }
  }
  return false;
}
