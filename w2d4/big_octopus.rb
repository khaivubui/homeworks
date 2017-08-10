def sluggish_octopus(fish_arr) # O(n^2)
  biggest = nil
  fish_arr.each do |current_fish|
    return current_fish if fish_arr.all? { |other_fish| current_fish.size >= other_fish.size }
  end
end

def dominant_octopus(fish_arr) # O(n log n)
  
end

if $0 == __FILE__
  fishies = ['fish', 'fiiish', 'fiiiiish',
             'fiiiish', 'fffish', 'ffiiiiisshh',
             'fsh', 'fiiiissshhhhhh']
  puts "Sluggish Octopus"
  p sluggish_octopus(fishies)
end
