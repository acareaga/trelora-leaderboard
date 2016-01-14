class Rating
  attr_accessor :ratings
  def self.service
    TreloraService.new
  end

  def self.all
    data = service.ratings
    @ratings = build_object(data).ratings
    rating_with_star_diff
  end

  def self.show(id)
    data = service.rating_details(id)
    @ratings = build_object(data).ratings
    rating_with_star_diff
  end

  def self.rating_with_star_diff
    @ratings.each do |rating|
      difference = 5 - rating[:stars]
      rating[:star_diff] = difference
    end
  end

  private
  def self.build_object(data)
    OpenStruct.new(data)
  end
end
