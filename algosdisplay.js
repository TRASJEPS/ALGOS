// Singly Linked List Node

class SinglyLinkedListNode 
{ 
    constructor(e) 
    {
        this.value = e; 
        this.next = null; 
    }
}

class SinglyLinkedList 
{ 
    constructor() 
    {
        this.head = null; 
    }

    addToHead(e) 
    {
        var newNode = new SinglyLinkedListNode(e);
        newNode.next = this.head; 
        this.head = newNode; 
        return this.head; 
    }

    removeHeadNode() 
    {
        if (this.head == null) 
        { 
            return this.head;
        }
        var removedTheNode = this.head; 
        this.head = removedTheNode.next;
        removedTheNode.next = null;
        return this.head;
    }

    headPosition() 
    {
        if (this.head == null) 
        {
            return null;
        } 
        else 
        {
            return this.head.e;
        }
    }

    display() 
    {
        var changeStringName = "";  //Keep blank
        if (this.head == null) 
        {
            return "";
        }

        changeStringName += this.head.e; 
        var setter = this.head.next;
        while (setter != null) 
        {
            changeStringName += ", " + setter.e; 
            setter = setter.next; 
        }
        return changeStringName;
    }
}