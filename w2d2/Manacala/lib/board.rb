class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @cups = Array.new(14) { [] }
    place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    indexes_without_stones = [6,13]
    @cups.each_index do |index|
      unless indexes_without_stones.include? index
        @cups[index] = [:stone, :stone, :stone, :stone]
      end
    end
  end

  def valid_move?(start_pos)
    unless (1..12).include? start_pos
      raise "Invalid starting cup"
    end
  end

  def make_move(start_pos, current_player_name)
    stone_count = @cups[start_pos].count
    @cups[start_pos] = []
    stone_count.times do |i|
      @cups[(start_pos + 1 + i) % @cups.count] << :stone
    end
  end

  def next_turn(ending_cup_idx)
    # helper method to determine what #make_move returns
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
  end

  def winner
  end
end
