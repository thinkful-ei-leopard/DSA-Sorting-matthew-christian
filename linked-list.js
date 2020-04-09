class _Node {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  }
  
class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    //if null and no links
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, node) {
    //if list is empy
    if (this.head === null) {
      this.insertFirst(item);
    }

    if (node === this.head.value) {
      return this.head = new _Node(item, this.head);
    }
    let after = node;
    let tempNode = this.head;

    while(tempNode.value !== after) {
      tempNode = tempNode.next;
    }
    tempNode = new _Node(item, after);
  }
  
  insertAfter(item, before) {
    //if list is empy
    if (this.head === null) {
      this.insertFirst(item);
    }  
    //the value currently after the node where insertion is to occur
    let after;
    //start at the head
    let tempNode = this.head;

    while(tempNode.value !== before) {
      tempNode = tempNode.next;
    }
    after = tempNode.next;
    console.log(`Adding new node ${item} between ${before} and ${after.value}`);
    tempNode.next = new _Node(item, after.value);
  }

  insertAt(item, position) {
    //start at the head
    let tempNode = this.head;
    let after;
    for (let i = 1; i < position - 1; i++) {
      tempNode = tempNode.next;
    }
    after = tempNode.next;
    console.log(`Adding ${item} after ${tempNode.value} before ${after.value}.`);
    tempNode.next = new _Node(item, after);
  }
  
  find(item) {
    let currNode = this.head;

    if (!this.head) {
      return null;
    }

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //if the node to be removed is head,
    //make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //keep track of the previous node
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      //save the previous node
      console.log(currNode);
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  findLength(){
    let count = 0;
    let currNode = this.head;
    while(currNode) {
      count++;
      currNode = currNode.next;
    }
    return count;
  }

  getArray(){
    let arr = [];
    let currNode = this.head;
    while(currNode) {
      arr.push(currNode.value)
      currNode = currNode.next;
    }
    return arr;
  }

}


module.exports = LinkedList;
module.exports = _Node;