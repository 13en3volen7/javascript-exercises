const findTheOldest = function(arr) {
    return arr.sort((a, b) => {
        if (!("yearOfDeath" in a) || !("yearOfDeath" in b)) {
            return a.yearOfBirth - b.yearOfBirth;
        }
        const ageOfA = a.yearOfDeath - a.yearOfBirth;
        const ageOfB = b.yearOfDeath - b.yearOfBirth;
        return ageOfB - ageOfA;
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
