class Leaderboard

  def self.service
    TreloraService.new
  end

  def self.show
    data = service.leaderboard
    build_object(data).leaderboard.fetch(:members)
  end

  private

  def self.build_object(data)
    OpenStruct.new(data)
  end
end
