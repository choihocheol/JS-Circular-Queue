class CircularQueue {
    constructor(N) {
        this.N = N;
        this.elements = new Array(N);
        this.rear = -1;
        this.front = -1;
    }
    enqueue(element) {
        this.rear = (this.rear + 1) % this.N;
        if(this.front === this.rear) {
            console.error('Queue overflow occured.');
        }
        this.elements[this.rear] = element;
    }
    dequeue() {
        if(this.front === this.rear) {
            console.error('Queue underflow occured.');
        }
        this.front = (this.front + 1) % this.N;
        return this.elements[this.front];
    }
}
