/*
String: "koala"
*/

const countVowelsAndConsonants = string => {
    const length = string.length;
    const str = string.toLowerCase();
    let vCount = 0;
    let cCount = 0;
    for (let i=0; i< length; i++) {
        if (!Number.isInteger(parseInt(str[i]))) {
            if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u')
                vCount++;
            else
                cCount++;
        }
    }
    return {
        "Vowels": vCount,
        "Consonants": cCount
    }
};

console.log(countVowelsAndConsonants("koala123aaaa"));