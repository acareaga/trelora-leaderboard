class Rating

  def self.service
    TreloraService.new
  end

  def self.all
    data = service.ratings
    build_object(data).ratings
  end

  def self.show(id)
    data = service.rating_details(id)
    build_object(data).ratings
  end

  private
  def self.build_object(data)
    OpenStruct.new(data)
  end
end
