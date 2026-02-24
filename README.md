<!-- no 1 -->
1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
Ans:
getElementById("id") => selects one element byt id & always returns one element.

getElementsByClassName("class") => selects all elements with that one common class name. It returns a collection of HTML.

querySelector("selector") => selects the first element that matches with CSS selector. It can take id,class & tag as well.

querySelectorAll("selector") => selects all matching elemets with CSS selector or, tag. It returs Nodelist.


<!-- no 2 -->
2. How to create and insert a new element into the DOM.
Ans:
For this we follow 3 steps.

Create element => Add Inner Text or, Inner HTML => Append to the page or, section.

<!-- no 3 -->
3. What is Event Bubbling?
Ans:
Event Bubbling means when we click on a child element, this event triggerd  first to that element, then goes to its parent element, then to grandparent & also continues to upward parent div.

<!-- no 4 -->
4.What is Event Delegation? Why is it useful?
Ans:
Event Delegation is instead of adding event to child element, adding it to parent element. Because event delegation Parent element can handle event of its children.
Its usefull because its provide less code, better perfomance & works for dynamically added element.

<!-- no 5 -->
5.Difference between preventDefault() and stopPropagation()
Ans:
preventDefault() stops the default browser action or behavior.
stopPropagation() stops event bubbling from child elements to parent elements.
