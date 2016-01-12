class Person

  def self.service
    TreloraService.new
  end

  def self.show(id)
    service.person(id)
  end

  private

  def self.build_object(data)
    OpenStruct.new(data)
  end
end
