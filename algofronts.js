// SINGLY LINKED LISTS

class SinglyLinkedListNode
{ 
    constructor(e) 
    {
        this.e = e; 
        this.next = null; // This is the pointer
    }
}

// The singly-linked list class itself
class SinglyLinkedList 
{ 
    constructor() 
    { 
        // checks if the head is non there
        this.head = null;
    }

     //remember to use .head
    addFront(e) 
    {
        // CALL THE MAIN CLASS
        var newNode = new SinglyLinkedListNode(e); 
        newNode.next = this.head;
        this.head = newNode;
        return this.head; 
    }

    //Starts with the head node
    //remember to use .head
    removeTheHead() 
    {
        if (this.head == null) 
        {
            return this.head;
        }
        var removedNodePosition = this.head; 
        this.head = removedNodePosition.next;
        removedNodePosition.next = null;
        return this.head;
    }

     //remember to use .head
    theHead() 
    {
        // Edge case: list is empty
        if (this.head == null) 
        {
            return null;
        } 
        else 
        { // List is not empty
            return this.head.e;
        }
    }
}