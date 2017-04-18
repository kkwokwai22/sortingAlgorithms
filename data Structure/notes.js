different types of data structures

// They all have different strengths and weaknesses
// some are fast at storing and recording data, while others are not
// some are fast at searching and retrieving data, while others are not

Why are data structures important to know ?

// can have big impact on how performant, quick, and efficiently a program runs
    example - linked list (fast at storing)
    example - hash table (fast at retrieving)

// reinforce knowledge of javascript algorithms and other important concepts
    example - constructor funcs , recursion , this , protoype object, big O notation

constructor function

function User(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
};

var userOne = new User('kevin', 'wong', 24, 'Male');

User.prototype.emailDomain = '@facebook.com';
