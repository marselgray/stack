function Stack() {
  //an empty array is used to implement this stack
    this.stack = [];
  };

  //push function addes an element into the stack
  Stack.prototype.push = function(element) {
    this.stack.push(element);
  };

//pop removes the top most element from the stack
  Stack.prototype.pop = function() {
    return this.stack.pop();
  };

  //peek returns the top most element of the stack
  Stack.prototype.peek = function() {
    return this.stack[this.stack.length - 1];
  };

//length issues the number of elements in the stack
  Stack.prototype.length = function() {
    return this.stack.length;
  };


//returns true or false depending on if the stack is empty or not
  Stack.prototype.isEmpty = function(){
    if(this.stack.length === 0) {
      console.log('true')
    } else {
      console.log('false')
    }
  };

//print calls all the elements in the stack
  Stack.prototype.print = function() {
    console.log(this.stack.join(' '));
  };


//swap switches the two top most elements of teh stack
  Stack.prototype.swap = function(index_A, index_B) {
    input = this;
 
    temp = input[index_A];
    input[index_A] = input[index_B];
    input[index_B] = temp;
};

//Sample
  var stack = new Stack();
  stack.push(5);
  stack.push(10);
  stack.push(8);
  stack.print(); 
  console.log('length is :', stack.length());
  console.log('peek is :', stack.peek());
  console.log('pop is :', stack.pop()); 
  stack.print(); 
  stack.isEmpty();
  stack.swap(0, 1);
  stack.print();
  console.log('pop is :', stack.pop());  
  console.log('length is :', stack.length()); 
  console.log('pop is :', stack.pop()); 
  console.log('peek is :', stack.peek()); 
  console.log('pop is :', stack.pop()); 
  stack.isEmpty();