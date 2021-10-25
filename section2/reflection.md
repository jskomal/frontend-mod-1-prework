## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

I am definitely a "find the answer on your own" sort of person, so I tend not to ask unless I
absolutely cannot find something myself. I have no issue asking questions and looking
silly, I believe that integral to the learning process, though.
I am confident that I will need to ask more questions to gain higher level information.

1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

I feel it has a mixture of good and bad. On the one hand, I feel that Turing considers
teaching its students how to learn independently one of its top priorities, which is
a positive quality. However, this prework is significantly more technical and abstract
conceptually than anything we discussed in mod0 classes, and I can only assume that
others will struggle to understand these concepts without the guidance of the classroom setting.
I also understand that these foundations that we learn in the prework are just that, foundations,
and that failure to learn these completely will undermine our future successes.

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

A conditional statement relies on the term 'if'. If x happens, then y. If the weather is nice, I take an extra 30 mins on my walk to enjoy Colorado's beauty. For a web example: If you are not logged in, don't let the site show personal details.

1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

If (statement with a condition) {
  consequential action
};
else if (statement with a separate condition) {
  consequential action
};
else if (statement with a third condition) {
  consequential action
};
else {
  consequential action
};

JavaScript reads if statements by trying to coerce each part to become true, in order of how they are written.
The code first parses if the original if statement is true, if not it checks else if and sees if that statement is true, then it checks if the second else if statement is true, and so on. If all statements are false, it runs the command dictated by the else keyword.

1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

Logical Operators
&& AND ||
&& AND Checks that both of the values on the left and right of the && are true, called the operands, if this is so it will return true.
|| OR checks if either of the operands are true, and if so outputs true, but has more complex rules about what it will output and
can be used with nonBoolean data types as well.

1. What questions do you still have about `if` statements and/or functions?

I feel solid on their application, I just need more practice implementing them into actual useful projects and applications!
