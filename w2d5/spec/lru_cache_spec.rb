require 'rspec'
require 'lru_cache'

describe LRUCache do
  subject(:cache) { LRUCache.new(4) }
  it "caches correctly" do
    cache.add("I walk the line")
    cache.add(5)
    expect(cache.count).to be 2
  end

  it "does not store more than capacity" do
    cache.add("I walk the line")
    cache.add(5)
    cache.add([1,2,3])
    cache.add(5)
    cache.add(-5)
    cache.add({a: 1, b: 2, c: 3})
    cache.add([1,2,3,4])
    expect(cache.count).to be 4
  end

  it "returns cache correctly" do
    cache.add("I walk the line")
    cache.add(5)
    cache.add([1,2,3])
    cache.add(5)
    cache.add(-5)
    cache.add({a: 1, b: 2, c: 3})
    cache.add([1,2,3,4])
    cache.add("I walk the line")
    cache.add(:ring_of_fire)
    cache.add("I walk the line")
    cache.add({a: 1, b: 2, c: 3})
    expect(cache.show).to eq([[1, 2, 3, 4], :ring_of_fire, "I walk the line", {:a=>1, :b=>2, :c=>3}])
  end
end
