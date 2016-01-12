class Rating

  def self.service
    TreloraService.new
  end

  def self.all
    service.ratings
  end

  def self.show(id)
    service.rating_details(id)
  end

  private
  def self.build_object(data)
    OpenStruct.new(data)
  end
end
