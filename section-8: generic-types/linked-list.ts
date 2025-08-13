// LinkedList Implementation
export class ListNode<T> {
    next?: ListNode<T>;
  
    constructor(public value: T) {}
}
  
export class LinkedList<T> {
    private root?: ListNode<T>;
    private tail?: ListNode<T>;
    private length = 0;
  
    add(value: T) {
        const node = new ListNode(value);
        if (!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
  
    insertAt(value: T, pos: number) {
        if (pos > -1 && pos < this.length && this.root) {
            let current = this.root;
            let index = 0;
            let previous = current;
            let node = new ListNode(value);
  
            if (pos === 0) {
                node.next = this.root;
                this.root = node;
            } else {
                while (index++ < pos && current.next) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.length++;
            return true;
        } else {
            return false;
        }
    }
  
    removeAt(pos: number) {
        if (pos > -1 && pos < this.length && this.root) {
            let current = this.root;
            let previous: ListNode<T> = current;
            let index = 0;
  
            if (pos === 0) {
                this.root = current.next;
            } else {
                while (index++ < pos && current.next) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.length--;
            return current;
        } else {
            return null;
        }
    }
  
    getNumberOfElements() {
        return this.length;
    }
  
    print() {
        let current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}