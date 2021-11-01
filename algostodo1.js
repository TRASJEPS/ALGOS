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

// Making the new list!  Add PPL for their own
// the first is the HEAD
let list = new LinkedList();
list.add("Trevoravis");
list.add("Sarah Bear");
list.add("Brandon Monk");
list.add("Evelyn");
list.add("Poppy Everret");

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

}