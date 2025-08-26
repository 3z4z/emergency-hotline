<h3>1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?</h3>
Ans:<ul>
    <li><strong>getElementById:</strong> It gets an element by targeting it's id name.</li>
    <li><strong>getElementsByClassName:</strong> It gets the elements by targeting their same class names.</li>
    <li><strong>querySelector:</strong> It gets an element by targeting it's query name. It only takes the first element, no matter it matches further more.</li>
    <li><strong>querySelectorAll:</strong> It gets all the elements by targeting their same query names.</li>
</ul>
<h3>2. How do you create and insert a new element into the DOM?</h3>
Ans: The scenario is demonstrated below:

```
const parent = document.getElementById('parent');
const newElement = document.createElement('div');
newElement.innerText = 'Hello World';
parent.appendChild(newElement)
```

<h3>3. What is Event Bubbling and how does it work?</h3>
Ans: When an event occurs in an element, the event travels to that element’s parent. This behavior is called an event bubble. <strong>Usually giving an event to the parent let the children capture the event and because of that, the children bubble the event to the parent.</strong>
<h3>4. What is Event Delegation in JavaScript? Why is it useful?</h3>
Ans: Through the event bubbling, all the children gets the same event of the parent. This scenario is called <strong>event delegation.</strong>
<h3>5. What is the difference between preventDefault() and stopPropagation() methods?</h3>
Ans: <strong>preventDefault()</strong> prevents browser default behaviors of the target event. On the other hand, <strong>stopPropagation()</strong> stops children's bubbling to the parent.
