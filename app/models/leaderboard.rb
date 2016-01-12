class Leaderboard

  def self.service
    TreloraService.new
  end

  def self.show
    service.leaderboard
  end

  private

  def self.build_object(data)
    OpenStruct.new(data)
  end
end
