class Stack
  def initialize
    # create ivar to store stack here!
    @stack = []
  end

  def add(el)
    # adds an element to the stack
    @stack.push(el)
  end

  def remove
    # removes one element from the stack
    @stack.pop
  end

  def show
    # return a copy of the stack
    @stack
  end
end

class Queue
  def initialize
    @queue = []
  end

  def enqueue(el)
    @queue.push(el)
  end

  def dequeue
    @queue.shift
  end

  def show
    @queue
  end
end

class Map
  def initialize
    @arraymap = []
  end

  def assign(key, value)
    @arraymap.push([key, value]) unless @arraymap.find { |el| el[0] == key }
  end

  def lookup(key)
    key, val = @arraymap.find { |el| el[0] == key }
    val
  end

  def remove(key)
    @arraymap.delete_if { |el| el[0] == key }
  end

  def show
    @arraymap
  end
end
