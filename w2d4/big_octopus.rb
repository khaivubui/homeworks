def sluggish_octopus(fish_arr) # O(n^2)
  biggest = nil
  fish_arr.each do |current_fish|
    return current_fish if fish_arr.all? { |other_fish| current_fish.size >= other_fish.size }
  end
end

def dominant_octopus(fish_arr) # O(n log n)
  fish_arr.sort { |fish_a, fish_b| fish_a.size <=> fish_b.size }.last
end

def clever_octopus(fish_arr) # O(n)
  fish_arr.reduce do |acc, fish|
    if acc.size > fish.size
      acc
    else
      fish
    end
  end
end

def slow_dance(direction, tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ])
  tiles_array.each_index do |i|
    return i if tiles_array[i] == direction
  end
end

def constant_dance(direction, tiles_hash = {
  "up" => 0,
  "right-up" => 1,
  "right" => 2,
  "right-down" => 3,
  "down" => 4,
  "left-down" => 5,
  "left" => 6,
  "left-up" => 7
  })
  tiles_hash[direction]
end

if $0 == __FILE__
  fishies = ['fish', 'fiiish', 'fiiiiish',
             'fiiiish', 'fffish', 'ffiiiiisshh',
             'fsh', 'fiiiissshhhhhh']
  puts "Sluggish Octopus"
  p sluggish_octopus(fishies)
  puts "Dominant Octopus"
  p dominant_octopus(fishies)
  puts "Clever Octopus"
  p clever_octopus(fishies)
end
