// Instructions can be found in imperative_vs_declarative.md

export function longPasswords(passwords) {
  let longPasswords = [];
  return passwords.filter(item => item.length >= 9)
}
