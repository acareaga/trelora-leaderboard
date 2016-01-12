class TreloraService
  attr_reader :connection
  def initialize
    @connection = Hurley::Client::new('http://api.mytrelora.com')
  end

  def rating_info
    parse(connection.get("/ratings?api_key=#{ENV['api_key']}"))
  end

  def ratings_by_transaction(id)
    parse(connection.get("/transacts?api_key=#{ENV['api_key']}/#{id}/ratings"))
  end

  def transaction(id)
    parse(connection.get("/transacts?api_key=#{ENV['api_key']}/#{id}"))
  end

  def member(id)
    parse(connection.get("/members?api_key=#{ENV['api_key']}/#{id}"))
  end

  def people(id)
    parse(connection.get("/people?api_key=#{ENV['api_key']}/#{id}"))
  end

  def leaderboard
    parse(connection.get("/ratings?api_key=#{ENV['api_key']}/leaderboard"))
  end

  private
  def parse(response)
    JSON.parse(response.body, symbolize_names: true)
  end
end
