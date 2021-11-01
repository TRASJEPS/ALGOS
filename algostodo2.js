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

// REMOVE the HEAD Node!
removeHeadNode()
{
    if(this.head === null)
    {
        return "The list is empty! WHAT HAVE YOU DONE!?";
    }
    else
    {
        this.head = this.head.next;
    }
}

// ADD a HEAD to the front 
// this creates a new node but because its @the front this
// makes it the head
addNewHead(valHead)
{
    if(this.head === null)
    {
        this.head = new Node(valHead);
        console.log("Now theres a new head:" + valHead);
    }
    else
    {
        let temp = this.head;
        this.head = new Node(valHead);
        this.head.next = temp;
    }
}

// Show the Array!  The NODES!  The HEAD!
display()
{
    let counter = 0;
    let current = this.head;
    let str = "";

    while(current)
        {
            str += "Current count: " + counter + ". " + current.val + " ";
            current = current.next;
            counter++;    
        }
        return(`${str}`);
}

// Making the new list!  Add PPL for their own
// the first is the HEAD
let list = new LinkedList();
list.add("Trevoravis");
list.add("Sarah Bear");
list.add("Brandon Monk");
list.add("Evelyn");
list.add("Poppy Everret");
list.add("Jay");
list.add("Rage");
list.add("Moo Cow");
list.add("Aaron");
list.add("Jax");
console.log(list.display());
list.addNewHead("Front Add");
console.log(list.display());

// Count through all the Nodex
// arrays contain all the nodes this cycles through
insertAt(valNode, index)
{
    if(index > 0 && index > this.size)
    {
        console.log("The index of the array is no good!");
        return false;
    }
    let newNode = new Node(valNode);
    let current = this.head;
    let prev; //NOTHING!
    if(index === 0)
    {
        newNode.next = head;
        this.head = newNode;
    }
    else
    {
        current = this.head;
        let position = 0;
        while(position < index)
        {
            position++;
            prev = current;
            current = current.next;
        }
        newNode.next = current;
        prev.next = newNode;
    }
    this.size++
}

removeSelectedNode(index)