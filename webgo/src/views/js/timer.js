class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '输入项:(' + this.x + ', ' + this.y + ')';
    }
    doStuff() {
        console.log('stuff');
    }
}

export default Point