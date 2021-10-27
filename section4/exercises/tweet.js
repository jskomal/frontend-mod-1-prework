/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments){
  this.author = author;
  this.content = content;
  this.timeStamp = timeStamp;
  this.numberOfLikes = numberOfLikes;
  this.comments = comments;
  }
 addLike(newLikesNum) {
   this.numberOfLikes = this.numberOfLikes + newLikesNum
 }
 addComment(newComment) {
   this.comments.push(newComment);
 }
};
var tweet1 = new Tweet('@ImigoMontoya', 'My name is Imigo Montoya, you killed my father prepare to die.', '06/24/1486', 101, ["As you wish!", "Anybody want a peanut?", "Inconceivable!"]);
console.log(tweet1);
tweet1.addLike(14);
console.log(tweet1);
tweet1.addComment("I just want you to feel you're doing well.");
console.log(tweet1);
