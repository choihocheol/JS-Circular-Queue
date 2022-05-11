class CircularQueue {
    constructor(N) {
        this.N = N;
        this.elements = new Array();
        this.rear = -1;
        this.front = -1;
    }
    enqueue(element) {
        this.rear = (this.rear + 1) % this.N;
        if(!this.checkStatus()) {
            console.error('Queue overflow occured.');
        }
        this.elements[this.rear] = element;
    }
    dequeue() {
        if(!this.checkStatus()) {
            console.error('Queue underflow occured.');
        }
        this.front = (this.front + 1) % this.N;
        return this.elements[this.front];
    }
    checkStatus() {
        if(this.front === this.rear) {
            return false;
        }
        return true;
    }
}
