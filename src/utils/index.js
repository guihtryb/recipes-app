Storage.prototype.setObj = function setobj(key, obj) {
  return this.setItem(key, JSON.stringify(obj));
};

Storage.prototype.getObj = function getobj(key) {
  return JSON.parse(this.getItem(key));
};
