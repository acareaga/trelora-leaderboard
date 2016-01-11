class Rating

  def self.service
    TreloraService.new
  end

  def self.all
    service.rating_info
  end

  private
  def self.build_object(data)
    OpenStruct.new(data)
  end
end
