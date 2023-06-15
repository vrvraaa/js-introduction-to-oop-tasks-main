export function Point(x, y) {
    this._x = x;
    this._y = y;
  }
  
  Point.prototype.getX = function() {
    return this._x;
  }
  
  Point.prototype.getY = function() {
    return this._y;
  }
  
  export function Segment(beginPoint, endPoint) {
    this._beginPoint = beginPoint;
    this._endPoint = endPoint;
  }
  
  Segment.prototype.getBeginPoint = function() {
    return this._beginPoint;
  }
  
  Segment.prototype.getEndPoint = function() {
    return this._endPoint;
  }
  
  export function reverse(segment) {
    const beginPoint = new Point(segment.getEndPoint().getX(), segment.getEndPoint().getY());
    const endPoint = new Point(segment.getBeginPoint().getX(), segment.getBeginPoint().getY());
  
    return new Segment(beginPoint, endPoint);
  }
  
  export default { Segment, Point, reverse };
