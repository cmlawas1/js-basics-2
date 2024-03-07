//imports
import { addAccount } from './index.js'; //import from named export

//test cases
console.log(addAccount(["Alan", "Turing", "aturing@w3c.com", 58])); //true
console.log(addAccount(["nA", "jAemIN", "najaemin0813@naver.com", 23])); //true
console.log(addAccount(["", "renjun", "rj@naver.com", 20])); //false
console.log(addAccount(["     ", "jeno", "samoyed@naver.com", 20])); //false
console.log(addAccount(["lee", "haechan", "haechanahceah@naver.com"])); //false
console.log(addAccount(["park", "jisung", "jisungiebaby@naver.com", 16])); //false