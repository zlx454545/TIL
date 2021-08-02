function anagrams(word, words) {
  return words.map((wrd) => {
    const wrdCpy = wrd.sort();
    return wrdCpy === word;
  })
} 

function anagrams2(word, words){
  return words.map(wrd=>{wrd.sort()});
}


console.log( anagrams2('abba', ['aabb', 'abcd', 'bbaa', 'dada']));