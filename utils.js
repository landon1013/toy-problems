export { Link, heapify, bubbleUp, bubbleDown, s, diff, isSorted };



function Link(){
	this.start = null;
	this.end = null;
}

Link.prototype.add = function(item, order){
	var newItem = {
		data: item,
		next: null
	}
	if(order){
				
		var point = this.traverse(item, this.start);
		console.log(point);

	} else {
		if(this.end){
			this.end.next = newItem;
			this.end = newItem;
		} else {
			this.start = newItem;
			this.end = newItem;
		}
	}
	return newItem;

};

Link.prototype.traverse = function(x, y){
	y = y || this.start;
	console.log('PASSED:', x < y.data);
	if(x < y.data) {
		console.log('ITEM FOUND:', y);
		// Everything seems to be working, except when I test the return value
		// It gives me undefined.
		// wtf.
		return y;
	} else {
		this.traverse(x, y.next);
	}
}


function heapify(arr){
	var heap = [];
		for(var i = 0; i < arr.length; i++){
			var currentInd = heap.push(arr[i]) - 1;
			if(currentInd <= 0) continue;
			heap = bubbleUp(currentInd, heap);
		};
	return heap;
}

function bubbleUp(ind, arr){
		var parentInd = Math.floor((ind - 1) / 2);
			if(arr[ind] > arr[parentInd]){
				s(arr, ind, parentInd);
				bubbleUp(parentInd, arr);
			}
	return arr;
}

function bubbleDown(ind, arr){
	var left = 2 * ind + 1;
	var right = 2 * ind + 2;	
	var largest = ind;
	if(arr[left] > arr[ind] && arr[left] > arr[right]){
		largest = left;
	} else if(arr[right] > arr[ind] && arr[right] > arr[left]){
		largest = right;
	};
	if(largest !== ind){
		s(arr, ind, largest);
		bubbleDown(largest, arr);
	};
}

function s(array, a, b){
  var temp = array[a];
  array[a] = array[b];
  array[b] = temp;
};

function diff(a, b){
	return Math.abs(Number(a) - Number(b));
};

function isSorted(arr){
	return arr.every(function(item, ind, arr){
		if(ind === arr.length - 1) return true;
		return item <= arr[ind + 1];
	});
}

