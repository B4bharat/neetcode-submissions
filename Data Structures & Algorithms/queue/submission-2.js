class Node {
  constructor(value) {
    this.val = value || null;
    this.prev = null;
    this.next = null;
  }
}

class MyDeque {
    constructor() {
        this.head = new Node(-1);
        this.tail = this.head;
        this.size = 0;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        if (this.size === 0) return true;

        return false;
    }

    /**
     * @param {number} value
     */
    append(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return;
        }

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.size++;
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.isEmpty()) {
            return -1;
        }

        const tailValue = this.tail.val;

        this.tail = this.tail.prev;
        this.size--;

        return tailValue;
    }

    /**
     * @return {number}
     */
    popleft() {
        if (this.isEmpty()) {
            return -1;
        }

        const headValue = this.head.val;

        this.head = this.head.next;
        this.size--;

        return headValue;
    }
}
