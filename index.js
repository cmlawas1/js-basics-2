//import statements
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { appendFileSync } from 'node:fs';

// function that generates a unique ID using a user's first and last name
const generateUniqueID = (first,last) => {
    // creates id by combining the lowercase first character in the first name, the full lowercase last name, and a unique alphanumeric string using the uuid package
    let id = first.toLowerCase().slice(0,1) + last.toLowerCase() + uuidv4().slice(0,8);
    return id;
}

// function that adds an account to users.txt after validation, given an array containing a user's first name, last name, email, and age
const addAccount = (accdetails) => {
    //if all fields are present in the array
    if(accdetails.length == 4) {
        // stores array contents into separate variables
        let first = accdetails[0];
        let last = accdetails[1];
        let email = accdetails[2];
        const age = accdetails[3];

        //if first name, last name, and email are all not empty strings
        if(first.trim() !== "" && last.trim() !== "" && email.trim() !== "") {
            //if email is valid
            if(validator.isEmail(email)) {
                //if age is at least 18
                if(age >= 18) {
                    //properly capitalizes first and last names
                    let first1 = first.toUpperCase().slice(0,1);
                    let first2 = first.toLowerCase().slice(1, first.length);

                    let last1 = last.toUpperCase().slice(0,1);
                    let last2 = last.toLowerCase().slice(1, last.length);
                    
                    //creates data to append to the file
                    let toappend = first1 + first2 + "," + last1 + last2 + "," + email + "," + age + "," + generateUniqueID(first, last) + "\n";
                    //appends the valid user account to the file users.txt ; creates the file if it does not exist yet
                    appendFileSync('users.txt', toappend);
                    
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}

//export statement for access in test.js
export { addAccount }