// Arrays To Do 1

class Node 
{
constructor(value, next = null)
	{
	this.val = value;
	this.next = next;
	}
}

class LinkedList
{
	constructor()
	{
	this.head = null;
	this.size = 0;
	}
}

// THIS IS HOW YOU ADD NODES!  Make a new head, or add to end
add(value)
{
const newNode = new Node(val);
	if(this.head === null)
	{
	this.head = newNode;
	console.log("The head node is:" + val);
	}
	else
	{
	let current = this.head;
    while(current.next)
        {
        current = current.next;    
        }
        current.next = newNode;
        console.log("The head node is:" + val);
	}
    this.size++;
}
