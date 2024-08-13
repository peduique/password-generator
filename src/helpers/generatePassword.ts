export const OPTIONS = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+{[}]|\;:,.<>?'
}

export function generatePassword(options: string[], length: number) {
  let charsPossibilities = [...options];

  const password = Array.from({ length }).map(() => {
    const sortedOption = options[Math.floor(Math.random() * options.length)];
    const characters = OPTIONS[sortedOption as keyof typeof OPTIONS];
    charsPossibilities = charsPossibilities.filter(option => option !== sortedOption);

    return characters[Math.floor(Math.random() * characters.length)];
  });

  if (charsPossibilities.length > 0) {
    return generatePassword(options, length);
  }

  return password.join('');
}
