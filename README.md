###Problem
You can find a ZIP archive as an attachment. This includes 2 text files with each containing a list of words. Each list contains words that are matching somehow. It's up to you to figure out what the connecting part is. Group these words and sort them alphabetically within the group. Sort the groups alphabetically and use the first word of each group while sorting. One last note, I don't want duplicates in each final sort result.

A sample of the required sorting:
A1, A2, A3
B1
C1, C2

###Sample Inputs
Lists of words

    ["Hemarn", "Rispa", "Spari", "Terdamrot", "Amsterdam", "Arnhem", "Erdamamst", "Damrotter", "Rotterdam", "Paris"]
    ["Erdamamst", "Spari", "Paris", "Rispa", "Rotterdam", "Rispa", "Damrotter", "Arnhem", "Terdamrot", "Amsterdam", "Hemarn", "Erdamamst"]

###Installation
**directly using your npm
**
-  cd to dist folder
- excecute **node main.js**
- node version used v12.18.2

**or you can install nest CLI and run the app in dev mode by the following commands**
- npm i -g @nestjs/cli
- cd < app-main-folder>
- npm install
- npm run start

### Technology Used
- this application is built using NestJS which is built with and fully supports TypeScript .

### Implementation Process
- by observation i see that the input lists are words that have a relation between each other.
each word have similarites with different letters order.
- I see this as **Anagram** algoirthm ( anagram of a string is another string that contains the same characters, only the order of characters can be different )
- The problem need to group each string anagrams, sorting them alphapetically and sort all the resulted groups with the first word.

- I sort every word letters and add it to object with key = sortedWord, then if any word have the same sorted value would be pushed to that key.
the result of this would be object with keys = sortedWords and values are arrays of anagrams.
make sure that no duplicate words is pushed.
then the sorting and formating is taking place for more friendly describtive response.

- the implementation can accepts array of lists and run the algorithm for each list
- REST api created /sorter/group-and-sort-words
- the api take list of arrays each list is a dataset

###Using the Algorithm over API 
- run the application as in installation section above.
- make post request on the url `localhost:3000/api/sorter/group-and-sort-words`
- request payload sample
`{  "input_words_lists": [ ["Hemarn", "Rispa", "Spari", "Terdamrot", "Amsterdam", "Arnhem", "Erdamamst", "Damrotter", "Rotterdam", "Paris"],  ["Erdamamst", "Spari", "Paris", "Rispa", "Rotterdam", "Rispa", "Damrotter", "Arnhem", "Terdamrot", "Amsterdam", "Hemarn", "Erdamamst"]  ]
}`

- reponse is object with keys as dataset number and array of groupped anagrams ex:`{"0":[["Amsterdam","Erdamamst"],["Arnhem","Hemarn"],["Damrotter","Rotterdam","Terdamrot"],["Paris","Rispa","Spari"]],"1":[["Amsterdam","Erdamamst"],["Arnhem","Hemarn"],["Damrotter","Rotterdam","Terdamrot"],["Paris","Rispa","Spari"]]}`

- postman collection public url https://www.getpostman.com/collections/9f9e6b6da6a6f685ee98

###Notes
I showed a sceleton in case of using other algorithm and the algorithm type can be added in the API dto and accordingly you can choose which algorithm you want to use to solve your datasets