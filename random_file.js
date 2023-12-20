export const fileNames = ['adding all numbers up to a number.txt', 'my own fizz buzz.txt',
'all combos of a string.txt', 'my_pagination.txt',
'alphabetize a string.txt',
'array count instances.txt',               'promise delay function.txt',
'array sum function.txt',                  'promise xmlhttprequest.txt',
'camel case function by Nick.txt',
'capitalize beginning of each string.txt',  'regex search.txt',
'check for duplicates.txt' ,                'return largest number.txt',
'concat array items to end.txt',            'reverse a number.txt',
'conditional array size.txt',
'create method crockford style.txt',        'stop youtube video (pause).txt',
'curry examples.txt',                       'telephone number (text formatting).txt',
'letters sum.txt',                          'up to five.txt',
'longest word in sentence.txt'];

// console.log(fileNames)

export function getRandomFileName(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length)

    // console.log(arr[randomIndex]);
    return arr[randomIndex];
}



